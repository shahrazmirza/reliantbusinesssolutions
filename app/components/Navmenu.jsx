'use client'
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { useState, useEffect } from 'react';
import data from '../Data/Section_One_Card_data.json';
import { Container } from '@radix-ui/themes';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion"

const Navmenu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
      console.log('', data);

      if (data && data.length > 0) {
          setItems(data);
      } else {
          console.error('');
      }
  }, []);
  return (
    <div className='fixed top-0 left-0 right-0 z-10'>
      <div className='bg-white h-14'></div>
      <Container className='-mt-14'>
        <div className='flex justify-between leading-8 py-2'>
          <motion.div className='py-1'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.0 }}
          >
            <Link href="/">
              <Image
                src='/assets/images/logo.png'
                alt='Reliant Logo'
                width={220}
                height={30}
                className='logo object-contain py-1'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </Link>
          </motion.div>
          <div className='flex space-x-8 align-middle'>
            <div>
              <NavigationMenu.Root>
                <NavigationMenu.List className="flex list-none">
                  <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="flex px-2 py-2 text-base font-medium leading-none my-1 hover:text-sky-700">
                      Services
                      <CaretDownIcon/>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content>
                      <ul className='bg-sky-50 bg-opacity-100 text-black mt-2 w-fit'>
                        {items.map(item => (
                            <ListItem className='transition delay-150 duration-300 ease-in-out hover:bg-sky-200 hover:text-black text-sm ' title={item.title} href={item.href}></ListItem>
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
                    <Link href="/Contact" className="px-5 ml-5 text-sm font-medium leading-none border-sky-700 border-solid border rounded-full text-sky-700 hover:text-white h-10 hover:bg-sky-700 text-white-100 flex items-center justify-center">Get In Touch</Link>
                  </NavigationMenu.Item>
                </NavigationMenu.List>
                <div>
                  <NavigationMenu.Viewport />
                </div>
              </NavigationMenu.Root>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

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

export default Navmenu;
