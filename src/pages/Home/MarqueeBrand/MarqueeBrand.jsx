import Marquee from "react-fast-marquee";
import amazon from "../../../assets/brands/amazon.png"
import casio from "../../../assets/brands/casio.png"
import moonstar from "../../../assets/brands/moonstar.png"
import start from "../../../assets/brands/start.png"

function MarqueeBrand() {
    return (
        <div className='mt-8 md:mt-12 lg:mt-20 p-1 lg:p-0 max-w-[1282px] mx-auto'>
            <h1 className='text-center text-base-300 text-2xl md:text-3xl font-extrabold'>We've helped thousands of sales teams</h1>

            <div className='mt-6 md:mt-8 lg:mt-10'>
                <Marquee>
                    <div className='flex items-center gap-6 md:gap-14 lg:gap-52'>
                        <img src={amazon} alt="amazon logo" className='ml-4 lg:ml-0'/>
                        <img src={casio} alt="casio logo" />
                        <img src={moonstar} alt="moonstar logo" />
                        <img src={start} alt="start logo" />
                    </div>

                </Marquee>
            </div>
        </div>
    )
}

export default MarqueeBrand