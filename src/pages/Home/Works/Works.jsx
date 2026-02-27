import bookingIcon from "../../../assets/bookingIcon.png"

function Works() {
    return (
        <div className="mt-6 md:mt-10 lg:mt-15 lg:p-0 max-w-[1282px] mx-auto">
            <h1 className='font-bold lg:font-extrabold text-3xl text-base-300 ml-15 md:ml-8 lg:ml-0'>How it Works</h1>

            <div className='mt-4 md:mt-6 lg:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6'>

                <div data-aos="fade-up" className='p-8 rounded-2xl bg-white max-w-[302px]'>
                    <img src={bookingIcon} alt="" />
                    <h2 className='text-base-300 font-bold text-[20px] mt-6'>Booking Pick & Drop</h2>
                    <p className='text-base-200 text-base mt-4'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>

                <div data-aos="fade-down" className='p-8 rounded-2xl bg-white max-w-[302px]'>
                    <img src={bookingIcon} alt="" />
                    <h2 className='text-base-300 font-bold text-[20px] mt-6'>Cash On Delivery</h2>
                    <p className='text-base-200 text-base mt-4'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>


                <div data-aos="fade-up" className='p-8 rounded-2xl bg-white max-w-[302px]'>
                    <img src={bookingIcon} alt="" />
                    <h2 className='text-base-300 font-bold text-[20px] mt-6'>Delivery Hub</h2>
                    <p className='text-base-200 text-base mt-4'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>


                <div data-aos="fade-down" className='p-8 rounded-2xl bg-white max-w-[302px]'>
                    <img src={bookingIcon} alt="" />
                    <h2 className='text-base-300 font-bold text-[20px] mt-6'>Booking SME & Corporate</h2>
                    <p className='text-base-200 text-base mt-4'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>



            </div>
        </div>
    )
}

export default Works