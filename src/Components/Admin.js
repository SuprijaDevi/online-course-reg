import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/admin');
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {userData.map((reg1) => (
            <li key={reg1.id}>
              <strong>Name:</strong> {reg1.name}, <strong>Email:</strong> {reg1.studentId}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
