# State Machine Tip: Crea un Actor y compartelo Globalmente en tu app usando React Context

- Ir a la [Lista completa](./state-machine-tips)

> TLDR: revisa el código [aquí](https://codesandbox.io/s/share-a-global-machine-in-react-using-context-v1-30c54) y [aquí](https://codesandbox.io/s/share-a-global-machine-in-react-using-context-v2-6bq0h)

Te enseño una manera de create un XState Actor y compartirlo globalmente en React usando la API de Context. Lo bueno de este método es que nuestro actor **no cambia nunca**, de modo que es seguro usarlo como valor del Context global evitando así renderizados innecesarios o renderizados completos del arbol completo de la app cuando el estado global cambia.

1. Creemos nuestra máquina de estados global

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
      // puedes obtener la info del usuario dentro de la máquina
      // Te recomiendo que veas mi post sobre cómo hacerlo (en inglés):
      // https://www.horacioh.com/writing/auth-flow-with-xstate-and-react
      email: "foo@bar.com",
      username: "horacio",
      id: "1234567890",
    },
  },
  // ...
})
```

2. crea el componente Provider y un custom hook para nuestro actor

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

3. Puedes incluso también crear selectores para partes de tu estado global

```typescript
import { useSelector } from "@xstate/react"

// ...

export function useUser() {
  return useSelector(useAuth(), (state) => state.context.user)
}
```

4. Implementemos y Inicializemos nuestro actor:

```typescript
import { AuthProvider } from "./auth"
export function App() {
  const authService = useInterpret(authMachine)
  // ...
  return <AuthProvider value={authService}>{/* ... */}</AuthProvider>
}
```

5. Dentro de cualquier componente que este renderizado dentro de nuestro Provider, podemos acceder a nuestro actor de ésta forma:

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

6. Si necesitas hacer varios Providers globales para otras máquinas de estado, puedes abstraer la manera de crear el context y el Provider a una serie de funciones abstractas! (kudos al [equipo de Stately!](https://github.com/statelyai/xstate-viz/blob/dev/src/utils.ts))

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

Y usarlas de esta manera:

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

Puedes Revisar el código functionando de la primera versión [aquí](https://codesandbox.io/s/share-a-global-machine-in-react-using-context-v1-30c54) y el de la versión con el bonus [aquí](https://codesandbox.io/s/share-a-global-machine-in-react-using-context-v2-6bq0h?file=/src/App.tsx)

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
