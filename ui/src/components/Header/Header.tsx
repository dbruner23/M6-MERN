import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import headerTitle from "../../assets/header/headerTitle.png";
import searchIcon from "../../assets/header/search.png";

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Owners', href: '/owners' },
    { name: 'Tenants', href: '/tenants' },
    { name: 'Property Listings', href: '/property' },
    { name: 'News', href: '/news' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Contact', href: '/Contact' }
  ]

export function Header() {
    return(
    <>
    <Popover>
                <div className="sticky">
                <nav className="bg-[#4b4b4b] bg-opacity-50 pt-3 lg:pr-12 pl-6 pb-2 flex items-center justify-between justify-start" aria-label="Global">
                    <div className="flex flex-shrink-0 flex-grow lg:flex-grow-0 mr-16">
                        <div className="flex w-full items-center justify-between lg:w-auto">
                            <a href="/">
                            <img
                                alt="Your Company"
                                className="max-w-[320px]"
                                src={headerTitle}
                            />
                            </a>
                            <div className=" flex items-center lg:hidden">
                            <Popover.Button className="inline-flex items-center justify-center rounded-lg bg-black p-2 text-white hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grey-500">
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:ml-10 lg:flex lg:space-x-12 lg:pr-10">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="font-medium text-white hover:text-gray-900">
                            {item.name}
                            </a>
                        ))}
                        <a href="/">
                            <img
                                alt="Search Icon"
                                className="max-w-[25px] mx-6"
                                src={searchIcon}
                            />
                        </a>
                    </div>
                </nav>
                </div>

                <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                <Popover.Panel
                    focus
                    className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition lg:hidden"
                >
                    <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                    <div className="flex items-center justify-between px-5 pt-4">
                        <div>
                        <img
                            className="h-8 w-auto"
                            src={headerTitle}
                            alt=""
                        />
                        </div>
                        <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grey-500">
                            <span className="sr-only">Close main menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                        </div>
                    </div>
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        >
                            {item.name}
                        </a>
                        ))}
                    </div>
                    <a href="/">
                        <img
                            alt="Search Icon"
                            src={searchIcon}
                        />
                    </a>
                    </div>
                </Popover.Panel>
                </Transition>
            </Popover>
    </>
    )
}
