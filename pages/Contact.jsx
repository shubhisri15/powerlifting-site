import { clsx } from "clsx"

export default function Contact() {

    const ctaButtonClass = clsx('bg-red-700', 'px-6 py-2', 'text-white text-sm', 'rounded-lg', 'font-bold', 'opacity-0.6', 'shadow-lg', 'mx-auto')
    const hoverClass = 'hover:bg-red-600/90'
    
    return (
        <main>
            <form className='flex flex-col bg-red-900/50 p-4 mb-8 gap-3 w-1/3 card rounded-lg shadow-lg border-1 border-red-800/60'>
                    <h2 className='text-xl font-bold text-center'>General Enquiries</h2>
                    <p className='text-red-300 text-center text-sm p-4'>If you have any feedback, or questions about our website / services, please send us a message by completing our enquiry form.</p>
                    <label htmlFor="name" required className='text-sm font-bold'>First Name</label>
                    <input type="text" id="name" name="name" required className='bg-red-950 border-1 border-red-800/60 py-1 px-2 text-red-200'/>

                    <label htmlFor="name" className='text-sm font-bold'>Last Name</label>
                    <input type="text" id="name" name="name" className='bg-red-950 border-1 border-red-800/60 py-1 px-2 text-red-200'/>

                    <label htmlFor="email" required className='text-sm font-bold'>Email</label>
                    <input type="email" id="email" name="email" required className='bg-red-950 border-1 border-red-800/60 py-1 px-2 text-red-200'/>

                    <label htmlFor="message" className='text-sm font-bold' required>Your Message</label>
                    <textarea id="message" name="message" rows="4" required className='bg-red-950 border-1 border-red-800/60 py-1 px-2 text-red-200'></textarea>

                    <button type='submit' className={clsx(ctaButtonClass, hoverClass)}>Submit</button>
                </form>
        </main>     
    )
}