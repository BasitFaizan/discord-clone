import React from 'react'

function active() {
  return (
    <>
        <div className=' p-8'>
            <span className=' text-white font-bold text-[2rem]'>Active Now</span>
            <div className=' w-[23vw] flex flex-col items-center mt-12'>
                <span className='text-white text-[1.4rem] font-bold'>It's quite for now...</span>
                <p className='text-[1.2rem] text-[#abadb1]'>When a friend starts an activity - like playing a game or hanging out on voice - we'll show it here!</p>
            </div>
        </div>
    </>
  )
}

export default active