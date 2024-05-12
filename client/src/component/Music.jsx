import React, { useState } from 'react'

export default function Music() {
    const [count, setCount] = useState(0);
  return (
    <div onClick={() => setCount(count + 1)}>{count}</div>
  )
}
