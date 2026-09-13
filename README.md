1. What is JSX?

JSX is a syntax that allows us to write HTML-like code inside JavaScript/TypeScript. React uses JSX to describe what the UI should look like.

2. Props vs State

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

3. What does useState do?

useState creates state in a React component. I used it to store the selected technologies in the user's stack.

4. What does useEffect do?

useEffect runs side effects after a component renders. I used it to fetch technology data from the JSON file when the application loads.

5. Why does map need a key?

React uses the key to uniquely identify each item in a list and efficiently update the UI when the list changes.
