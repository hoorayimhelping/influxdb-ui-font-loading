import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

import {AppWrapper, Icon, IconFont, TreeNav, Page} from '@influxdata/clockface';
import '@influxdata/clockface/dist/index.css';

import {Graph} from 'src/graph';

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpansionToggle = () => {
    setIsExpanded(!isExpanded);
  };

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
  );
}

const App = () => {
  return (
    <AppWrapper classname="yes">
      <Navigation />
      <Page>
        <Page.Contents>
          <h1 style={{margin: '0.25em 0'}}>Hello, Proxima Nova!</h1>
          <h1 style={{'fontFamily': 'Helvetica', margin: '0.25em 0'}}>Hello, Helvetica!</h1>
          <Graph />
        </Page.Contents>
      </Page>
    </AppWrapper>
  );
};

ReactDOM.createRoot(document.getElementById('content')).render(<App />);
