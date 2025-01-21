'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
// import logo from './public/oonersLogog.svg';
import logo2 from '../../imgs/navbarImgs/svgoonerslogowhite.svg'
import logo3 from '../../imgs/navbarImgs/svgoonerslogodark.svg'
import MainWhiteButton from '../MainWhiteButton/MainWhiteButton';
import Cookies from "js-cookie";
import axios from 'axios';
import { baseURL } from '@/app/functions/baseUrl';
import { toast, ToastContainer } from 'react-toastify';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [userData, setUserData] = useState<any>(null);
    const pathname = usePathname();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path: string) => pathname.includes(path);
    const imgSrc = pathname === '/dashboard/home' ? logo2 : logo3;
    const token = Cookies.get('auth_token');
    
    useEffect(() => {
        if (token) {
            setIsAuthenticated(true);
            // Replace this with your API call to fetch user data
            const loginedData = Cookies.get('currentLoginedData');
            setUserData(loginedData)
        }
    }, []);
    console.log(JSON.parse(userData));
    const currentUserData = JSON.parse(userData)

    const handleLogout = () => {
        const fetchData = async () => {
            try {
                const response = await axios.post(`${baseURL}/logout`, {}, {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });
                toast.success(`${response?.data?.message}.`);
                window.location.reload();
                console.log(response?.data);
                
                Cookies.remove('currentLoginedData');
                Cookies.remove('auth_token');
                // Cookies.remove('verified');
            } catch (error) {
                if (error) {
                    Cookies.remove('auth_token');
                    toast.error(`error occured`);
                    window.location.reload();
                }
            };
        };
        fetchData();
    };
    return (
        <nav className={`border-gray-200 w-full overflow-x-hidden ${pathname === '/dashboard/home' ? 'bg-transparent absolute top-0 z-50 left-0' : 'bg-[#f7f7f7]'}`}>
            <div className="container lg:max-w-6xl flex flex-wrap items-center justify-between mx-auto py-6 lg:py-10 md:py-8 sm:py-6 lg:px-6 md:px-6">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                        src={imgSrc}
                        alt={'Ooners Logo'}
                        width={60}
                        height={30}
                        // className="w-100"
                        style={{
                            width: '130px',
                            height: 'auto',
                        }}
                    />
                </Link>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="md:hidden">
                        <MainWhiteButton text="Invest" link="/" />
                    </div>
                    <button
                        type="button"
                        className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm ${pathname === '/dashboard/home' ? 'text-gray-500' : 'text-black'} rounded-lg md:hidden transition-all focus:outline-none focus:ring-2 focus:ring-gray-200`}
                        aria-controls="navbar-default"
                        aria-expanded={isOpen}
                        onClick={toggleNavbar}
                    >
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
                    id="navbar-default"
                >
                    <ul className={`${isOpen ? 'bg-white text-black' : ''} font-medium flex flex-col p-4 md:bg-transparent md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0`}>
                        <li>
                            <Link
                                href="/dashboard/home"
                                className={`block py-2 px-3 rounded md:p-0 ${isActive('/dashboard/home')
                                    ? `text-black ${pathname === '/dashboard/home' ? 'md:text-white' : 'text-black'} font-semibold`
                                    : `text-black ${pathname === '/dashboard/home' ? 'md:text-white' : 'text-black'}  transition-all font-light`
                                    }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dashboard/about"
                                className={`block py-2 px-3 rounded md:p-0 ${isActive('/dashboard/about')
                                    ? `text-black ${pathname === '/dashboard/home' ? 'md:text-white' : 'text-black'} font-semibold`
                                    : `text-black ${pathname === '/dashboard/home' ? 'md:text-white' : 'text-black'}  transition-all font-light`
                                    }`}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dashboard/properties"
                                className={`block py-2 px-3 rounded md:p-0 ${isActive('/dashboard/properties')
                                    ? `text-black ${pathname === '/dashboard/home' ? 'md:text-white' : 'text-black'} font-semibold`
                                    : `text-black ${pathname === '/dashboard/home' ? 'md:text-white' : 'text-black'}  transition-all font-light`
                                    }`}
                            >
                                Properties
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dashboard/wallet"
                                className={`block py-2 px-3 rounded md:p-0 ${isActive('/dashboard/wallet')
                                    ? `text-black ${pathname === '/dashboard/home' ? 'md:text-white' : 'text-black'} font-semibold`
                                    : `text-black ${pathname === '/dashboard/home' ? 'md:text-white' : 'text-black'}  transition-all font-light`
                                    }`}
                            >
                                Wallet
                            </Link>
                        </li>
                        {isAuthenticated ? (
                            <>
                                <li className="flex items-center lg:hidden md:hidden mb-3">
                                    <Image
                                        src={currentUserData?.image}
                                        alt="Profile"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                </li>
                                <li className='lg:hidden md:hidden'>
                                    <button
                                        type="button"
                                        onClick={handleLogout}
                                        className="w-full text-left py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className='lg:hidden md:hidden'>
                                    <MainWhiteButton text="Sign up" link="/auth/register" />
                                </li>
                                <li className='lg:hidden md:hidden'>
                                    <MainWhiteButton text="Login" link="/auth/login" />
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                <div className="hidden md:block">
                    {isAuthenticated ? (
                        <div className="flex items-center space-x-4">
                            <Image
                                src={currentUserData?.image}
                                alt="Profile"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <button
                                type='button'
                                onClick={handleLogout}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <MainWhiteButton
                                text="Sign up"
                                link="/auth/register"
                                px={`${
                                    pathname === '/dashboard/home'
                                        ? 'px-6 text-white border-white hover:bg-white focus:ring-white hover:text-blue-900'
                                        : 'px-6 text-black border-black hover:bg-black focus:ring-black hover:text-white'
                                } `}
                            />
                            <MainWhiteButton
                                text="Login"
                                link="/auth/login"
                                px={`${
                                    pathname === '/dashboard/home'
                                        ? 'px-6 text-white border-white hover:bg-white focus:ring-white hover:text-blue-900'
                                        : 'px-6 text-black border-black hover:bg-black focus:ring-black hover:text-white'
                                } `}
                            />
                        </>
                    )}
                </div>
            </div>
            <ToastContainer />

        </nav>
    );
}
