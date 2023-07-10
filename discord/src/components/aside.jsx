import React from 'react';
import Topbar from './topbar';
import RestBodyContainer from './restBodyContainer';
function aside() {
  return (
    <>
        <div className="aside z-40">
            <Topbar />
            <RestBodyContainer />
        </div>
    </>
  )
}

export default aside