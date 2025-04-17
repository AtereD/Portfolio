import React from 'react'
import { FaHome  } from 'react-icons/fa'

import { Button } from '@/components/ui/button'
import Link from 'next/link'


const SuccessMessage = () => {
  return (
    <div className='container mx-auto'>
        <div className=" flex flex-col justify-center items-center">
            <div className='flex p-4 bg-[#27272c] rounded-xl items-center justify-center border border-accent-DEFAULT w-[60%] flex-col gap-6 max-w-[450px]'>
                <p className='text-white/80 text-xl'>Message Received!</p>
                <Link href="/" className='text-4xl text-white/50 hover:text-accent-hover'>
                    <FaHome />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SuccessMessage