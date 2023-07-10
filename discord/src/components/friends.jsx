import React from 'react'
import { discord_home } from '../assets'
function friends() {
    return (
        <>
            <div className='flex flex-col w-[50vw] borderRight h-[93vh]'>
                <div className='flex flex-col w-full h-[24vh] borderBottom2 p-7'>
                    <span className='text-white text-[1.3rem] font-bold'>ADD FRIEND</span>
                    <span className=' my-4 text-[1.2rem] text-[#7e8187] font-semibold'>You can add friends with their Discord usernames.</span>
                    <div className='w-[99%] h-[6rem] bg-[#1e1f22] relative rounded-[8px]'>
                        <input type="text" placeholder='Enter a Username#0000' className='h-full w-full bg-transparent rounded-[8px] text-[15px]' />
                        <button className='absolute right-4 top-[50%] translate-y-[-50%] w-[15rem] h-[3rem] text-[13px] bg-[#3b428a] text-[#abadb1] rounded-[4px]'>Send Friend Request</button>
                    </div>
                </div>
                <div className='w-full h-full grid place-items-center'>
                    <div className='flex flex-col'>
                        <img src={discord_home} alt="" className=' mb-20'/>
                        <span className='text-[15px] text-[#abadb1]'>Wumpus is waiting on friends.You don't have to, though</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default friends