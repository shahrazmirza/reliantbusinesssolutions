'use client'
import React from 'react';
import Navbar from '../components/Navbar';
import Scroll_to_top from '../components/Scroll_to_top';
import Footer from '../components/Footer';
import { Container, Section } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";

const Tax = () => {
  
  return (
    <div>
      <Navbar />
      <Scroll_to_top />
      <div className='py-5'>
        <div className='flex flex-col text-center justify-center bg-sky-50 md:pt-24 py-10 md:pb-12 px-7'>
          <p className='text-2xl/snug md:text-3xl/loose font-semibold'>
          Welcome to Reliant Business Solutions
          </p>
          <p className='text-lg/snug font-normal text-gray-500'>
          Your Trusted Partner for Comprehensive Tax and Financial Services
          </p>
        </div>      
        <div className='md:grid md:grid-cols-2 items-center bg-gray-50'>
          <motion.div 
          variants={{ 
            initial: { x: 150, opacity:0 },
            animate: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 }}
          }}
          initial = 'initial'
          animate='animate'
          className='flex justify-center items-center'>
            <Image
              src='/assets/images/tax1.jpg'
              height='600'
              width='1000'
              ></Image>
          </motion.div>
          <motion.div
          variants={{ 
            initial: { y: 50, opacity:0 },
            animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0 }}
          }}
          initial = 'initial'
          animate='animate'
          className='md:px-20 md:pr-40 p-7'>
            <p className='text-base/relaxed font-normal text-gray-500 text-center drop-shadow-sm'>Our Services</p>
            <p className='text-2xl/relaxed md:text-2xl/relaxed md:text-3xl/relaxed font-semibold drop-shadow-sm'>Personalised Tax Services––</p>
            <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Our seasoned tax professionals are here to guide you</p>
            
            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>Individual Tax Preparation</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Precise preparation of your individual tax returns.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>Tax Planning</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Strategic planning to optimise your financial position and minimise tax liabilities.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>Estate and Inheritance Tax</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Comprehensive assistance with estate and inheritance tax matters.</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className='md:grid md:grid-cols-2 flex flex-col-reverse items-center bg-sky-100'>
          <div className='md:px-20 md:pl-28 p-7'>
            <p className='text-base/relaxed font-normal text-gray-500 text-center drop-shadow-sm pt-5'>Our Services</p>
            <p className='text-2xl/relaxed md:text-3xl/relaxed font-semibold drop-shadow-sm'>Tailored Business Tax Services––</p>
            <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Our team specialises in providing tailored tax services for businesses</p>
            
            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>Business Tax Preparation</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Timely and precise preparation of business tax returns.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>Tax Compliance</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Ensuring your business stays compliant with ever-evolving tax regulations.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>Strategic Tax Planning</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Proactive planning to help your business achieve its financial goals.</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center bg-cover overflow-hidden'>
            <Image
              src='/assets/images/tax2.jpg'
              height='600'
              width='1000'
              ></Image>
          </div>
        </div>
        <div className='md:grid md:grid-cols-2 items-center bg-gray-100'>
          <div className='flex justify-center items-center'>
            <Image
              src='/assets/images/tax3.jpg'
              height='450'
              width='1000'
              ></Image>
          </div>
          <div className='md:px-20 md:pr-40 p-7'>
            <p className='text-base/relaxed font-normal text-gray-500 text-center drop-shadow-sm pt-5'>Our Services</p>
            <p className='text-2xl/relaxed md:text-3xl/relaxed font-semibold drop-shadow-sm'>Expert Consultancy & Advisory––</p>
            <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Consultancy services to help individuals and businesses make informed financial decisions</p>
            
            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>Financial Consultation</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Expert guidance on financial matters, tailored to your unique circumstances.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>Tax Optimization Strategies</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Developing strategies to optimise your tax position and enhance financial efficiency.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>Representation</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Advocating for clients in dealings with tax authorities, ensuring compliance and resolution.</p>
              </div>
            </div>
          </div>
        </div>
                      
        <div className='flex flex-col text-center justify-center bg-sky-50 py-12'>
          <p className='text-2xl/snug font-semibold md:text-3xl/snug font-semibold'>
          Why Choose Reliant Business Solutions?
          </p>
        </div>
        <Container>
          <div className='md:grid md:grid-cols-2 items-center flex flex-col-reverse'>
            <div className='md:p-10 px-7 pb-10'>
              
              <div className='flex px-4 pt-4'>
                <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                  <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div className='pl-4'>
                  <p className='text-base/relaxed font-medium drop-shadow-sm'>Expertise</p>
                  <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Our team comprises seasoned tax professionals with a wealth of experience in tax planning, preparation, and advisory services.</p>
                </div>
              </div>

              <div className='flex px-4 pt-4'>
                <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                  <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div className='pl-4'>
                  <p className='text-base/relaxed font-medium drop-shadow-sm'>Personalised Service</p>
                  <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>We understand that each client is unique. Our approach is personalised to meet your specific needs and goals.</p>
                </div>
              </div>

              <div className='flex px-4 pt-4'>
                <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                  <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div className='pl-4'>
                  <p className='text-base/relaxed font-medium drop-shadow-sm'>Reliability</p>
                  <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Trust is the foundation of our client relationships. You can rely on us for accuracy, timeliness, and confidentiality.</p>
                </div>
              </div>
              
              <div className="justify-center text-center pt-5 w-fit">
                <Link
                className="px-5 text-sm font-medium leading-none border-pink-200 border-solid border-2 rounded-full text-stone-600 bg-pink-200 hover:bg-white h-10 flex items-center"
                href="/Contact"
                >
                  Get In Touch
                </Link>
            </div>
            </div>
            <div className='flex justify-center items-center px-7'>
              <Image
                src='/assets/images/service.jpg'
                height='450'
                width='1000'
                ></Image>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Tax
