import React, { useState, useEffect } from 'react';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Employee Dashboard</h2>

      {loading ? (
        <p className="text-gray-500">Loading data...</p>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">ID</th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">{user.id}</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">{user.name}</td>
                  <td className="py-3 px-4 text-gray-700">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;