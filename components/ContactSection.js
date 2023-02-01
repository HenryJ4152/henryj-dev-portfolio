import { contactState } from '@/recoil/atoms';
import React, { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil';

function ContactSection() {

  const contactSectionRef = useRef()
  const [windowDimensions, setWindowDimensions] = useState(null)
  const [contact, setContact] = useRecoilState(contactState);


  function getWindowDimensions() {
    if (window) {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height
      }
    }
  }
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setContact(contactSectionRef.current.offsetTop)
  }, [windowDimensions, contactSectionRef])





  return (
    <section ref={contactSectionRef} className=' pt-24 pl-12  w-full h-screen text-3xl font-bold'>
      <h1 className=''>Contact me</h1>
      <div className=' text-2xl font-normal mt-7'>

        <p>Henry Jian</p>
        <p>henryjian4152@gmail.com</p>
        <p>github.com/HenryJ4152</p>
      </div>
    </section>
  )
}

export default ContactSection