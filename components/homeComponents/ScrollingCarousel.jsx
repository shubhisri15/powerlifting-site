import testimonial1 from '../../assets/testimonial_1.png'
import testimonial2 from '../../assets/testimonial_2.png'
import testimonial3 from '../../assets/testimonial_3.png'
import testimonial4 from '../../assets/testimonial_4.png'
import testimonial5 from '../../assets/testimonial_5.png'
import testimonial6 from '../../assets/testimonial_6.png'

export default function ScrollingCarousel() {
    const imgClass='sm:h-[390px] sm:w-[200px] h-[200px] w-[108px]'
    return (
        <div className='scroll-content flex items-center gap-4'>
                <img src={testimonial1} className={`${imgClass}`}/>
                <img src={testimonial2} className={`${imgClass}`}/>
                <img src={testimonial3} className={`${imgClass}`}/>
                <img src={testimonial4} className={`${imgClass}`}/>
                <img src={testimonial5} className={`${imgClass}`}/>
                <img src={testimonial6} className={`${imgClass}`}/>
                
                <img src={testimonial1} className={`${imgClass}`}/>
                <img src={testimonial2} className={`${imgClass}`}/>
                <img src={testimonial3} className={`${imgClass}`}/>
                <img src={testimonial4} className={`${imgClass}`}/>
                <img src={testimonial5} className={`${imgClass}`}/>
                <img src={testimonial6} className={`${imgClass}`}/>

                <img src={testimonial1} className={`${imgClass}`}/>
                <img src={testimonial2} className={`${imgClass}`}/>
                <img src={testimonial3} className={`${imgClass}`}/>
                <img src={testimonial4} className={`${imgClass}`}/>
                <img src={testimonial5} className={`${imgClass}`}/>
                <img src={testimonial6} className={`${imgClass}`}/>

                <img src={testimonial1} className={`${imgClass}`}/>
                <img src={testimonial2} className={`${imgClass}`}/>
                <img src={testimonial3} className={`${imgClass}`}/>
                <img src={testimonial4} className={`${imgClass}`}/>
                <img src={testimonial5} className={`${imgClass}`}/>
                <img src={testimonial6} className={`${imgClass}`}/>
        </div>
    )
}