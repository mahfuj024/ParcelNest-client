// import { useContext, useEffect } from "react";
import RiderImage from "../../assets/agent-pending.png"
// import { AuthContext } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import Swal from "sweetalert2";

function BeARider() {

    // const { user } = useContext(AuthContext)
    // const axiosSecure = useAxiosSecure()

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    // useEffect(() => {
    //     if (user) {
    //         reset({
    //             name: user.displayName || "",
    //             email: user.email || "",
    //         });
    //     }
    // }, [user, reset]);

    const divisions = [
        "Dhaka",
        "Chattogram",
        "Khulna",
        "Barishal",
        "Rajshahi",
        "Sylhet",
        "Rangpur",
        "Mymensingh",
    ];

    const onSubmit = (data) => {
        // const riderData = {
        //     ...data,
        //     created_at: new Date().toISOString(),
        //     status: "pending"
        // };
        // API call and riderData save in database
        // axiosSecure.post("/riders", riderData)
        //     .then(res => {
        //         if (res.data.insertedId) {
        //             Swal.fire({
        //                 icon: "success",
        //                 title: "Application Submitted",
        //                 text: "Your application is pending approval",
        //                 draggable: true
        //             });
        //         }
        //         console.log(res.data)
        //     })

        // reset()
    };


    return (
        <div className='min-h-screen mt-4 md:mt-8 lg:mt-12 bg-white rounded-xl md:rounded-2xl py-6 md:py-10 lg:py-20 px-6 md:px-9 lg:px-28'>
            <div>
                <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold'>
                    Be a Rider
                </h2>

                <p className='mt-3 md:mt-4 lg:mt-6 text-sm md:text-base'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br className='hidden md:block' /> packages to business shipments — we deliver on time, every time.</p>

                {/* divider */}
                <hr className="border-t-1 border-[#0000001A] mt-4 md:mt-6 lg:mt-12" />
            </div>

            <div className="hero mt-4 md:mt-6 lg:mt-12">
                <div className="hero-content flex flex-col lg:flex-row justify-between items-center w-full">

                    {/* Text (Left) */}
                    <div className="w-full lg:flex-1 text-center lg:text-left">
                        <h1 className="text-2xl md:text-3xl font-bold">Tell us about yourself</h1>

                        {/* Rider input form */}
                        <div className="flex justify-center items-center mt-4 md:mt-6 text-left">
                            <form onSubmit={handleSubmit(onSubmit)} className="w-full">

                                {/* Row 1: Full Name & Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                                    {/* Name */}
                                    <div>
                                        <label className="block mb-1 font-medium" htmlFor="name">
                                            Full Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            {...register("name", { required: "Name is required" })}
                                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter your name"
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block mb-1 font-medium" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            {...register("email", { required: "Email is required" })}
                                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter your email"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Row 2: Division & Vehicle Type */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                                    {/* Division */}
                                    <div>
                                        <label className="block mb-1 font-medium" htmlFor="division">
                                            Division
                                        </label>
                                        <select
                                            id="division"
                                            {...register("division", { required: "Select division" })}
                                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Select Division</option>
                                            {divisions.map((div) => (
                                                <option key={div} value={div}>
                                                    {div}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.division && (
                                            <p className="text-red-500 text-sm mt-1">{errors.division.message}</p>
                                        )}
                                    </div>

                                    {/* Vehicle Type */}
                                    <div>
                                        <label className="block mb-1 font-medium" htmlFor="vehicleType">
                                            Vehicle Type
                                        </label>
                                        <select
                                            id="vehicleType"
                                            {...register("vehicleType", { required: "Select vehicle type" })}
                                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Select Vehicle</option>
                                            <option value="Bike">Bike</option>
                                            <option value="Car">Car</option>
                                            <option value="Van">Van</option>
                                        </select>
                                        {errors.vehicleType && (
                                            <p className="text-red-500 text-sm mt-1">{errors.vehicleType.message}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="mb-5">
                                    <label className="block mb-1 font-medium" htmlFor="phone">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        {...register("phone", { required: "Phone number is required" })}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your phone number"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                                    )}
                                </div>

                                {/* License Number */}
                                <div className="mb-5">
                                    <label className="block mb-1 font-medium" htmlFor="licenseNumber">
                                        License Number
                                    </label>
                                    <input
                                        id="licenseNumber"
                                        type="text"
                                        {...register("licenseNumber", { required: "License number is required" })}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your license number"
                                    />
                                    {errors.licenseNumber && (
                                        <p className="text-red-500 text-sm mt-1">{errors.licenseNumber.message}</p>
                                    )}
                                </div>

                                {/* Address as input */}
                                <div className="mb-6">
                                    <label className="block mb-1 font-medium" htmlFor="address">
                                        Address
                                    </label>
                                    <input
                                        id="address"
                                        type="text"
                                        {...register("address", { required: "Address is required" })}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your address"
                                    />
                                    {errors.address && (
                                        <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-primary font-bold p-2 rounded-md cursor-pointer"
                                >
                                    Submit Application
                                </button>
                            </form>
                        </div>



                    </div>

                    {/* Image (Right) */}
                    <div className="w-full lg:flex-1 mt-6 lg:mt-0 flex justify-center lg:justify-end">
                        <img
                            src={RiderImage}
                            className=" rounded-lg shadow-2xl"
                        />
                    </div>

                </div>
            </div>



        </div>
    )
}

export default BeARider