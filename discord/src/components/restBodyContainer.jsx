import React from 'react'
import MessageSection from './messageSection'
import Friends from './friends'
import Active from './active'
function restBodyContainer() {
  return (
    <>
        <div className="container flex">
            <MessageSection />
            <Friends />
            <Active />
        </div>
    </>
  )
}

export default restBodyContainer