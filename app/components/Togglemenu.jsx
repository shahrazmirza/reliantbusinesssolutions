'use client'
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon, Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import data from '../Data/Section_One_Card_data.json';
import Image from 'next/image';


function Togglemenu() {
  const [items, setItems] = useState([]);

  useEffect(() => {
      console.log('', data);

      if (data && data.length > 0) {
          setItems(data);
      } else {
          console.error('');
      }
  }, []);
  
  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div>
      <div className='bg-gray-800 text-white text-xs h-6 flex justify-center items-center'>
        <p className='animate__animated animate__flash animate__infinite animate__slower'>50% Discount to Students and Healthcare Workers on Tax Services</p>
      </div>
      <div className='flex justify-between h-10 items-center pt-5 pl-5'>
        <div className=''>
          <Link href="/">
            <Image
              src='/assets/images/logo.png'
              alt='Reliant Logo'
              width={220}
              height={30}
              className=''
            />
          </Link>
        </div>
        <button className='flex text-sky-700 bg-sky-50 justify-center w-12 h-14 pt-5' onClick={toggleDiv}>
        {showDiv ? <Cross1Icon /> : <HamburgerMenuIcon />}
        </button>
      </div>
        {showDiv && 
        <div className='bg-sky-50 px-4 py-2 mt-5 h-screen'>
        <div className=''>
          <NavigationMenu.Root>
            <NavigationMenu.List className=" list-none">
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="flex p-2 pt-4 text-base font-medium leading-none my-1 hover:text-sky-700 pl-5">
                  Services
                  <CaretDownIcon/>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content>
                  <ul className='bg-sky-50 bg-opacity-100 text-black mt-2 w-fit'>
                    {items.map(item => (
                        <ListItem className='transition delay-150 duration-300 ease-in-out text-sm ml-5' title={item.title} href={item.href}></ListItem>
                    ))}
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              {/* <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="flex px-5 py-2 font-medium leading-none my-1 hover:text-sky-700" 
                  href="/">
                  About
                </NavigationMenu.Link>
              </NavigationMenu.Item> */}

              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="flex px-5 py-2 font-medium leading-none my-1 hover:text-sky-700" 
                  href="/Pricing">
                  Pricing
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="flex px-5 py-2 font-medium leading-none my-1 hover:text-sky-700" 
                  href="/FAQs">
                  FAQs
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <Link href="/Contact" className="px-5 m-5 w-fit text-sm font-medium leading-none border-sky-700 border-solid border rounded-full text-sky-700 hover:text-white h-10 hover:bg-sky-700 text-white-100 flex items-center justify-center">Get In Touch</Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>
      </div>
      }
    </div>
  );
}

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={classNames(
          'block p-3 pl-5',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="font-medium">{title}</div>
        <p>{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));

export default Togglemenu;
