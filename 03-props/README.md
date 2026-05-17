# Props

Props are used to pass data from one component to another component in React.

The word **props** means **properties**.

## What are Props?

Props are data passed from a parent component to a child component.

Example:

```jsx
<UserCard name="Dipesh" role="React Learner" />
```

Here `name` and `role` are props.

The child component receives them:

```jsx
function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.role}</p>
    </div>
  )
}
```

## Why Props are Used

Props help us:

- Pass data between components.
- Reuse the same component with different data.
- Keep components dynamic.
- Avoid repeating the same UI code.
- Make components more flexible.

## Parent to Child Data Flow

Props always flow from parent to child.

Example:

```jsx
function App() {
  return <UserCard name="Dipesh" city="Ahmedabad" />
}
```

`App` is the parent component.

`UserCard` is the child component.

The parent sends data, and the child receives it.

## Basic Props Example

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

function App() {
  return (
    <div>
      <Welcome name="Dipesh" />
      <Welcome name="React Learner" />
      <Welcome name="Frontend Developer" />
    </div>
  )
}
```

The same `Welcome` component is reused with different values.

## Props with Destructuring

Instead of writing `props.name`, `props.role`, and `props.city`, we can destructure props.

Without destructuring:

```jsx
function UserCard(props) {
  return <h2>{props.name}</h2>
}
```

With destructuring:

```jsx
function UserCard({ name, role, city }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>City: {city}</p>
    </div>
  )
}
```

This is cleaner and commonly used in React.

## Passing Different Data to Same Component

```jsx
function App() {
  return (
    <div>
      <UserCard name="Dipesh" role="React Learner" city="Ahmedabad" />
      <UserCard name="Rahul" role="Frontend Developer" city="Surat" />
      <UserCard name="Priya" role="UI Developer" city="Mumbai" />
    </div>
  )
}
```

One component can display different data using props.

## Default Props

Default values are used when a prop is not passed.

Example:

```jsx
function CourseCard({ title, level = "Beginner" }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Level: {level}</p>
    </div>
  )
}
```

Usage:

```jsx
<CourseCard title="React Basics" />
<CourseCard title="Advanced React" level="Advanced" />
```

If `level` is not passed, React will use `"Beginner"`.

## Props Children

`children` is a special prop in React.

It represents the content placed between opening and closing component tags.

Example:

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>
}
```

Usage:

```jsx
<Card>
  <h2>React Props</h2>
  <p>Props make components reusable.</p>
</Card>
```

Here, the `h2` and `p` tags are passed as `children`.

## Props are Read-Only

Props should not be changed inside the child component.

Wrong:

```jsx
function UserCard({ name }) {
  name = "New Name"
  return <h2>{name}</h2>
}
```

Correct:

```jsx
function UserCard({ name }) {
  return <h2>{name}</h2>
}
```

If data needs to change, use state.

## Suggested Folder Structure

```text
03-props/
|-- README.md
|-- examples/
|   |-- BasicProps.jsx
|   |-- DestructuringProps.jsx
|   `-- DefaultProps.jsx
`-- src/
    |-- App.jsx
    `-- components/
        |-- UserCard.jsx
        |-- CourseCard.jsx
        `-- SkillBadge.jsx
```

## Common Mistakes

### 1. Forgetting Curly Braces in JSX

Wrong:

```jsx
<h2>name</h2>
```

Correct:

```jsx
<h2>{name}</h2>
```

### 2. Mutating Props

Props are read-only. Do not directly modify them.

### 3. Wrong Prop Name

Parent:

```jsx
<UserCard username="Dipesh" />
```

Child:

```jsx
function UserCard({ name }) {
  return <h2>{name}</h2>
}
```

This will not show the value because the prop names do not match.

### 4. Not Importing the Component

If a component is used in `App.jsx`, it must be imported first.

## Best Practices

- Use clear and meaningful prop names.
- Destructure props for cleaner code.
- Keep components reusable.
- Do not modify props inside child components.
- Use default values when a prop can be optional.
- Pass only the data a component actually needs.
- Use props for data that comes from a parent.
- Use state for data that changes inside a component.

## Interview Questions

### 1. What are props in React?

Props are properties used to pass data from parent component to child component.

### 2. Are props read-only?

Yes. Props are read-only and should not be modified inside the child component.
-i.e Props are immutable.

### 3. What is props destructuring?

Props destructuring means directly extracting values from the props object.

Example:

```jsx
function User({ name }) {
  return <h2>{name}</h2>
}
```

### 4. What is the difference between props and state?

Props are passed from parent to child. State is managed inside a component and can change over time.

### 5. Can we pass functions as props?

Yes. Functions can be passed as props, usually to allow a child component to communicate with a parent component.

### 6. What is `children` in props?

`children` is a special prop that contains the content placed between a component's opening and closing tags.

### 7. Can props be passed from child to parent?

Props directly flow from parent to child. To send data from child to parent, we pass a function from parent to child and call it inside the child.

## Summary

- Props means properties.
- Props pass data from parent to child.
- Props make components reusable.
- Props are read-only.
- Props can be destructured.
- The same component can display different data using props.
- Use props for external data and state for changing internal data.

