import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

function AllUsers() {
  const axiosSecure = useAxiosSecure();
  const [showAll, setShowAll] = useState(false);

  const { isPending, error, data: users = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    }
  });

  const handleRoleChange = async (user) => {
    try {
      const newRole = user.role === "user" ? "admin" : "user";

      const result = await Swal.fire({
        title: 'Are you sure?',
        text: `Change role from ${user.role} to ${newRole}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, change it!'
      });

      if (result.isConfirmed) {
        const res = await axiosSecure.patch(`/users/${user._id}/role`, {
          role: newRole
        });

        if (res.data.modifiedCount > 0) {
          Swal.fire(
            "Success!",
            `User role changed to ${newRole} successfully`,
            "success"
          );
          refetch();
        }
      }
    } catch (err) {
      console.log(err);
      Swal.fire("Error", "Failed to update user role", "error");
    }
  };

  if (isPending) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-10">Error loading users</p>;
  }

  const displayedUsers = showAll ? users : users.slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto">

      {/* Title */}
      <h1 className="cinzel-font text-2xl md:text-3xl lg:text-4xl font-bold text-center my-3 md:my-3 lg:my-4">
        All Users
      </h1>

      <div className="bg-white p-1 sm:p-4 md:p-6 lg:p-9 rounded-lg md:rounded-xl mt-4 md:mt-5 lg:mt-7">

        {/* Top Section */}
        <div className="flex justify-between items-center mb-2 md:mb-6">
          <h1 className="cinzel-font text-lg md:text-xl mt-3 md:mt-0 lg:text-[26px] font-bold">
            Total Users : {users.length}
          </h1>
        </div>

        {/* Desktop Table */}
        <div className="overflow-x-auto rounded-t-lg min-h-50 hidden md:block">
          <table className="table w-full border-separate border-spacing-y-2">

            <thead className="bg-primary text-black h-12 md:h-14 lg:h-16 text-xs sm:text-sm md:text-base lg:text-lg">
              <tr>
                <th className="rounded-tl-lg">#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th className="rounded-tr-lg text-center">Created At</th>
              </tr>
            </thead>

            <tbody className="text-xs sm:text-sm md:text-base lg:text-lg">
              {displayedUsers.map((user, index) => (
                <tr key={user._id} className="bg-white">

                  {/* Index */}
                  <td>{index + 1}</td>

                  {/* Name */}
                  <td className="font-medium">
                    {user.name || "N/A"}
                  </td>

                  {/* Email */}
                  <td>
                    {user.email}
                  </td>

                  {/* Role */}
                  <td>
                    <button
                      onClick={() => handleRoleChange(user)}
                      className={`px-3 py-1 rounded-full font-semibold cursor-pointer transition min-w-[80px] ${user.role === "admin"
                          ? "bg-purple-500 text-white hover:bg-purple-600"
                          : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                    >
                      {user.role || "user"}
                    </button>
                  </td>

                  {/* Created At */}
                  <td className="text-center">
                    {user.created_at
                      ? new Date(user.created_at).toLocaleDateString()
                      : "N/A"}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          {displayedUsers.map((user, index) => (
            <div key={user._id} className="bg-white p-4 rounded-lg shadow mb-3">

              <p className="font-semibold">
                {index + 1}. {user.name || "N/A"}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                Email: {user.email}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                Role:{" "}
                <button
                  onClick={() => handleRoleChange(user)}
                  className={`px-3 py-1 rounded-full font-semibold cursor-pointer transition min-w-[80px] ${user.role === "admin"
                      ? "bg-purple-500 text-white hover:bg-purple-600"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                >
                  {user.role || "user"}
                </button>
              </p>

              <p className="text-gray-500 text-sm mt-1">
                Created At: {user.created_at
                  ? new Date(user.created_at).toLocaleDateString()
                  : "N/A"}
              </p>

            </div>
          ))}
        </div>

        {/* Show More / Show Less */}
        {users.length > 8 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn bg-[#D1A05A] outline-none border-none cinzel-font text-white text-sm md:text-lg lg:text-xl font-semibold md:font-bold px-5 hover:bg-[#b8893f] transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default AllUsers;