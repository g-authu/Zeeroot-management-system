import React, { useState, useEffect } from 'react';
import './UserDataTable.css'; 

function UserDataTable() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingUser, setEditingUser] = useState(null); 
  const [editFormData, setEditFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [addFormData, setAddFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        return response.json();
      })
      .then(data => {
        setUserData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    const updatedData = userData.filter(user => user.id !== id);
    setUserData(updatedData);
  };

  const handleEdit = (user) => {
    setEditingUser(user); 
    setEditFormData(user); 
  };

  const handleEditInputChange = (event) => {
    const { name, value } = event.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    const updatedUserData = userData.map(user =>
      user.id === editingUser.id ? editFormData : user
    );
    setUserData(updatedUserData);
    setEditingUser(null); 
  };

  const handleAddInputChange = (event) => {
    const { name, value } = event.target;
    setAddFormData({ ...addFormData, [name]: value });
  };

  const handleAddSubmit = (event) => {
    event.preventDefault();
    const newUserId = userData.length + 1;
    const newUser = { id: newUserId, ...addFormData };
    setUserData([...userData, newUser]);
    setShowAddModal(false); 
    setAddFormData({
      name: '',
      username: '',
      email: '',
      phone: '',
      website: ''
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="user-table-container">
      <h1>User Data Table</h1>
      <div className="table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>
                  <button onClick={() => handleEdit(user)}>Edit</button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={() => setShowAddModal(true)}>Add User</button>
      {editingUser && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit User</h2>
            <form onSubmit={handleEditSubmit}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={editFormData.name}
                onChange={handleEditInputChange}
                required
              />
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={editFormData.username}
                onChange={handleEditInputChange}
                required
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={editFormData.email}
                onChange={handleEditInputChange}
                required
              />
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={editFormData.phone}
                onChange={handleEditInputChange}
                required
              />
              <label>Website:</label>
              <input
                type="text"
                name="website"
                value={editFormData.website}
                onChange={handleEditInputChange}
                required
              />
              <button type="submit">Save Changes</button>
            </form>
          </div>
        </div>
      )}
      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add User</h2>
            <form onSubmit={handleAddSubmit}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={addFormData.name}
                onChange={handleAddInputChange}
                required
              />
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={addFormData.username}
                onChange={handleAddInputChange}
                required
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={addFormData.email}
                onChange={handleAddInputChange}
                required
              />
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={addFormData.phone}
                onChange={handleAddInputChange}
                required
              />
              <label>Website:</label>
              <input
                type="text"
                name="website"
                value={addFormData.website}
                onChange={handleAddInputChange}
                required
              />
              <button color='red' type="submit">Add User</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDataTable;
