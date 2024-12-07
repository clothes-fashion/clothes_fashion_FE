import "./Header.css"

const Header = () => {
    const logo = "https://firebasestorage.googleapis.com/v0/b/photo-archive-a0523i1.appspot.com/o/employe" +
        "e_avatar%2Fte_chin_ich_fashion_1998-01-08_1731425623854.jpeg?alt=media&token=c9a30ca5-be4e-4bbd-a5c8-05b71cc32c4b";

    return (
        <div className="w-full flex justify-center">
            <div className="w-full flex flex-row justify-center items-center bg-white fixed z-10">
                <div className="flex flex-row flex-wrap justify-between w-full md:w-8/12 min-h-30 px-4 pt-4  ">

                    {/*LOGO*/}
                    <div className="w-2/4 md:w-1/6 flex flex-wrap py-1 justify-start items-center">
                        <button data-collapse-toggle="navbar-dropdow" type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-dropdown" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="logo size-20 " alt="Logo"/>
                        </a>
                    </div>
                    <div className="flex flex-wrap w-1/2 md:w-1/6 sm:order-last">
                        <div className="h-full md:h-1/2 center w-1/2 md:w-full">

                            <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown"
                                 data-dropdown-placement="bottom-start" className="w-10 h-10 rounded-full cursor-pointer"
                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPODjXc3BWoGqU04qUd_tKUgwCf-4tX-Y2A&s" alt="User dropdown" />

                            {/*Dropdown menu*/}
                            <div id="userDropdown"
                                 className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                    <div>Bonnie Green</div>
                                    <div className="font-medium truncate">name@flowbite.com</div>
                                </div>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="avatarButton">
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a href="#"
                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                                        out</a>
                                </div>
                            </div>


                        </div>
                        <div className="h-full md:h-1/2 center w-1/2 md:w-full">
                            <a href="#" className="flex p-1">
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         className="size-8">
                                        <path
                                            d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"/>
                                    </svg>
                                    <span className="badge"> 10</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-4/6">
                        <div className="h-full md:h-1/2 center">

                            <form className="max-w-lg mx-auto w-full">
                                <div className="flex center p-1">
                                    <label htmlFor="search-dropdown"
                                           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your
                                        Email</label>
                                    <button id="dropdown-button" data-dropdown-toggle="dropdown"
                                            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                                            type="button">All categories <svg className="w-2.5 h-2.5 ms-2.5"
                                                                              aria-hidden="true"
                                                                              xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                              viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg></button>
                                    <div id="dropdown"
                                         className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdown-button">
                                            <li>
                                                <button type="button"
                                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button"
                                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button"
                                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button"
                                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="relative w-full">
                                        <input type="search" id="search-dropdown"
                                               className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                               placeholder="Search Mockups, Logos, Design Templates..." required/>
                                        <button type="submit"
                                                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                            </svg>
                                            <span className="sr-only">Search</span>
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div className="h-1/2 invisible sm:visible center">
                            <div className="hidden w-full md:block" id="navbar-dropdown">
                                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100  bg-gray-50 md:justify-between rtl:space-x-reverse md:flex-row
                             md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <a href="#"
                                           className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                                               dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                                    </li>
                                    <li>
                                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
                                                     md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700
                                                     dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg
                                            className="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2" d="m1 1 4 4 4-4"/>
                                        </svg></button>
                                        {/*Dropdown menu*/}
                                        <div id="dropdownNavbar"
                                             className="z-50 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400"
                                                aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <a href="#"
                                                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                                </li>
                                            </ul>
                                            <div className="py-1">
                                                <a href="#"
                                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                                                    out</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                                               dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                                               dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                                               dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;
