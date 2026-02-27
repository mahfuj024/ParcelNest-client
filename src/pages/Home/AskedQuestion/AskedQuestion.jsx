import React from 'react'

function AskedQuestion() {
    return (
        <div className='max-w-[1062px] mx-auto mt-8 md:mt-12 lg:mt-20 p-2 lg:p-0'>
            <h1 className='text-center text-base-300 font-extrabold text-3xl md:text-4xl'>Frequently Asked Question (FAQ)</h1>
            <p className='text-center text-base-200 mt-4'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>

            <div className="collapse collapse-arrow bg-white mt-6 md:mt-10">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold text-base-300 text-lg">How does this posture corrector work?</div>
                <div className="collapse-content text-base-200 text-sm">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
            </div>

            <div className="collapse collapse-arrow bg-white mt-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-base-300 text-lg">Is it suitable for all ages and body types?</div>
                <div className="collapse-content text-sm text-base-200">People of different ages can adapt the routine or practice to their own needs, making it safe and flexible. For children, it can be a fun way to build healthy habits early. Adults can use it to maintain fitness, manage stress, and improve energy. Older individuals can also benefit by adjusting the intensity to match their comfort level. </div>
            </div>

            <div className="collapse collapse-arrow bg-white mt-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-base-300 text-lg">Does it really help with back pain and posture improvement?</div>
                <div className="collapse-content text-sm text-base-200">These areas play a big role in reducing stiffness and supporting a healthy posture. Gentle exercises improve blood flow, ease muscle tension, and align the body naturally. Over time, this can relieve pressure from the lower back and correct slouching habits. However, the results may vary depending on consistency and individual health conditions, so adapting the practice to your body is always important.</div>
            </div>

            <div className="collapse collapse-arrow bg-white mt-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-base-300 text-lg">Does it have smart features like vibration alerts?</div>
                <div className="collapse-content text-sm text-base-200">Some modern versions do include smart features like vibration alerts, timers, or reminders to help you stay consistent. Vibration alerts can notify you to adjust your posture, take a short break, or complete a session. These smart functions are designed to make the experience more interactive and supportive, especially for people who spend long hours sitting or working at a desk.</div>
            </div>

            <div className="collapse collapse-arrow bg-white mt-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-base-300 text-lg">How will I be notified when the product is back in stock?</div>
                <div className="collapse-content text-sm text-base-200">When a product is out of stock, you don’t need to worry about missing it once it’s available again. Simply sign up for back-in-stock notifications by entering your email address or phone number on the product page. As soon as the item is restocked, you will receive an instant alert directly to your inbox or device. This ensures you can return to the store quickly and place your order before it sells out again.</div>
            </div>
            
        </div>
    )
}

export default AskedQuestion