import React from 'react'

function AllParcels() {
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
           Total Parcels : 00
          </h1>
        </div>

      </div>
    </div>
  )
}

export default AllParcels