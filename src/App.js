import React from 'react';
import './App.css';
import VirtualList from './component/VirtualList';

function App() {
  return (
    <div className='App'>
      <VirtualList total={100} />
    </div>
  )
}

export default App;
