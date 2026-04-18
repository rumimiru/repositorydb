import React, { useState, useEffect } from 'react'

function App() {
  // Step 3: useState
  const [count, setCount] = useState(0)

  // Step 4: useEffect
  useEffect(() => {
    console.log("Count changed:", count)
  }, [count])

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Hooks Demo</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

export default App
