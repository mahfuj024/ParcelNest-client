import { useForm } from "react-hook-form";
// import { useContext, useState } from "react";
// import Swal from 'sweetalert2';
// import { AuthContext } from "../../context/AuthContext";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

function SendParcel() {
    const { register, handleSubmit, watch, reset } = useForm();
    // const [cost, setCost] = useState(null);
    // const { user } = useContext(AuthContext)
    // const axiosSecure = useAxiosSecure()

    // const type = watch("type");
    // const senderRegion = watch("senderRegion");
    // const receiverRegion = watch("receiverRegion");
    // const weight = watch("weight");

    // 📦 Pricing calculation logic with breakdown
    // const calculateCost = (data) => {
    //     const isWithinCity = senderRegion === receiverRegion;

    //     let baseCost = 0;
    //     let extraCost = 0;
    //     let weightCharge = 0;
    //     let locationCharge = 0;

    //     if (data.type === "document") {
    //         baseCost = isWithinCity ? 60 : 80;
    //         locationCharge = isWithinCity ? 0 : 20;
    //     } else if (data.type === "non-document") {
    //         if (data.weight <= 3) {
    //             baseCost = isWithinCity ? 110 : 150;
    //             locationCharge = isWithinCity ? 0 : 40;
    //         } else {
    //             baseCost = isWithinCity ? 110 : 150;
    //             const extraWeight = data.weight - 3;
    //             weightCharge = extraWeight * 40;
    //             locationCharge = isWithinCity ? 0 : 40;
    //             if (!isWithinCity) {
    //                 locationCharge += 40; // Extra ৳40 for outside city
    //             }
    //         }
    //     }

    //     extraCost = weightCharge + locationCharge;

    //     return {
    //         total: baseCost + extraCost,
    //         baseCost,
    //         weightCharge,
    //         locationCharge,
    //         extraCost
    //     };
    // };

    const onSubmit = (data) => {

        console.log(data)
        // const costBreakdown = calculateCost(data);
        // setCost(costBreakdown.total);

        // SweetAlert2 with cost breakdown and two buttons
        // Swal.fire({
        //     title: 'Delivery Cost Breakdown',
        //     html: `
        //         <div class="text-left">
        //             <div class="bg-blue-50 p-4 rounded-lg mb-4">
        //                 <p class="text-lg font-semibold text-blue-800 text-center">💰 Total Cost: ৳${costBreakdown.total}</p>
        //             </div>

        //             <div class="mb-4 p-3 bg-green-50 rounded-lg">
        //                 <p class="text-sm font-medium text-green-800 mb-2">Parcel Details:</p>
        //                 <div class="space-y-1 text-sm">
        //                     <p><span class="font-medium">Type:</span> ${data.type === 'document' ? 'Document' : 'Non-Document'}</p>
        //                     ${data.type === 'non-document' ? `<p><span class="font-medium">Weight:</span> ${data.weight} kg</p>` : ''}
        //                     <p><span class="font-medium">Location:</span> ${senderRegion === receiverRegion ? 'Within City' : 'Different City/District'}</p>
        //                 </div>
        //             </div>

        //             <div class="bg-gray-50 p-4 rounded-lg">
        //                 <p class="text-sm font-medium text-gray-800 mb-3">Cost Breakdown:</p>
        //                 <div class="space-y-2 text-sm">
        //                     <div class="flex justify-between">
        //                         <span class="text-gray-600">Base Cost:</span>
        //                         <span class="font-medium">৳${costBreakdown.baseCost}</span>
        //                     </div>
        //                     ${costBreakdown.weightCharge > 0 ? `
        //                     <div class="flex justify-between">
        //                         <span class="text-gray-600">Weight Charge (${weight} kg):</span>
        //                         <span class="font-medium">৳${costBreakdown.weightCharge}</span>
        //                     </div>
        //                     ` : ''}
        //                     ${costBreakdown.locationCharge > 0 ? `
        //                     <div class="flex justify-between">
        //                         <span class="text-gray-600">Location Charge:</span>
        //                         <span class="font-medium">৳${costBreakdown.locationCharge}</span>
        //                     </div>
        //                     ` : ''}
        //                     <hr class="my-2 border-gray-300">
        //                     <div class="flex justify-between font-semibold text-base">
        //                         <span class="text-gray-800">Total Amount:</span>
        //                         <span class="text-blue-600">৳${costBreakdown.total}</span>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     `,
        //     icon: 'info',
        //     showCancelButton: true,
        //     confirmButtonText: 'Proceed to Payment',
        //     cancelButtonText: 'Continue Editing',
        //     customClass: {
        //         popup: 'rounded-2xl max-w-md',
        //         confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors',
        //         cancelButton: 'bg-stone-500 hover:bg-stone-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors',
        //         actions: 'mt-4 gap-3'
        //     },
        //     buttonsStyling: false,
        //     showCloseButton: true,
        //     focusConfirm: false,
        //     focusCancel: false
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         Proceed to Payment logic here
        //         const parcelData = {
        //             ...data,
        //             totalCost: costBreakdown.total,
        //             createdBy: user?.email,
        //             creation_date: new Date().toISOString(),
        //             delivery_status: "pending",
        //             payment_status: "unpaid",
        //             tracking_id: `TRK${Date.now()}${Math.random().toString(36).substr(2, 9)}`
        //         };

        //         save parcelData in database
        //         axiosSecure.post("/parcels", parcelData)
        //             .then(res => {
        //                 console.log(res.data)
        //                 if (res?.data?.insertedId) {

        //                     redirect to a payment page
        //                     Swal.fire({
        //                         title: 'Add Successful!',
        //                         html: `
        //                 <div class="text-center">
        //                     <div class="text-green-500 text-5xl mb-3">✓</div>
        //                     <p class="text-lg font-semibold mb-2 text-green-800">Add Successfully!</p>
        //                     <p class="text-sm text-gray-600 mb-4">Your parcel has been booked and payment received.</p>
        //                     <div class="p-3 bg-green-50 rounded-lg border border-green-200">
        //                         <p class="text-sm"><span class="font-medium">Amount Paid:</span> ৳${costBreakdown.total}</p>
        //                         <p class="text-sm mt-1"><span class="font-medium">Parcel Type:</span> ${data.type === 'document' ? 'Document' : 'Non-Document'}</p>
        //                     </div>
        //                 </div>
        //             `,
        //                         icon: 'success',
        //                         confirmButtonText: 'Done',
        //                         customClass: {
        //                             popup: 'rounded-2xl max-w-sm',
        //                             confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm'
        //                         }
        //                     });
        //                 }
        //             })

        //         reset();
        //         setCost(null);
        //     } else if (result.dismiss === Swal.DismissReason.cancel) {
        //         Continue Editing - user can modify the form
        //         Swal.fire({
        //             title: 'Continue Editing',
        //             text: 'You can modify your parcel details.',
        //             icon: 'info',
        //             confirmButtonText: 'OK',
        //             customClass: {
        //                 popup: 'rounded-2xl',
        //                 confirmButton: 'bg-stone-500 hover:bg-stone-600 text-white px-4 py-2 rounded-lg font-semibold text-sm'
        //             },
        //             timer: 2000,
        //             timerProgressBar: true
        //         });
        //     }
        // });
    };

    return (
        <div className='min-h-screen mt-4 md:mt-8 lg:mt-12 bg-white rounded-xl md:rounded-2xl py-6 md:py-10 lg:py-20 px-6 md:px-9 lg:px-28'>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>
                Add Parcel
            </h1>

            <hr className="border-t-1 border-[#0000001A] mt-4 md:mt-6 lg:mt-12" />

            <h2 className='text-[22px] md:text-[25px] lg:text-[28px] font-[800] text-[#03373d] mt-3 md:mt-5 lg:mt-7'>
                Enter your parcel details
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-6 md:mt-7 lg:mt-8">
                {/* 📦 Parcel Info */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Parcel Type Radio Buttons */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-900 cursor-pointer">
                                Parcel Type
                            </label>
                            <div className="flex gap-6 mt-2">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        value="document"
                                        {...register("type", { required: true })}
                                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="text-gray-700">Document</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        value="non-document"
                                        {...register("type", { required: true })}
                                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="text-gray-700">Non-Document</span>
                                </label>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-900 cursor-pointer">
                                Parcel Title
                            </label>
                            <input
                                id="title"
                                {...register("title", { required: true })}
                                placeholder="Enter Parcel Title"
                                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:outline-none"
                            />
                        </div>

                        {watch("type") === "non-document" && (
                            <div className="space-y-2">
                                <label htmlFor="weight" className="block text-sm font-medium text-gray-900 cursor-pointer">
                                    Weight (kg)
                                </label>
                                <input
                                    id="weight"
                                    type="number"
                                    step="0.01"
                                    min="0.1"
                                    {...register("weight", {
                                        required: watch("type") === "non-document" ? "Weight is required" : false,
                                        min: { value: 0.1, message: "Weight must be greater than 0.1 kg" },
                                        valueAsNumber: true
                                    })}
                                    placeholder="Enter Weight"
                                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:outline-none"
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* divider */}
                <hr className="border-t-1 border-[#0000001A]" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Sender Info */}
                    <div>
                        <h3 className="text-xl mb-6 font-semibold text-gray-900">Sender Information</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="senderName" className="block text-sm font-medium text-gray-900 cursor-pointer">
                                    Name
                                </label>
                                <input
                                    id="senderName"
                                    {...register("senderName", { required: true })}
                                    placeholder="Enter Sender Name"
                                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="senderContact" className="block text-sm font-medium text-gray-900 cursor-pointer">
                                    Contact Number
                                </label>
                                <input
                                    id="senderContact"
                                    {...register("senderContact", { required: true })}
                                    placeholder="Enter Sender Contact Number"
                                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="senderRegion" className="block text-sm font-medium text-gray-900 cursor-pointer">
                                    Select Region
                                </label>
                                <select
                                    id="senderRegion"
                                    {...register("senderRegion", { required: true })}
                                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:outline-none"
                                >
                                    <option value="">Select Region</option>
                                    <option value="dhaka">Dhaka</option>
                                    <option value="chattogram">Chattogram</option>
                                    <option value="sylhet">Sylhet</option>
                                    <option value="khulna">Khulna</option>
                                    <option value="rajshahi">Rajshahi</option>
                                    <option value="barishal">Barishal</option>
                                    <option value="rangpur">Rangpur</option>
                                    <option value="mymensingh">Mymensingh</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="senderCenter" className="block text-sm font-medium text-gray-900 cursor-pointer">
                                    Service Center
                                </label>
                                <input
                                    id="senderCenter"
                                    {...register("senderCenter", { required: true })}
                                    placeholder="Enter Service Center"
                                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:outline-none"
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2 lg:col-span-1">
                                <label htmlFor="senderAddress" className="block text-sm font-medium text-gray-900 cursor-pointer">
                                    Address
                                </label>
                                <input
                                    id="senderAddress"
                                    {...register("senderAddress", { required: true })}
                                    placeholder="Enter Complete Sender Address"
                                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:outline-none"
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2 lg:col-span-1">
                                <label htmlFor="pickupInstruction" className="block text-sm font-medium text-gray-900 cursor-pointer">
                                    Pickup Instructions
                                </label>
                                <textarea
                                    id="pickupInstruction"
                                    {...register("pickupInstruction", { required: true })}
                                    placeholder="Enter special pickup instructions (if any)"
                                    rows={3}
                                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:outline-none resize-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Receiver Info */}
                    <div>
                        <h3 className="text-xl mb-6 font-semibold text-gray-900">Receiver Information</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="receiverName" className="block text-sm font-medium text-gray-900 cursor-pointer">
                                    Name
                                </label>
                                <input
                                    id="receiverName"
                                    {...register("receiverName", { required: true })}
                                    placeholder="Enter Receiver Name"
                                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="receiverContact" className="block text-sm font-medium text-gray-900 cursor-pointer">
                                    Contact Number
                                </label>
                                <input
                                    id="receiverContact"
                                    {...register("receiverContact", { required: true })}
                                    placeholder="Enter Receiver Contact Number"
                                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="receiverRegion" className="block text-sm font-medium text-gray-900 cursor-pointer">
                                    Select Region
                                </label>
                                <select
                                    id="receiverRegion"
                                    {...register("receiverRegion", { required: true })}
                                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:outline-none"
                                >
                                    <option value="">Select Region</option>
                                    <option value="dhaka">Dhaka</option>
                                    <option value="chattogram">Chattogram</option>
                                    <option value="sylhet">Sylhet</option>
                                    <option value="khulna">Khulna</option>
                                    <option value="rajshahi">Rajshahi</option>
                                    <option value="barishal">Barishal</option>
                                    <option value="rangpur">Rangpur</option>
                                    <option value="mymensingh">Mymensingh</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="receiverCenter" className="block text-sm font-medium text-gray-900 cursor-pointer">
                                    Service Center
                                </label>
                                <input
                                    id="receiverCenter"
                                    {...register("receiverCenter", { required: true })}
                                    placeholder="Enter Service Center"
                                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:outline-none"
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2 lg:col-span-1">
                                <label htmlFor="receiverAddress" className="block text-sm font-medium text-gray-900 cursor-pointer">
                                    Address
                                </label>
                                <input
                                    id="receiverAddress"
                                    {...register("receiverAddress", { required: true })}
                                    placeholder="Enter Complete Receiver Address"
                                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:outline-none"
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2 lg:col-span-1">
                                <label htmlFor="deliveryInstruction" className="block text-sm font-medium text-gray-900 cursor-pointer">
                                    Delivery Instructions
                                </label>
                                <textarea
                                    id="deliveryInstruction"
                                    {...register("deliveryInstruction", { required: true })}
                                    placeholder="Enter special delivery instructions (if any)"
                                    rows={3}
                                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:outline-none resize-none"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Cost Display (if cost is calculated) */}
                {/* {cost !== null && (
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <p className="text-lg font-semibold text-green-800 text-center">
                            💰 Estimated Delivery Cost: ৳{cost}
                        </p>
                    </div>
                )} */}

                {/* Submit button */}
                <button
                    type="submit"
                    className="w-full bg-primary py-3 rounded-lg font-bold text-lg 
             transition-all duration-300 ease-in-out
              hover:scale-101 hover:shadow-lg
             cursor-pointer"
                >
                    Submit
                </button>
            </form>

        </div>
    )
}

export default SendParcel;