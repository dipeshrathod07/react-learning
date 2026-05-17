# JSX

JSX is one of the first important topics in React. These notes are written for quick revision, practice, and interview preparation.

## What is JSX?

JSX stands for **JavaScript XML**.

It allows us to write HTML-like code inside JavaScript.

Example:

```jsx
function App() {
  return <h1>Hello World</h1>
}
```

This looks like HTML, but it is actually JSX. React converts JSX into JavaScript before showing it in the browser.

## Why JSX is Used

JSX is used because it makes React code easier to read and write.

Without JSX:

```jsx
React.createElement("h1", null, "Hello World")
```

With JSX:

```jsx
<h1>Hello World</h1>
```

JSX helps us:

- Write UI code in a clean way.
- Combine JavaScript logic with UI.
- Create reusable React components.
- Understand component structure easily.

## JSX Syntax Rules

JSX has some important rules:

### 1. Return Only One Parent Element

Wrong:

```jsx
return (
  <h1>Hello</h1>
  <p>Welcome</p>
)
```

Correct:

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
)
```

### 2. Close Every Tag

Wrong:

```jsx
<img src="profile.png">
```

Correct:

```jsx
<img src="profile.png" />
```

### 3. Use `className` Instead of `class`

Wrong:

```jsx
<div class="card">Profile</div>
```

Correct:

```jsx
<div className="card">Profile</div>
```

### 4. Use `htmlFor` Instead of `for`

Wrong:

```jsx
<label for="email">Email</label>
```

Correct:

```jsx
<label htmlFor="email">Email</label>
```

## Embedding JavaScript Expressions

JavaScript expressions can be used inside JSX with curly braces `{}`.

Example:

```jsx
function App() {
  const name = "Dipesh"

  return <h1>Hello, {name}</h1>
}
```

You can use:

- Variables
- Function calls
- Math expressions
- Conditional expressions
- Array methods like `map()`

Example:

```jsx
function App() {
  const age = 21

  return <p>Next year age: {age + 1}</p>
}
```

## JSX Attributes

JSX attributes are similar to HTML attributes, but some names are different.

Example:

```jsx
function App() {
  return <img src="/profile.png" alt="Profile" />
}
```

Common JSX attributes:

| HTML | JSX |
| --- | --- |
| `class` | `className` |
| `for` | `htmlFor` |
| `onclick` | `onClick` |
| `tabindex` | `tabIndex` |

Example with event:

```jsx
function App() {
  return <button onClick={() => alert("Clicked!")}>Click Me</button>
}
```

## Fragments

Fragments allow us to return multiple elements without adding an extra `div`.

Example:

```jsx
function App() {
  return (
    <>
      <h1>My Profile</h1>
      <p>React Learner</p>
    </>
  )
}
```

Fragments are useful when we do not want unnecessary wrapper elements in the HTML.

## Common Mistakes

### 1. Using `class` Instead of `className`

```jsx
<div className="box">Correct</div>
```

### 2. Forgetting to Close Tags

```jsx
<input type="text" />
```

### 3. Returning Multiple Elements Without a Parent

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
)
```

### 4. Using Statements Inside JSX

Wrong:

```jsx
return <h1>{if (true) "Hello"}</h1>
```

Correct:

```jsx
return <h1>{true ? "Hello" : "Hi"}</h1>
```

## Best Practices

- Keep JSX simple and readable.
- Use meaningful component names.
- Use `className` for CSS classes.
- Use fragments when no wrapper element is needed.
- Move complex logic outside the JSX return.
- Break large UI into smaller components.
- Use proper indentation.

Example:

```jsx
function ProfileCard() {
  const name = "Dipesh Rathod"
  const role = "React Learner"

  return (
    <section className="profile-card">
      <h1>{name}</h1>
      <p>{role}</p>
    </section>
  )
}
```

## Interview Questions

### 1. What is JSX?

JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside React components.

### 2. Is JSX required in React?

No. JSX is not required, but it makes React code easier to write and understand.

### 3. Why do we use `className` instead of `class`?

Because `class` is a reserved keyword in JavaScript. React uses `className` for CSS classes.

### 4. Can browsers read JSX directly?

No. JSX must be converted into regular JavaScript using tools like Vite, Babel, or a build tool.

### 5. Why should JSX return only one parent element?

Because a component must return one single value. We can use a parent element like `div` or a fragment `<>...</>`.

### 6. What are fragments in React?

Fragments let us group multiple elements without adding extra nodes to the DOM.

### 7. How do we write JavaScript inside JSX?

We write JavaScript expressions inside curly braces `{}`.

Example:

```jsx
<h1>Hello, {name}</h1>
```

## Summary

- JSX means JavaScript XML.
- JSX allows us to write HTML-like code inside JavaScript.
- JSX improves readability in React components.
- JSX must return one parent element.
- Tags must be closed properly.
- Use `className` instead of `class`.
- Use `{}` to write JavaScript expressions inside JSX.
- Fragments help avoid unnecessary wrapper elements.

