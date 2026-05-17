# React Learning

This repository contains my React learning notes, examples, and practice tasks. The goal is to build React concepts step by step and keep everything readable for revision and interview preparation.

## What is React?

React is a JavaScript library used to build user interfaces.

It is mainly used for building:

- Single page applications
- Dashboards
- Admin panels
- Portfolio websites
- E-commerce interfaces
- Reusable UI components

React helps us divide the UI into small reusable pieces called **components**.

## Why React is Used

React is popular because it makes UI development easier and more organized.

React helps us:

- Create reusable components.
- Manage dynamic data easily.
- Build fast and interactive user interfaces.
- Keep UI logic and design together.
- Update only the required part of the page.
- Build large applications in a structured way.

## Folder Structure

```text
react-learning/
|-- 01-jsx/
|   |-- README.md
|   |-- package.json
|   |-- src/
|   `-- public/
|-- 02-components/
|   |-- README.md
|   `-- examples/
|       |-- StatelessFunctionalComponent.jsx
|       |-- StatefulClassComponent.jsx
|       `-- FunctionalComponentWithState.jsx
|-- 03-props/
|-- 04-state/
`-- README.md
```

## Lessons

### 01 - JSX

JSX allows us to write HTML-like code inside JavaScript.

Topics covered:

- What is JSX?
- Why JSX is used
- JSX syntax rules
- Embedding JavaScript expressions
- JSX attributes
- Fragments
- Common mistakes
- Best practices
- Interview questions

### 02 - Components

Components are reusable parts of the UI.

Topics covered:

- What is a component?
- Why components are used
- Stateless functional component
- Stateful class component
- Functional component with state
- Common mistakes
- Best practices
- Interview questions

Example:

```jsx
function Header() {
  return <h1>Welcome</h1>
}
```

### 03 - Props

Props are used to pass data from one component to another component.

Example:

```jsx
function User({ name }) {
  return <h2>Hello, {name}</h2>
}
```

### 04 - State

State is used to store data that can change inside a component.

Example:

```jsx
import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>
}
```

## Basic React App Example

```jsx
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is my first React app.</p>
    </div>
  )
}

export default App
```

## Important React Concepts

- JSX
- Components
- Props
- State
- Events
- Conditional rendering
- Lists and keys
- Forms
- Hooks
- Routing
- API calls

## Common React Commands

Create a React app using Vite:

```powershell
npm.cmd create vite@latest 01-jsx -- --template react
```

Install dependencies:

```powershell
npm.cmd install
```

Run the development server:

```powershell
npm.cmd run dev
```

Create production build:

```powershell
npm.cmd run build
```

## Interview Questions

### 1. What is React?

React is a JavaScript library used to build user interfaces, especially single page applications.

### 2. What is a component?

A component is a reusable piece of UI.

### 3. What is JSX?

JSX is a syntax extension that allows us to write HTML-like code inside JavaScript.

### 4. What are props?

Props are used to pass data from parent component to child component.

### 5. What is state?

State is data managed inside a component. When state changes, React re-renders the component.

### 6. What is the difference between props and state?

Props are passed from outside a component, while state is managed inside the component.

### 7. Why do we use React?

We use React to build reusable, fast, and interactive user interfaces in a structured way.

## Best Practices

- Keep components small and reusable.
- Use meaningful component names.
- Keep files organized by topic.
- Write clean JSX.
- Remove unused imports.
- Practice each concept with small examples.
- Write README notes for every lesson.

## Summary

- React is used to build user interfaces.
- React apps are made using components.
- JSX makes UI code readable.
- Props pass data between components.
- State handles changing data.
- This repository is for React practice, notes, and interview preparation.
