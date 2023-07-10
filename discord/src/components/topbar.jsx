import React from 'react'
import { useState } from 'react';

function topbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        console.log(false);
    }
    const handleShow = () => {
        setShow(true)
        console.log(true);
    }
    return (
        <>
            <div className='w-[94.5vw] h-20 flex items-center borderBottom relative'>
                <div className="first grid place-items-center">
                    <input type="text" name="conversation" className='w-[90%] inputText cursor-pointer' placeholder='Find or start a conversation' onClick={handleShow} />
                    {show && (

                        <div className='blackBag'>
                            <div className='converstionStartDiv w-[40vw] h-[40vh]'>
                                <div className=' relative w-full h-12'>
                                    <span className='textCenter'>Search for servers,channels or DMs</span>
                                    <div className="absolute grid place-items-center w-9 h-9 rounded-full bg-white top-[-5px] right-[-5px] cursor-pointer" onClick={handleClose}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" className="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <input type="text" className=' w-[90%] h-[6.5rem] startConversationInput' placeholder='Where would you like to go' />
                                    <div className=' w-[90%] h-full'>
                                        <span className=' mt-8 block specialText'>PREVIOUS CHANNELS</span>
                                        <div className='flex w-full h-[3rem] hover:bg-slate-700 justify-between items-center p-2'>
                                            <div className='flex'>
                                                <svg width="16" height="16" viewBox="0 0 24 24" className="icon-12xJtb" aria-hidden="true" role="img"><path fill="#b5bac1" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path></svg>
                                                <div className='flex items-center'>
                                                    <span className='block text-2xl mx-3 text-[#b5bac1]'>📚︱faq</span>
                                                    <span className='text-[#868a91]'>START HERE</span>
                                                </div>
                                            </div>
                                            <div className='text-[#868a91] text-2xl'>
                                                BlueWillow AI to Crea...
                                            </div>
                                        </div>
                                        <div className='flex w-full h-[3rem] hover:bg-slate-700 justify-between items-center p-2'>
                                            <div className='flex'>
                                                <svg width="16" height="16" viewBox="0 0 24 24" className="icon-12xJtb" aria-hidden="true" role="img"><path fill="#b5bac1" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path></svg>
                                                <div className='flex items-center'>
                                                    <span className='block text-2xl mx-3 text-[#b5bac1]'>📚︱faq</span>
                                                    <span className='text-[#868a91]'>START HERE</span>
                                                </div>
                                            </div>
                                            <div className='text-[#868a91] text-2xl'>
                                                BlueWillow AI to Crea...
                                            </div>
                                        </div>
                                        <div className='flex w-full h-[3rem] hover:bg-slate-700 justify-between items-center p-2'>
                                            <div className='flex'>
                                                <svg width="16" height="16" viewBox="0 0 24 24" className="icon-12xJtb" aria-hidden="true" role="img"><path fill="#b5bac1" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path></svg>
                                                <div className='flex items-center'>
                                                    <span className='block text-2xl mx-3 text-[#b5bac1]'>📚︱faq</span>
                                                    <span className='text-[#868a91]'>START HERE</span>
                                                </div>
                                            </div>
                                            <div className='text-[#868a91] text-2xl'>
                                                BlueWillow AI to Crea...
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
                </div>
                <div className='second flex items-center'>
                    <div className='flex mx-7 items-center w-[12rem] justify-around'>
                        <div className='flex'>
                            <svg x="0" y="0" className="icon-2xnN2Y" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="#808f8e" fill-rule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g></svg>
                        </div>
                        <span className='text-[#fff] text-[1.4rem] font-bold'>Friends</span>
                        <span className='verticalSeperator w-[1px] h-[24px] mx-[8px]'></span>
                    </div>
                    <div className='flex'>
                        <ul className='flex w-[25vw] h-[2rem] items-center justify-between'>
                            <li className='navList cursor-pointer text-[1.3rem] text-[#b5bac1] font-[500]'>Online</li>
                            <li className='navList cursor-pointer text-[1.3rem] text-[#b5bac1] font-[500]'>All</li>
                            <li className='navList cursor-pointer text-[1.3rem] text-[#b5bac1] font-[500]'>Pending</li>
                            <li className='navList cursor-pointer text-[1.3rem] text-[#b5bac1] font-[500]'>Blocked</li>
                            <li className='navList cursor-pointer text-[1.3rem] text-[#5bc770] font-[500]'>Add Friend</li>
                        </ul>
                    </div>
                    <div className='third flex absolute right-7 w-[13rem] justify-between'>
                        <div className="flex">
                            <svg x="0" y="0" className="icon-2xnN2Y cursor-pointer" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill="#b5bac1" fill-rule="evenodd" clip-rule="evenodd" d="M20.998 0V3H23.998V5H20.998V8H18.998V5H15.998V3H18.998V0H20.998ZM2.99805 20V24L8.33205 20H14.998C16.102 20 16.998 19.103 16.998 18V9C16.998 7.896 16.102 7 14.998 7H1.99805C0.894047 7 -0.00195312 7.896 -0.00195312 9V18C-0.00195312 19.103 0.894047 20 1.99805 20H2.99805Z"></path></svg>
                            <span className='verticalSeperator w-[1px] h-[24px] mx-[8px]'></span>
                        </div>
                        <div>
                            <svg width="24" height="24" className="svg-lIB-lq cursor-pointer" viewBox="0 0 24 24"><foreignObject x="0" y="0" width="24" height="24" overflow="visible" mask="url(#svg-mask-header-bar-badge)"><svg x="0" y="0" className="icon-2xnN2Y" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z" fill="#b5bac1"></path></svg></foreignObject></svg>
                        </div>
                        <div>
                            <a href="#">
                                <svg x="0" y="0" className="icon-2xnN2Y cursor-pointer" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill="#b5bac1" d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default topbar