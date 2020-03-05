### hook 为了替代class
>即为了拥有class可以存储state的特性，又不受声明周期的影响
>可以在不编写class的情况下使用state和react的特性

```javascript
function useState(initialState) {
  let state = initialState
  let dispach = (newstate) => {
    state = newstate

  }
  return [state, dispach]
}

```
```javascript
import React, { useState, useEffect } from 'react'
function Example() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count+1)}>
        click me
      </button>
    </div>
  )
}
useEffect(() => {})//相当于componentDidMount
```
