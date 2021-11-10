# XState Tip: Share a global machine in React using Context

> TLDR: Check the code [here](https://codesandbox.io/s/share-a-global-machine-in-react-using-context-v1-30c54) and [here](https://codesandbox.io/s/share-a-global-machine-in-react-using-context-v2-6bq0h)

Here you can see a way to create a XState Actor and make it accessible in React using the Context API. The cool thing about doing this, is that the actor value will **never change**, making it a safe to add it as a value of our Context and avoid unnecesary renders or rendering all your tree when the state changes.

1. Create your global state machine

```typescript
import { createModel } from "xstate/lib/model"
type User = {
  username: string
  id: string
  email: string
}
export const authModel = createModel(
  {
    user: null as User | null,
  },
  {
    events: {
      LOG_IN: () => ({}),
      LOG_OUT: () => ({}),
    },
  }
)

export const authMachine = authModel.createMachine({
  context: {
    user: {
      // this can be fetched inside the machine.
      // checkout my other post:
      // https://www.horacioh.com/writing/auth-flow-with-xstate-and-react
      email: "foo@bar.com",
      username: "horacio",
      id: "1234567890",
    },
  },
  // ...
})
```

2. create a Provider Component and a custom hook for your actor

```typescript
// ...

const authContext = React.createContext<InterpreterFrom<
  typeof authMachine
> | null>(null)

export function useAuth() {
  const context = React.useContext(authContext)
  if (!context) {
    throw new Error(`useAuth must be called inside a AuthProvider`)
  }

  return context
}

export const AuthProvider = authContext.Provider
```

3. You can also create custom selectors for accessing the state or context values:

```typescript
import { useSelector } from "@xstate/react"

// ...

export function useUser() {
  return useSelector(useAuth(), (state) => state.context.user)
}
```

4. Implement and Start your Actor

```typescript
import { AuthProvider } from "./auth"
export function App() {
  const authService = useInterpret(authMachine)
  // ...
  return <AuthProvider value={authService}>{/* ... */}</AuthProvider>
}
```

5. Inside any component that is rendered inside the Provider, you can then access the auth actor:

```typescript
import { useAuth } from "./auth"
import { useActor } from "@xstate/react"

export function Topbar() {
  const authService = useAuth()
  const [state, send] = useActor(authService)

  // ...
}
```

**BONUS**

6. You can abstract all the Context/Provider creation to a simple set of utility functions! (kudos to the [Stately Team!](https://github.com/statelyai/xstate-viz/blob/dev/src/utils.ts))

```typescript
// machine-utils.ts

import { useSelector } from "@xstate/react"
import * as React from "react"
import { ActionTypes, Interpreter } from "xstate"

export function isNullEvent(eventName: string) {
  return eventName == ActionTypes.NullEvent
}

export function isInternalEvent(eventName: string) {
  const allEventsExceptNull = Object.values(ActionTypes).filter(
    (val) => !isNullEvent(val)
  )
  return allEventsExceptNull.some((prefix) => eventName.startsWith(prefix))
}

export function createInterpreterContext<
  TInterpreter extends Interpreter<any, any, any>
>(displayName: string) {
  const [Provider, useContext] =
    createRequiredContext<TInterpreter>(displayName)

  const createUseSelector =
    <Data>(selector: (state: TInterpreter["state"]) => Data) =>
    () => {
      return useSelector(useContext(), selector)
    }

  return [Provider, useContext, createUseSelector] as const
}

export function createRequiredContext<TContext>(displayName: string) {
  const context = React.createContext<TContext | null>(null)
  context.displayName = displayName
  function useContext() {
    const ctx = React.useContext(context)
    if (!ctx) {
      throw new Error(
        `use${displayName} must be called inside a ${displayName}Provider`
      )
    }

    return ctx
  }

  return [context.Provider, useContext] as const
}
```

And use them like this:

```typescript
// auth-context.ts

import { authStateMachine } from "./auth"
import { InterpreterFrom } from "xstate"
import { createInterpreterContext } from "./machine-utils"

const [AuthProvider, useAuth, createAuthSelector] =
  createInterpreterContext<InterpreterFrom<typeof authStateMachine>>("Auth")

export { AuthProvider, useAuth }

export const useUser = createAuthSelector((state) => state.context.user)
```

Feel free to checkout the code for the version 1 [here](https://codesandbox.io/s/share-a-global-machine-in-react-using-context-v1-30c54) and the version with the bonus code [here](https://codesandbox.io/s/share-a-global-machine-in-react-using-context-v2-6bq0h?file=/src/App.tsx)

## Versión 1

<iframe src="https://codesandbox.io/embed/share-a-global-machine-in-react-using-context-v1-30c54?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Share a global machine in React using Context V1"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Versión Bonus

<iframe src="https://codesandbox.io/embed/share-a-global-machine-in-react-using-context-v2-6bq0h?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Share a global machine in React using Context V2"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
