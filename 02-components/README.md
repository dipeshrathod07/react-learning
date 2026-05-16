# Components

Components are the building blocks of a React application. A component is a reusable piece of UI that can contain JSX, JavaScript logic, props, state, and events.

## What is a Component?

A component is a JavaScript function or class that returns JSX.

Example:

```jsx
function Welcome() {
  return <h1>Welcome to React</h1>
}
```

React applications are usually made by combining many small components.

## Why Components are Used

Components help us:

- Reuse UI code.
- Split a large UI into smaller parts.
- Keep code clean and organized.
- Maintain large applications easily.
- Test and update one part of the UI without touching everything.

## Types of Components

There are two common ways to write components:

- Functional components
- Class components

Modern React mainly uses **functional components** with hooks. Class components are older, but they are still useful to understand for interviews and older codebases.

## Stateless Functional Component

A stateless functional component is a component that does not manage its own state.

```jsx
function Greeting() {
  return <h1>Hello, React Learner</h1>
}

export default Greeting
```

## Stateful Class Component

A stateful class component is a class-based component that manages its own state.

```jsx
import { Component } from "react"

class Counter extends Component {
  constructor() {
    super()

    this.state = {
      count: 0,
    }
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increaseCount}>Increase</button>
      </div>
    )
  }
}

export default Counter
```

In this example:

- `this.state` stores component data.
- `this.setState()` updates the state.
- `render()` returns JSX.

## Functional Component with State

In modern React, we use the `useState` hook instead of class component state.

```jsx
import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default Counter
```

## Practice Folder Structure

```text
02-components/
|-- README.md
|-- examples/
|   |-- StatelessFunctionalComponent.jsx
|   |-- StatefulClassComponent.jsx
|   `-- FunctionalComponentWithState.jsx
`-- src/
    |-- App.jsx
    `-- components/
        |-- Header.jsx
        |-- ProfileCard.jsx
        `-- Footer.jsx
```

## Common Mistakes

- Component name starts with lowercase.
- Component is created but not exported.
- Component is exported but not imported.
- Returning multiple elements without a parent element or fragment.
- Creating one very large component instead of smaller reusable components.

## Best Practices

- Use functional components for new React code.
- Start component names with capital letters.
- Keep components small and focused.
- Use props to pass data into components.
- Use state only when data changes over time.
- Move repeated UI into reusable components.

## Interview Questions

### 1. What is a component in React?

A component is a reusable piece of UI that returns JSX.

### 2. What are the two main types of components?

Functional components and class components.

### 3. Which component type is preferred in modern React?

Functional components are preferred in modern React.

### 4. What is a stateless component?

A stateless component is a component that does not manage its own state.

### 5. What is a stateful component?

A stateful component is a component that manages data that can change over time.

### 6. Do we still use class components?

Class components are not commonly used in new React projects, but they may exist in older projects and can appear in interviews.

## Summary

- Components are reusable UI blocks.
- Functional components are the modern React standard.
- Class components are older but important for interview understanding.
- Stateless components do not manage state.
- Stateful components manage data that changes.
- Use hooks like `useState` for state in functional components.

