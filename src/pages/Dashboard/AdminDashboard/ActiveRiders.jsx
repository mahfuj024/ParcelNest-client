import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

function ActiveRiders() {
    const axiosSecure = useAxiosSecure();
    const [showAll, setShowAll] = useState(false);

    const { isPending, error, data: riders = [], refetch } = useQuery({
        queryKey: ["activeRiders"],
        queryFn: async () => {
            const res = await axiosSecure.get("/riders/active"); // Fixed: removed query param
            return res.data;
        }
    });

    const handleStatusToggle = async (rider) => {
        try {
            const newStatus = rider.status === "active" ? "pending" : "active";
            const res = await axiosSecure.patch(`/riders/${rider._id}/status`, {
                status: newStatus
            });
            if (res.data.modifiedCount > 0) {
                Swal.fire("Success", `Status changed to ${newStatus}`, "success");
                refetch();
            }
        } catch (err) {
            console.log(err);
            Swal.fire("Error", "Failed to update status", "error");
        }
    };

    if (isPending) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    if (error) {
        return <p className="text-center mt-10">Error loading active riders</p>;
    }

    const displayedRiders = showAll ? riders : riders.slice(0, 8);

    return (
        <div className="max-w-7xl mx-auto">

            {/* Title */}
            <h1 className="cinzel-font text-2xl md:text-3xl lg:text-4xl font-bold text-center my-3 md:my-3 lg:my-4">
                Active Riders
            </h1>

            <div className="bg-white p-1 sm:p-4 md:p-6 lg:p-9 rounded-lg md:rounded-xl mt-4 md:mt-5 lg:mt-7">

                {/* Top Section */}
                <div className="flex justify-between items-center mb-2 md:mb-6">
                    <h1 className="cinzel-font text-lg md:text-xl mt-3 md:mt-0 lg:text-[26px] font-bold">
                        Total Active Riders : {riders.length}
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
                                <th>Vehicle Type</th>
                                <th>District</th>
                                <th className="rounded-tr-lg text-center">Status</th>
                            </tr>
                        </thead>

                        <tbody className="text-xs sm:text-sm md:text-base lg:text-lg">
                            {displayedRiders.map((rider, index) => (
                                <tr key={rider._id} className="bg-white">
                                    <td>{index + 1}</td>
                                    <td className="font-medium">{rider.name || "N/A"}</td>
                                    <td>{rider.email || "N/A"}</td>
                                    <td>{rider.vehicleType || "N/A"}</td>
                                    <td>{rider.division || "N/A"}</td>
                                    <td className="text-center">
                                        <button
                                            onClick={() => handleStatusToggle(rider)}
                                            className={`px-3 py-1 rounded-full font-semibold cursor-pointer transition ${rider.status === "active"
                                                    ? "bg-green-500 text-white hover:bg-green-600"
                                                    : "bg-yellow-400 text-black hover:bg-yellow-500"
                                                }`}
                                        >
                                            {rider.status || "active"}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile View */}
                <div className="md:hidden">
                    {displayedRiders.map((rider, index) => (
                        <div key={rider._id} className="bg-white p-4 rounded-lg shadow mb-3">
                            <p className="font-semibold">{index + 1}. {rider.name || "N/A"}</p>
                            <p className="text-gray-500 text-sm mt-1">Email: {rider.email || "N/A"}</p>
                            <p className="text-gray-500 text-sm mt-1">Vehicle Type: {rider.vehicleType || "N/A"}</p>
                            <p className="text-gray-500 text-sm mt-1">District: {rider.division || "N/A"}</p>
                            <p className="text-gray-500 text-sm mt-1">
                                Status:{" "}
                                <button
                                    onClick={() => handleStatusToggle(rider)}
                                    className={`px-3 py-1 rounded-full font-semibold cursor-pointer transition ${rider.status === "active"
                                            ? "bg-green-500 text-white hover:bg-green-600"
                                            : "bg-yellow-400 text-black hover:bg-yellow-500"
                                        }`}
                                >
                                    {rider.status || "active"}
                                </button>
                            </p>
                        </div>
                    ))}
                </div>

                {/* Show More / Show Less */}
                {riders.length > 8 && (
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

export default ActiveRiders;