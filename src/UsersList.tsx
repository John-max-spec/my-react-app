import React, { useEffect, useState } from 'react';
import { DefaultApi } from './api'; // 导入 API 客户端
import type { UsersGet200ResponseInner } from './api/models'; // 导入用户类型

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<UsersGet200ResponseInner[]>([]);
  const api = new DefaultApi(); // 确保 api 在组件内定义
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await api.usersGet();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [api]); // 将 api 添加到依赖数组中

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li> // 确保 user.id 和 user.name 是正确的属性
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
