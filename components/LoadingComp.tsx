import React from 'react'

export default function LoadingComp() {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className='w-20 h-20 border-[5px] border-dotted animate-spin rounded-full border-secondary'></div>
        </div>
    )
}
