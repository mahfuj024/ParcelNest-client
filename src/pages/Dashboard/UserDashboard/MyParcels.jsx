import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

function MyParcels() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [showAll, setShowAll] = useState(false);

  const { isPending, error, data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-center mt-10">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center mt-10">Error loading parcels</p>
    );
  }

  const displayedParcels = showAll ? parcels : parcels.slice(0, 8);

  const handleDeleteParcel = (parcel) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${parcel._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your parcel has been deleted.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false
              });
              refetch();
            }
          })
          .catch((err) => {
            console.log(err);
            Swal.fire("Error!", "Failed to delete parcel.", "error");
          });
      }
    });
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'BDT',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount || 0);
  };

  return (
    <div className="max-w-7xl mx-auto">

      {/* Title */}
      <h1 className="cinzel-font text-2xl md:text-3xl lg:text-4xl font-bold text-center my-3 md:my-3 lg:my-4">
        My Parcels
      </h1>

      <div className="bg-white p-1 sm:p-4 md:p-6 lg:p-9 rounded-lg md:rounded-xl mt-4 md:mt-5 lg:mt-7">

        {/* Top Section */}
        <div className="flex justify-between items-center mb-2 md:mb-6">
          <h1 className="cinzel-font text-lg md:text-xl mt-3 md:mt-0 lg:text-[26px] font-bold">
            Total Parcels : {parcels.length}
          </h1>
        </div>

        {/* Desktop Table - Original Style */}
        <div className="overflow-x-auto rounded-t-lg min-h-50 hidden md:block">
          <table className="table w-full border-separate border-spacing-y-2">
            <thead className="bg-primary text-black h-12 md:h-14 lg:h-16 text-xs sm:text-sm md:text-base lg:text-lg">
              <tr>
                <th className="rounded-tl-lg">#</th>
                <th>Title</th>
                <th>Created By</th>
                <th className='text-center'>Weight</th>
                <th className='text-center'>Total Cost</th>
                <th className="rounded-tr-lg text-center">Action</th>
              </tr>
            </thead>

            <tbody className="text-xs sm:text-sm md:text-base lg:text-lg">
              {displayedParcels.map((parcel, index) => (
                <tr key={parcel._id} className="bg-white">
                  <td>{index + 1}</td>
                  <td className="font-medium">{parcel.title || "N/A"}</td>
                  <td>{parcel.createdBy || "N/A"}</td>
                  <td className='text-center'>{parcel.weight ? `${parcel.weight} kg` : "N/A"}</td>
                  <td className='text-center'>{formatCurrency(parcel.totalCost)}</td>
                  <td className="text-center">
                    <button
                      onClick={() => handleDeleteParcel(parcel)}
                      className="p-1 sm:p-2 rounded-full bg-red-500 cursor-pointer text-white hover:bg-red-600 transition duration-300"
                      title="Delete Parcel"
                    >
                      <FaTrashAlt className="text-xs sm:text-sm md:text-base lg:text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View - Original Style */}
        <div className="md:hidden">
          {displayedParcels.map((parcel, index) => (
            <div key={parcel._id} className="bg-white p-4 rounded-lg shadow mb-3">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold">Title: {parcel.title || "N/A"}</p>
                  <p className="text-gray-500 text-sm mt-1">Created By: {parcel.createdBy || "N/A"}</p>
                  <p className="text-gray-500 text-sm mt-1">Weight: {parcel.weight ? `${parcel.weight} kg` : "N/A"}</p>
                  <p className="text-gray-500 text-sm mt-1">Total Cost: {formatCurrency(parcel.totalCost)}</p>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center">
                    <p className="text-sm font-semibold">Action</p>
                    <button
                      onClick={() => handleDeleteParcel(parcel)}
                      className="p-2 mt-1 rounded-full cursor-pointer bg-red-500 text-white hover:bg-red-600"
                      title="Delete Parcel"
                    >
                      <FaTrashAlt className="text-xs sm:text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less */}
        {parcels.length > 8 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn bg-[#D1A05A] outline-none border-none cinzel-font text-white text-sm md:text-lg lg:text-xl font-semibold md:font-bold px-5 hover:bg-[#b8893f] transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}

        {/* Empty State */}
        {parcels.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">No parcels found</p>
            <p className="text-gray-400 text-sm mt-2">Start by creating your first parcel</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default MyParcels;