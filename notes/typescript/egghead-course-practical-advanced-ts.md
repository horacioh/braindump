# Egghead course: Practical Advanced TypeScript

- [link](https://egghead.io/courses/practical-advanced-typescript)
- author: [Rares Matei](https://twitter.com/volkeron)

---

Improve Readability with TypeScript Numeric Separators when working with Large Numbers

```ts
const amount = 1234567890; // is not very readable
const readable_amount = 1_234_567_890; // better!
```

---

Make TypeScript Class Usage Safer with Strict Property Initialization

- using the new `strictPropertyInitialization` property on the `tsconfig.json`, we can let typescript that properties on our classes are going to be initialized on construction.

```ts
class Library {
  titles!: string[]; // check the ! at the end of the property name
}

// there will not be a TS error here, but you might end up with runtime errors
const shortTitles = library.titles.filter((title) => title.length < 5);
```

---

Use the JavaScript “in” operator for automatic type inference in TypeScript

```ts
interface Admin {
  id: string;
  role: string:
}
interface User {
  email: string;
}

function redirect(usr: Admin | User) {
  if ("role" in usr) {
    routeToAdminPage(usr.role);
  } else {
    routeToHomePage(usr.email);
  }
}
```

---

you can add an explicit type to an object, and infer the types of the other object properties by it. this is useful when dealing with switch statements, and make sure you are handling every case (using union types).

```ts
export interface Action {
  type: string;
}

export class Add implements Action {
  readonly type = "Add"; //explicit "Add" type. is called the discriminate
  constructor(public payload: string) {}
}

export class RemoveAll implements Action {
  readonly type = "Remove All";
}

export type TodoActions = Add | RemoveAll; // union type. this is the finite state cases
```

---

Create Explicit and Readable Type Declarations with TypeScript mapped Type Modifiers

```ts
interface IPet {
  name: string;
  age: number;
  favoritePark?: string;
}

type ReadonlyPet = {
  +readonly [K in keyof IPet]-?: IPet[K];
};
```

let's explain the code above:

- `ReadonlyPet` is a new type that is modifying all the properties from the `IPet` interface
- it's setting all its properties to `readonly` (`+readonly` in the beginning, the `+` is optional)
- it's also removing all the optional types from `iPet` (remove `favoritePark`)
- `[K in keyof IPet]: IPet[K]` I guess is the mapped iterator part? 🤷‍♂️

---

Use Types vs. Interfaces

The main difference between type aliases and interfaces are that you can build union types with type aliases but not with interface. an Interface is an specific contract, it cannot be one thing or another.

Another thing you can do with interfaces are define different with the same name. this will result in a merge between the two. That's why you can locally extend an interface (using a `typings.d.ts` file for example). So make sure when you are creating a library, all the public types must be implemented with interfaces and not type aliases.

```ts
// ❌
type Foo = {
  a: string;
};

type Foo = {
  b: string;
};
```

```ts
// ✅
interface Foo {
  a: string;
}

interface Foo {
  b: string;
}

let foo: Foo;
foo.
```

```ts
// ❌
type PetType = IDog | ICat;

// not possible to extend from a union type
interface IPet extends PetType {}

class Pet implements PetType {}

interface IDog {}
interface ICat {}
```

---

Build self-referencing type aliases in TypeScript

```ts
interface TreeNode<T> {
  value: T;
  left: TreeNode<T>;
  right: TreeNode<T>;
}
```

---

Use the TypeScript "unknown" type to avoid runtime errors

`any` type is the most loose type in TS, it will lead to lots of errors
the type `unknown` works better because it will only accept assertions when you check types in the code

---

Dynamically Allocate Function Types with Conditional Types in TypeScript

You can conditionally add types to properties in your interfaces, using a ternary operator on the type declaration

```ts
type Item<T> = {
  id: T;
  container: T extends string ? StringContainer : NumberContainer;
};
```

You can even filter types:

```ts
type ArrayFilter<T> = T extends any[] ? T : never;

type StringsOrNumbers = ArrayFilter<string | number | string[] | number[]>;
// StringsOrNumbers type now is string[] | number[] (it filtered all the non-array types)
```

Another examples is to lock down the types that a function can accept like the example below:

```ts
interface IItemService {
  getItem<T extends string | number>(id: T): T extends string ? Book : Tv;
}

// `<T extends string | number>` will only let the generic to be extended from `string` and `number`

let itemService: IItemService;

const book = itemService.getItem("10");
const tv = itemService.getItem(true); // TS will complain in this case
```

Generics + conditionals are super powerful

```ts
const numbers = [2, 1]; // --> number[]

const someObject = {
    id: 21,
    name: 'Jonathan'
};

const someBoolean = true;

type Flatten<T> = T extends any [] ? T[number];
    T extends object ? T[keyof T];
    T;

// keyof T --> "id" | "name"
// T["id" | "name"] --> T["id"] | T["name"] --> number | string

type NumbersArrayFlattened = Flatten<typeof numbers>; // --> number
type SomeObjectFlattened = Flatten<typeof someObject>; // --> number | string
type SomeBooleanFlattened = Flatten<typeof someBoolean>; // --> true
```

---

Infer the Return Type of a Generic Function Type Parameter
https://egghead.io/lessons/typescript-infer-the-return-type-of-a-generic-function-type-parameter

```ts
function generateId(seed: number) {
  return seed + 5;
}

type ReturnType<T> = T extends (...args: any[]) => R ? R : any;
type Id = ReturnType<typeof generateId>;

lookupEntity(generateId(10));

function lookupEntity(id: string) {
  // query DB for entity by ID
}
```

---

Deeply mark all the properties of a type as read-only in TypeScript

```ts
type DeepReadonlyObject<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> };
// this applies `readonly` to all the attrs to an object and then recursively calls it to its values

type DeepReadonly<T> = T extends (infer E)[]
  ? ReadonlyArray<ReadonlyArray<DeepReadonlyObject<E>>>
  : T extends object
  ? DeepReadonlyObject<T>
  : T;

// this is a conditional type that checks if the tyoe is an array so we can call non-mutable methods to the array (map, filter...)

type IReadonlyRootState = DeepReadonly<IRootState>;
```

---

Dynamically initialize class properties using TypeScript decorators

Decorators are a powerful feature of TypeScript that allow for efficient and readable abstractions when used correctly. In this lesson we will look at how we can use decorators to initialize properties of a class to promises that will make GET requests to certain URLs. We will also look at chaining multiple decorators to create powerful and versatile abstractions.

```ts
function First() {
  return function (target: any, name: string) {
    const hiddenInstanceKey = "_$$" + name + "$$_";
    const prevInit = Object.getOwnPropertyDescriptor(target, name).get;
    const init = () => {
      return prevInit().then((response) => response[0]);
    };

    Object.defineProperty(target, name, {
      get: function () {
        return this[hiddenInstanceKey] || (this[hiddenInstanceKey] = init());
      },
      configurable: true,
    });
  };
}

class TodoService {
  @First() // second decorator
  @GetTodos("https://jsonplaceholder.typicode.com/todos") // first decorator!
  todos: Promise<ITodo[]>;
}
```

decorators are called from bottom to top!
