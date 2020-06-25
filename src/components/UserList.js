  import React from 'react'

  const getUsers = _ =>
  Array(100)
    .fill(null)
    .map((_, idx) => {
      const id = idx + 1;
      return { id, name: `User ${id}` };
      
    });
    
  const UserList = _ => {
    const users = getUsers();
    return (
      <div style={{backgroundColor: "lightblue"}}>
       <ul>
        {users.map(user => (
         <li  key={user.id}>{user.name}</li>
         
        ))}
      </ul >
      </div>
     
      
    );
   
   
  };
  
  
export default UserList