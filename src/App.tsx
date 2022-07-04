import React from 'react';
import './App.css';
import Avatar from './components/Avatar';

function App() {
  return (
    <div className="App">
      <Avatar
        size='default'
        shape="circle"
        src={"https://avatars.githubusercontent.com/u/58759688?s=400&u=842529771510454c0a08f62427e80b9485a8d524&v=4"}
      />
    </div>
  );
}

export default App;
