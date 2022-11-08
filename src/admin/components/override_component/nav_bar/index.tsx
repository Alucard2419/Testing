import React from 'react';






const Nav_Bar = () => {

    return(
        <>
            <header className="header border-b border-gray-200 dark:border-gray-700">
                <div className="header-wrapper h-16">
                    <div className="header-action header-action-start">
                        <div className="header-action-item header-action-item-hoverable">
                            <div className="text-2xl">
                                <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em"
                                     width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h7"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="header-action-item header-action-item-hoverable text-2xl">
                            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em"
                                 width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="header-action header-action-end">
                        <div className="dropdown">
                            <div className="dropdown-toggle" id="dropdown-toggle-13-K3uedivTQk">
                                <div className="header-action-item header-action-item-hoverable flex items-center"><span
                                    className="avatar avatar-circle"
                                    style={{width: '24px', height: '24px', minWidth: '24px', lineHeight: '24px', fontSize: '12px'}}
                                ><img
                                    className="avatar-img avatar-circle" src="#" alt="avatar"
                                    loading="lazy"/></span></div>
                            </div>
                        </div>
                        <div className="dropdown">
                            <div className="dropdown-toggle" id="dropdown-toggle-19-Iekt6gYqLJ">
                                <div className="text-2xl header-action-item header-action-item-hoverable"><span
                                    className="badge-wrapper"><span className="badge-dot badge-inner"
                                                                    style={{top: '3px', right: '6px'}}
                                ></span><svg
                                    stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em"
                                    width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                         strokeLinejoin="round"
                                                                                         strokeWidth="2"
                                                                                         d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg></span>
                                </div>
                            </div>
                        </div>
                        <div className="text-2xl header-action-item header-action-item-hoverable">
                            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em"
                                 width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <div className="dropdown">
                                <div className="dropdown-toggle" id="dropdown-toggle-25-ADpaSv2ku7">
                                    <div className="header-action-item flex items-center gap-2"><span
                                        className="avatar avatar-circle"
                                        // style="width: 32px; height: 32px; min-width: 32px; line-height: 32px; font-size: 12px;"
                                    ><img
                                        className="avatar-img avatar-circle" src="#"
                                        loading="lazy" alt='avatar'/></span>
                                        <div className="hidden md:block">
                                            <div className="text-xs capitalize">admin</div>
                                            <div className="font-bold">Osmel Martinez</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}


export default Nav_Bar;
