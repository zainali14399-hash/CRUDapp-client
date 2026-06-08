import { Trash2, Pencil } from "lucide-react";
import userAPI from "../api/userAPI";
import { useEffect, useState } from "react";

function UserCard({ setEditUser, deleteUser }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function(){
    fetchUsers();
  },[])
  async function fetchUsers() {
    try {
      const res = await userAPI.getAllUsers();
      console.log("Response",res.data.data);
      setUsers(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    if (loading) return <p>Loading...</p>;
  }

  return (
    <div className="p-4">

      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700">
          Users
        </h2>
        <p className="text-sm text-gray-500">
          Manage all registered users
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 border border-gray-100"
          >

            {/* Top */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {user.name}
                </h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>

              <span
                className={`text-xs px-2 py-1 rounded-full ${user.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                  }`}
              >
                {user.status}
              </span>
            </div>

            {/* Info */}
            <div className="mt-3 space-y-1 text-sm text-gray-600">
              <p>
                <span className="font-medium">Role:</span> {user.role}
              </p>
             
            </div>

            {/* Actions */}
            <div className="mt-4 flex justify-end gap-2">

              <button
                onClick={() => setEditUser(user)}
                className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition"
              >
                <Pencil size={14} />
                Edit
              </button>

              <button
                onClick={() => deleteUser(user.id)}
                className="flex items-center gap-1 px-3 py-1 text-sm bg-red-100 text-red-600 hover:bg-red-200 rounded-md transition"
              >
                <Trash2 size={14} />
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default UserCard;