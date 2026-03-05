import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

function AllParcels() {

  const axiosSecure = useAxiosSecure();
  const [showAll, setShowAll] = useState(false);

  const { isPending, error, data: parcels = [] } = useQuery({
    queryKey: ["allParcels"],
    queryFn: async () => {
      // Fix: Use /parcels/all instead of /parcels
      const res = await axiosSecure.get("/parcels/all");
      return res.data;
    }
  });

  if (isPending) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-10">Error loading parcels</p>;
  }

  const displayedParcels = showAll ? parcels : parcels.slice(0, 8);

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
        All Parcels
      </h1>

      <div className="bg-white p-1 sm:p-4 md:p-6 lg:p-9 rounded-lg md:rounded-xl mt-4 md:mt-5 lg:mt-7">

        {/* Top Section */}
        <div className="flex justify-between items-center mb-2 md:mb-6">
          <h1 className="cinzel-font text-lg md:text-xl mt-3 md:mt-0 lg:text-[26px] font-bold">
            Total Parcels : {parcels.length}
          </h1>
        </div>

        {/* Desktop Table */}
        <div className="overflow-x-auto rounded-t-lg min-h-50 hidden md:block">
          <table className="table w-full border-separate border-spacing-y-2">

            <thead className="bg-primary text-black h-12 md:h-14 lg:h-16 text-xs sm:text-sm md:text-base lg:text-lg">
              <tr>
                <th className="rounded-tl-lg">#</th>
                <th>Title</th>
                <th>Created By</th>
                <th>Receiver</th>
                <th className="text-center">Weight (kg)</th>
                <th className="rounded-tr-lg text-center">Total Cost</th>
              </tr>
            </thead>

            <tbody className="text-xs sm:text-sm md:text-base lg:text-lg">
              {displayedParcels.map((parcel, index) => (
                <tr key={parcel._id} className="bg-white">

                  {/* Index */}
                  <td>{index + 1}</td>

                  {/* Title */}
                  <td className="font-medium">
                    {parcel.title || "N/A"}
                  </td>

                  {/* Created By */}
                  <td>
                    {parcel.createdBy || "N/A"}
                  </td>

                  {/* Receiver Name */}
                  <td>
                    {parcel.receiverName || "N/A"}
                  </td>

                  {/* Weight */}
                  <td className="text-center">
                    {parcel.weight ? `${parcel.weight} kg` : "N/A"}
                  </td>

                  {/* Total Cost */}
                  <td className="text-center">
                    {formatCurrency(parcel.totalCost)}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          {displayedParcels.map((parcel, index) => (
            <div key={parcel._id} className="bg-white p-4 rounded-lg shadow mb-3">

              <p className="font-semibold">
                #{index + 1} - {parcel.title || "N/A"}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                <span className="font-medium">Created By:</span> {parcel.createdBy || "N/A"}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                <span className="font-medium">Receiver:</span> {parcel.receiverName || "N/A"}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                <span className="font-medium">Weight:</span> {parcel.weight ? `${parcel.weight} kg` : "N/A"}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                <span className="font-medium">Total Cost:</span> {formatCurrency(parcel.totalCost)}
              </p>

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
              {showAll ? "Show Less" : `Show More (${parcels.length - 8} more)`}
            </button>
          </div>
        )}

        {/* Empty State */}
        {parcels.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">No parcels found</p>
            <p className="text-gray-400 text-sm mt-2">Parcels will appear here once created</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default AllParcels;