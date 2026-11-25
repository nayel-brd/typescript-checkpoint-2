# TypeScript Checkpoint: Building React Apps with TypeScript

This project converts two React components from JavaScript to TypeScript.

## Steps I did

1. **Greeting (function component)**
   - Added a `GreetingProps` type with `name: string`.
   - Typed the function parameter as `GreetingProps` instead of an untyped `{ name }`.
   - Kept the same JSX output: `Hello, {name}!`.

2. **Counter (class component)**
   - Added a `CounterProps` type (no props) and a `CounterState` type with `count: number`.
   - Extended `Component<CounterProps, CounterState>` so `this.state` and `setState` are typed.
   - Typed the initial state as `CounterState`.
   - Wrote `increment` as an arrow function so `this` stays bound to the class.
   - Fixed a bug in the original code: `return` was on its own line, so React got `undefined`. The JSX now starts on the same line as `return`.

3. **Project setup**
   - `tsconfig.json` uses `strict: true` and the `react-jsx` transform.
   - `package.json` has the `react`, `@types/react` and `typescript` dependencies and a `typecheck` script.

## Run the type check

    npm install
    npm run typecheck
