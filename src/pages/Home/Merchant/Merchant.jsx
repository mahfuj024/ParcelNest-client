import locationMerchant from "../../../assets/location-merchant.png"

function Merchant() {
    return (
        <div data-aos="zoom-in-up" className='max-w-7xl mx-auto mt-8 md:mt-12 lg:mt-20 bg-[url("assets/be-a-merchant-bg.png")] bg-no-repeat  bg-[#03373D] rounded-2xl flex p-6 md:p-10 lg:p-20 flex-col lg:flex-row'>
            <div>
                <h1 className="text-white text-3xl md:text-4xl font-extrabold">Merchant and Customer Satisfaction <br /> is Our First Priority</h1>
                <p className="text-white mt-4">We offer the lowest delivery charge with the highest value along with <br /> 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                <div className="mt-5 md:mt-8 text-center lg:text-start">
                    <button className='btn bg-primary text-lg font-semibold rounded-full p-5'>Become a Merchant</button>
                    <button className='btn bg-[#03373D] text-primary border-primary mt-4 md:mt-0  md:ml-4 text-lg font-semibold rounded-full p-5'>Earn with Profast Courier</button>
                </div>
            </div>

            <div className="mt-10 lg:mt-0 mx-auto">
                <img src={locationMerchant} alt="" />
            </div>
        </div>
    )
}

export default Merchant