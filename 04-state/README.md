# State

State is data managed inside a React component. When state changes, React re-renders the component and updates the UI.

## What is State?

State is used for data that can change over time.

Example:

```jsx
const [count, setCount] = useState(0)
```

Here:

- `count` is the current state value.
- `setCount` is the function used to update state.
- `useState(0)` sets the initial value to `0`.

## Why State is Used

State helps us build interactive UI.

State is used for:

- Counter values
- Form input values
- Show and hide UI
- Toggle buttons
- Search text
- Selected tabs
- Cart items
- Loading status
- Error messages
- Dynamic lists

## Importing useState

To use state in a functional component, import `useState` from React.

```jsx
import { useState } from "react"
```

## Number State Example

```jsx
import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
```

## Boolean State Example

Boolean state is useful for show/hide, open/close, true/false behavior.

```jsx
import { useState } from "react"

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div>
      <h2>Toggle Message</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Message" : "Show Message"}
      </button>

      {isVisible && <p>This message is controlled by state.</p>}
    </div>
  )
}

export default ToggleMessage
```

## String State Example

String state is commonly used for input values.

```jsx
import { useState } from "react"

function NameInput() {
  const [name, setName] = useState("")

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter name"
      />

      <p>Name: {name}</p>
    </div>
  )
}

export default NameInput
```

## Array State Example

Array state is useful for lists.

```jsx
import { useState } from "react"

function SkillList() {
  const [skill, setSkill] = useState("")
  const [skills, setSkills] = useState([])

  const addSkill = () => {
    if (skill.trim() === "") return

    setSkills((prevSkills) => [...prevSkills, skill])
    setSkill("")
  }

  return (
    <div>
      <h2>Skills</h2>

      <input
        type="text"
        value={skill}
        onChange={(event) => setSkill(event.target.value)}
        placeholder="Enter skill"
      />

      <button onClick={addSkill}>Add Skill</button>

      <ul>
        {skills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default SkillList
```

## Updating State Correctly

Do not update state directly.

Wrong:

```jsx
count = count + 1
```

Correct:

```jsx
setCount(count + 1)
```

When the next state depends on the previous state, prefer callback syntax.

```jsx
setCount((prevCount) => prevCount + 1)
```

For arrays:

```jsx
setSkills((prevSkills) => [...prevSkills, skill])
```

## Props vs State

| Props | State |
| --- | --- |
| Passed from parent to child | Managed inside component |
| Read-only | Can be updated |
| Used to send data | Used for changing data |
| Child cannot modify directly | Component updates using setter |

## Suggested Folder Structure

```text
04-state/
|-- README.md
`-- src/
    |-- App.jsx
    `-- components/
        |-- Counter.jsx
        |-- ToggleMessage.jsx
        `-- SkillList.jsx
```

## Common Mistakes

### 1. Updating State Directly

Wrong:

```jsx
skills.push("React")
```

Correct:

```jsx
setSkills((prevSkills) => [...prevSkills, "React"])
```

### 2. Using One State for Different Data Types

Wrong:

```jsx
const [skills, setSkills] = useState([])

<input value={skills} onChange={(event) => setSkills(event.target.value)} />
```

Here `skills` starts as an array, but becomes a string after typing.

Correct:

```jsx
const [skill, setSkill] = useState("")
const [skills, setSkills] = useState([])
```

Use one state for input text and another state for the array list.

### 3. Forgetting to Use `value` and `onChange` Together

Controlled input example:

```jsx
<input
  value={skill}
  onChange={(event) => setSkill(event.target.value)}
/>
```

### 4. Calling Setter Immediately

Wrong:

```jsx
<button onClick={setCount(count + 1)}>Increase</button>
```

Correct:

```jsx
<button onClick={() => setCount(count + 1)}>Increase</button>
```

## Best Practices

- Use meaningful state names.
- Keep state as simple as possible.
- Do not mutate arrays or objects directly.
- Use separate state variables for separate responsibilities.
- Use callback syntax when new state depends on old state.
- Keep input value and list value in separate state variables.
- Use props for parent data and state for changing component data.

## Interview Questions

### 1. What is state in React?

State is data managed inside a component. When state changes, React re-renders the component.

### 2. What is `useState`?

`useState` is a React hook used to add state to functional components.

### 3. Does updating state re-render the component?

Yes. When state updates, React re-renders the component to show the latest UI.

### 4. Can we update state directly?

No. We should use the setter function returned by `useState`.

### 5. What is the difference between props and state?

Props are passed from parent to child. State is managed inside a component and can change.

### 6. How do you update array state?

Use a new array instead of mutating the old array.

```jsx
setSkills((prevSkills) => [...prevSkills, newSkill])
```

### 7. Why do we use callback syntax in state updates?

Callback syntax is useful when the next state depends on the previous state.

```jsx
setCount((prevCount) => prevCount + 1)
```

## Summary

- State stores changing data inside a component.
- `useState` adds state to functional components.
- State updates trigger re-render.
- Use setter functions to update state.
- Do not mutate arrays or objects directly.
- Use separate state for input value and array list.
- State is one of the most important concepts for building real React projects.

