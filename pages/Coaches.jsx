import CoachInfo from "../components/coachesPageComps/CoachInfo";

import keegan from '../assets/keegan.png'
import caden from '../assets/caden.png'
import carlos from '../assets/carlos.png'

export default function Coaches() {
    return (
        <main>
            <h1 className='text-5xl font-bold pt-8'>Meet our Fantastic Coaches</h1>
            <div className='flex flex-col py-8 gap-4'>
                <CoachInfo 
                    name='Caden Schoffelman- Head Coach'
                    about="Info about Caden. Please write a few lines as per the coach's description of himself. Thanks."
                    picture={caden}
                    instagram={
                        {
                            link: 'https://www.instagram.com/coach_caden/',
                            handle: '@coach_caden'
                        }
                    }
                />
                    
                <hr className="w-3/4 h-0.25 bg-red-900 border-none"/>

                <CoachInfo 
                    delay='animation-delay-200'
                    name='Keegan Sluis- Assistant Coach'
                    about="Info about Keegan. Please write a few lines as per the coach's description of himself. Thanks."
                    picture={keegan}
                    instagram={
                        {
                            link: 'https://www.instagram.com/coach_keegan_/',
                            handle: '@coach_keegan_'
                        }
                    }
                />

                <hr className="w-3/4 h-0.25 bg-red-900 border-none"/>

                <CoachInfo 
                    delay='animation-delay-400'
                    name='Carlos Hicks Jr.- Assistant Coach'
                    about="Info about Carlos. Please write a few lines as per the coach's description of himself. Thanks."
                    picture={carlos}
                    instagram={
                        {
                            link: 'https://www.instagram.com/los.kilos93/',
                            handle: '@los.kilos93'
                        }
                    }
                />
            </div>
        </main>
    )
}