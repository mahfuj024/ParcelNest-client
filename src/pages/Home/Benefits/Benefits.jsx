import liveImg from "../../../assets/live-tracking.png"
import saveImg from "../../../assets/safe-delivery.png"

function Benefits() {
    return (
        <div className='mt-6 md:mt-10 lg:mt-20 max-w-[1282px] mx-auto p-2 lg:p-0'>
            <hr class="border-t-2 border-dashed border-gray-400 my-6" />

            <div className='mt-6 md:mt-10 lg:mt-16 space-y-6'>

                <div data-aos="zoom-in" className='flex items-center bg-white rounded-2xl p-8 gap-12 flex-col md:flex-row'>
                    <img src={liveImg} alt="live tracking img" />
                 
                        <div class="hidden md:block border-l-2 border-dashed border-gray-400 h-32 mx-6"></div>
                
                    <div>
                        <h2 className='text-base-300 text-2xl font-extrabold'>Live Parcel Tracking</h2>
                        <p className='text-base mt-4'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                    </div>
                </div>

                <div data-aos="zoom-in" className='flex items-center bg-white rounded-2xl p-8 gap-12 flex-col md:flex-row'>
                    <img src={saveImg} alt="save delivery img" />
                 
                        <div class="hidden md:block border-l-2 border-dashed border-gray-400 h-32 mx-6"></div>
                
                    <div>
                        <h2 className='text-base-300 text-2xl font-extrabold'>100% Safe Delivery</h2>
                        <p className='text-base mt-4'>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                    </div>
                </div>

                <div data-aos="zoom-in" className='flex items-center bg-white rounded-2xl p-8 gap-12 flex-col md:flex-row'>
                    <img src={saveImg} alt="save delivery img" />
                 
                        <div class="hidden md:block border-l-2 border-dashed border-gray-400 h-32 mx-6"></div>
                
                    <div>
                        <h2 className='text-base-300 text-2xl font-extrabold'>24/7 Call Center Support</h2>
                        <p className='text-base mt-4'>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Benefits