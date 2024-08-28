import React from 'react'
import { aboutOrg } from '../../services/helper'

const AboutOrg = () => {
    return (
        <div className='bg-white card-neu rounded-xl py-3 px-6 grid grid-cols-5 gap-3 justify-between'>
            <div className="col-span-3">
                <h6 className='font-bold text-slate-400 text-sm'>{aboutOrg.name}</h6>
                <p className="text-slate-600 font-bold">{aboutOrg.phone} • {aboutOrg.address}</p>
                <p className='max-h-36 overflow-hidden text-sm text-slate-500'>{aboutOrg.about}</p>
            </div>
            <div
                className={`min-h-max min-w-max w-full rounded col-span-2`}
                style={{
                    backgroundImage: `url(${aboutOrg.img})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <span className='text-transparent'>
                    invisible invisible invisible 
                </span>
            </div>
        </div>
    )
}

export default AboutOrg