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

const Registrations = () => {
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
          Your Trusted Partner for Seamless Registration Services
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
              src='/assets/images/registeration1.jpg'
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
            <p className='text-base/relaxed font-normal text-gray-500 text-center drop-shadow-sm'>Our Services</p>
            <p className='text-2xl/relaxed md:text-2xl/relaxed md:text-3xl/relaxed font-semibold drop-shadow-sm'>Business Registration Services––</p>
            <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Our services will navigate the complexities of business registration in establishing your venture</p>
            
            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>ABN Registration</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Streamlined processes to secure your Australian Business Number</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>Company Registration</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Comprehensive support for the establishment and registration of your company.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>TFN and GST Registration</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Ensuring your business is compliant with tax obligations from the beginning.</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className='md:grid md:grid-cols-2 flex flex-col-reverse items-center bg-sky-100'>
          <div className='md:px-20 md:pl-28 p-7'>
            <p className='text-base/relaxed font-normal text-gray-500 text-center drop-shadow-sm'>Our Services</p>
            <p className='text-2xl/relaxed md:text-2xl/relaxed md:text-3xl/relaxed font-semibold drop-shadow-sm'>Charity Registration and DGR Status Application––</p>
            <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>For organisations with a charitable mission, our services extend to charity registration and DGR (Deductible Gift Recipient) status application</p>
            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>Charity Registration</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Expert guidance through the charity registration process.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>DGR Status Application</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Assistance in applying for Deductible Gift Recipient status to enhance fundraising opportunities.</p>
              </div>
            </div>
            
          </div>
          <div className='flex justify-center items-center'>
            <Image
              src='/assets/images/registeration2.jpg'
              height='450'
              width='1000'
              ></Image>
          </div>
        </div>
      
        <div className='md:grid md:grid-cols-2 items-center bg-gray-100'>
        <div className='flex justify-center items-center'>
            <Image
              src='/assets/images/registeration3.jpg'
              height='450'
              width='1000'
              ></Image>
          </div>
          <div className='md:px-20 md:pr-40 p-7'>
            <p className='text-base/relaxed font-normal text-gray-500 text-center drop-shadow-sm'>Our Services</p>
            <p className='text-2xl/relaxed md:text-2xl/relaxed md:text-3xl/relaxed font-semibold drop-shadow-sm'>Ongoing Compliance Support––</p>
            <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>We go beyond registration to offer ongoing compliance support</p>
            
            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>Annual Compliance Checks</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Regular checks to ensure ongoing compliance with regulatory requirements.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>Updates and Amendments</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Assistance with any necessary updates or amendments to your registered details.</p>
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
                  <p className='text-base/relaxed font-medium drop-shadow-sm'>Expert Guidance</p>
                  <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Our team brings extensive experience in business and charity registration processes.</p>
                </div>
              </div>

              <div className='flex px-4 pt-4'>
                <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                  <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div className='pl-4'>
                  <p className='text-base/relaxed font-medium drop-shadow-sm'>Tailored Solutions</p>
                  <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>We understand that each business or organization is unique. Our services are tailored to meet your specific needs.</p>
                </div>
              </div>

              <div className='flex px-4 pt-4'>
                <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                  <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div className='pl-4'>
                  <p className='text-base/relaxed font-medium drop-shadow-sm'>Efficiency & Reliability</p>
                  <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Count on us for efficient and reliable registration services, delivered with a commitment to your success.</p>
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

export default Registrations
