import React from 'react'
import ReactDOM from 'react-dom/client';

import {AppWrapper} from '@influxdata/clockface'

const App = () => {
  return (
    <h2>Hello again, world!</h2>
  )
}

console.log('hello!')

ReactDOM.createRoot(document.getElementById('content')).render(<App />)
