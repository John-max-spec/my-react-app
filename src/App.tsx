import React from 'react';
import './App.css';
import UsersList from './UsersList'; // 导入 UsersList 组件

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Users List</h1>
        <UsersList /> {/* 渲染 UsersList 组件 */}
      </header>
    </div>
  );
};

export default App;
