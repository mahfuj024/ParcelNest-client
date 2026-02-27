import serviceImg from "../../../assets/service.png"

function Services() {
    return (
        <div className='bg-[#03373D] text-white rounded-2xl md:rounded-3xl lg:rounded-4xl mt-8 md:mt-12 lg:mt-20 p-6 md:p-12 lg:p-24'>
            <h1 className='text-center text-3xl lg:text-4xl font-extrabold'>Our Services</h1>
            <p className='text-center text-base mt-4 md:mt-5 lg:mt-7'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                <div data-aos="flip-right" className="max-w-102.5 h-75 rounded-2xl bg-white text-center space-y-4 py-8 px-6 transition-colors duration-300 hover:bg-primary">
                    <img src={serviceImg} alt="serviceImg" className="mx-auto"/>
                    <h2 className="text-base-300 font-bold text-2xl">Express  & Standard Delivery</h2>
                    <p className="text-base-200">We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>

                 <div data-aos="flip-left" className="max-w-102.5 h-75 rounded-2xl bg-white text-center space-y-4 py-8 px-6 transition-colors duration-300 hover:bg-primary">
                    <img src={serviceImg} alt="serviceImg" className="mx-auto"/>
                    <h2 className="text-base-300 font-bold text-2xl">Nationwide Delivery</h2>
                    <p className="text-base-200">We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                </div>

                 <div data-aos="flip-right" className="max-w-102.5 h-75 rounded-2xl bg-white text-center space-y-4 py-8 px-6 transition-colors duration-300 hover:bg-primary">
                    <img src={serviceImg} alt="serviceImg" className="mx-auto"/>
                    <h2 className="text-base-300 font-bold text-2xl">Fulfillment Solution</h2>
                    <p className="text-base-200">We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                </div>

                 <div data-aos="flip-left" className="max-w-102.5 h-75 rounded-2xl bg-white text-center space-y-4 py-8 px-6 transition-colors duration-300 hover:bg-primary">
                    <img src={serviceImg} alt="serviceImg" className="mx-auto"/>
                    <h2 className="text-base-300 font-bold text-2xl">Cash on Home Delivery</h2>
                    <p className="text-base-200">100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                </div>

                 <div data-aos="flip-right" className="max-w-102.5 h-75 rounded-2xl bg-white text-center space-y-4 py-8 px-6 transition-colors duration-300 hover:bg-primary">
                    <img src={serviceImg} alt="serviceImg" className="mx-auto"/>
                    <h2 className="text-base-300 font-bold text-2xl">Corporate Service / Contract In Logistics</h2>
                    <p className="text-base-200">Customized corporate services which includes warehouse and inventory management support.</p>
                </div>

                 <div data-aos="flip-left" className="max-w-102.5 h-75 rounded-2xl bg-white text-center space-y-4 py-8 px-6 transition-colors duration-300 hover:bg-primary">
                    <img src={serviceImg} alt="serviceImg" className="mx-auto"/>
                    <h2 className="text-base-300 font-bold text-2xl">Parcel Return</h2>
                    <p className="text-base-200">Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                </div>

            </div>
        </div>
    )
}

export default Services