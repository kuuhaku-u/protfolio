import { ListItem, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { Fragment, useEffect, useState } from 'react'
import { navbarData } from './data'
export const NavBar = () => {
    // const [time, setTime] = useState();
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setTime(new Date().toLocaleString());
    //     }, 1000);
    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, []);
    return (
<>
        <nav className="bg-slate-600 px-2 sm:px-4 py-2.5  border-red-600 border-3  w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <Box className="container flex flex-wrap justify-between items-center mx-auto">
                <Typography href="https://flowbite.com/" className="flex items-center">
                    <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Protfolio</span>
                </Typography>
                <Box className="flex md:order-2">
                    {/* <Typography className='text-white'>{time}</Typography> */}
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                    </button>
                </Box>
                <Box className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ListItem className="flex flex-col p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md: dark: md:dark: dark:border-gray-700">
                        {
                            navbarData.map((name) => (<Fragment key={name.id}>
                                <ListItemText className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white" aria-current="page">
                                    {name.label}
                                </ListItemText>
                            </Fragment>))
                        }
                    </ListItem>
                </Box>
            </Box>
        </nav>

                        </>
    )
}
