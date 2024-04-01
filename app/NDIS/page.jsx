'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Scroll_to_top from '../components/Scroll_to_top'
import Footer from '../components/Footer'
import { Container } from '@radix-ui/themes'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
import Whatsapp from '../components/Whatsapp'

const NDIS = () => {
  return (
    <div>
      <Navbar />
      <Scroll_to_top />
      <Whatsapp />
      <div className='py-5'>
      <div className='flex flex-col text-center justify-center bg-sky-50 md:pt-24 py-10 md:pb-12 px-7'>
          <p className='text-2xl/snug md:text-3xl/loose font-semibold'>
          Welcome to Reliant Business Solutions
          </p>
          <p className='text-lg/snug font-normal text-gray-500'>
          Your Trusted Partner for NDIS Plan Management
          </p>
        </div>      
      <div className='md:grid md:grid-cols-2 items-center bg-gray-100'>
        <motion.div 
        variants={{ 
          initial: { x: 150, opacity:0 },
          animate: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 }}
        }}
        initial = 'initial'
        animate='animate'
        className='flex justify-center items-center'>
            <Image
              src='/assets/images/ndis1.jpg'
              height='450'
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
            <p className='text-base/relaxed font-normal text-gray-500 text-center md:drop-shadow-sm'>Our Services</p>
            <p className='text-2xl/relaxed md:text-2xl/relaxed md:text-3xl/relaxed font-semibold md:drop-shadow-sm'>NDIS Plan Managementââ</p>
            <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Our services will navigate the complexities of NDIS plan management for you</p>
            
            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Claims and Payments</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Efficient processing of NDIS claims and timely payments.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Budget Management</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Strategic planning and oversight to optimise NDIS budgets.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Financial Reporting</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Detailed reports to keep you informed about your financial position.</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className='md:grid md:grid-cols-2 flex flex-col-reverse items-center bg-sky-100'>
          <div className='md:px-20 md:pl-28 p-7'>
            <p className='text-base/relaxed font-normal text-gray-500 text-center md:drop-shadow-sm'>Our Services</p>
            <p className='text-2xl/relaxed md:text-2xl/relaxed md:text-3xl/relaxed font-semibold md:drop-shadow-sm'>Client Support & Advocacyââ</p>
            <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>We go beyond numbers to provide support and advocacy for our clients</p>
            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Assistance with Plan Reviews</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Helping clients navigate plan reviews and updates.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Advocacy for Additional Supports</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Working on behalf of clients to secure necessary additional supports.</p>
              </div>
            </div>
            
          </div>
          <div className='flex justify-center items-center'>
            <Image
              src='/assets/images/ndis2.jpg'
              height='450'
              width='1000'
              ></Image>
          </div>
        </div>
      
        <div className='md:grid md:grid-cols-2 items-center bg-gray-100'>
        <div className='flex justify-center items-center'>
            <Image
              src='/assets/images/ndis3.jpg'
              height='450'
              width='1000'
              ></Image>
          </div>
          <div className='md:px-20 md:pr-40 p-7'>
            <p className='text-base/relaxed font-normal text-gray-500 text-center md:drop-shadow-sm'>Our Services</p>
            <p className='text-2xl/relaxed md:text-2xl/relaxed md:text-3xl/relaxed font-semibold md:drop-shadow-sm'>Compliance and Trainingââ</p>
            <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Stay compliant and up-to-date with our compliance and training services</p>
            
            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>NDIS Compliance</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Ensuring your business adheres to NDIS standards and regulations.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Staff Training</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Training your team on NDIS processes and compliance requirements.</p>
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
        <div className='md:grid md:grid-cols-2 flex flex-col-reverse items-center'>
            <div className='md:p-10 px-7 pb-10'>
              
              <div className='flex px-4 pt-4'>
                <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                  <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div className='pl-4'>
                  <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Expert NDIS Knowledge</p>
                  <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Our team has extensive experience and expertise in NDIS plan management.</p>
                </div>
              </div>

              <div className='flex px-4 pt-4'>
                <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                  <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div className='pl-4'>
                  <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Client-Centric Approach</p>
                  <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>We understand the importance of client satisfaction and tailor our services to meet individual needs.</p>
                </div>
              </div>

              <div className='flex px-4 pt-4'>
                <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                  <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div className='pl-4'>
                  <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Reliability</p>
                  <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Count on us for accurate, timely, and confidential NDIS plan management services.</p>
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

export default NDIS
