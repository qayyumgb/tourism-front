import React from 'react'


import Image from 'next/image'




export default function Index() {
    return (
        <div className='w-[58px] flex items-center gap-1 rounded-[40px] h-[28px] justify-center'
            style={{ background: 'linear-gradient(180deg, #ED1C24 0%, #871015 100%)' }}>
            <Image src={'/img/common/white-flame.png'} alt="white-flame" width={12} height={12} />
            <span className='text-xs font-semibold'>Hot</span>
        </div>
    )
}
