import React from 'react'
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';

import {AppWrapper, Page} from '@influxdata/clockface'
import '@influxdata/clockface/dist/index.css'

const App = () => {
  return (
    <AppWrapper classname="yes">
      <Page>
        <Page.Contents>
          <h1>Hello, world!</h1>
        </Page.Contents>
      </Page>
    </AppWrapper>
  )
}

console.log('hello!')

// ReactDOM.createRoot(document.getElementById('content')).render(<App />)
ReactDOM.render(<App />, document.getElementById('content'))
