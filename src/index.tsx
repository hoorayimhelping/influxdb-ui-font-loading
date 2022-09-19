import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'

import {AppWrapper, Icon, IconFont, TreeNav, Page} from '@influxdata/clockface'
import '@influxdata/clockface/dist/index.css'

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(true)

  const handleExpansionToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <TreeNav
      expanded={isExpanded}
      onToggleClick={handleExpansionToggle}
    >
      <TreeNav.Item
        label="Upload"
        icon={<Icon glyph={IconFont.Upload_New} />}
      />
      <TreeNav.Item
        label="Graphs"
        icon={<Icon glyph={IconFont.GraphLine_New} />}
      />
    </TreeNav>
  )
}

const App = () => {
  return (
    <AppWrapper classname="yes">
      <Navigation />
      <Page>
        <Page.Contents>
          <h1>Hello, world!</h1>
          <h1 style={{'fontFamily': 'Helvetica'}}>Hello, non-styled world!</h1>
        </Page.Contents>
      </Page>
    </AppWrapper>
  )
}

console.log('hello!')

ReactDOM.createRoot(document.getElementById('content')).render(<App />)
