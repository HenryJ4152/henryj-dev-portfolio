import { contactState } from '@/recoil/atoms';
import React, { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil';
import emailjs from '@emailjs/browser';

function ContactSection() {

  const contactSectionRef = useRef()
  const [windowDimensions, setWindowDimensions] = useState(null)
  const [contact, setContact] = useRecoilState(contactState);

  const [email, setEmail] = useState(null)
  const [message, setMessage] = useState(null)

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


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (message && email) {
      emailjs.sendForm('service_fiiergk', 'template_51log7q', form.current, 'JaMWmUUgL4r1CgIHK')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
  };


  return (
    <section ref={contactSectionRef} className='flex pt-14 pl-12  w-full h-screen text-3xl font-bold space-x-10'>
      
      <div className=' flex flex-col'>
        <h1 className=''>Contact me</h1>
        <div className=' text-2xl font-normal mt-7'>
          <p>Henry Jian</p>
          <p>henryjian4152@gmail.com</p>
          <p>github.com/HenryJ4152</p>
        </div>
      </div>

      {/* form */}
      <div className=' w-80 font-normal'>

        <form
          className=' flex flex-col text-lg '
          ref={form} onSubmit={sendEmail}
        >

          <label>Name</label>
          <input type="text" name="user_name"
            className='px-2 bg-stone-700 outline-none focus:bg-stone-600'
          />

          <label className=' mt-3'>Email</label>
          <input onChange={e => setEmail(e.target.value)} type="email" name="from_name"
            className=' px-2 bg-stone-700 outline-none focus:bg-stone-600'
          />

          <label className=' mt-3'>Message</label>
          <textarea onChange={e => setMessage(e.target.value)} name="message"
            rows={5}
            className=' px-2 bg-stone-700 outline-none focus:bg-stone-600'
          />

          <input
            className={`mx-auto w-24 py-0.5  mt-3 bg-stone-500 ${email && message && "bg-blue-500 hover:bg-blue-600 rounded-md cursor-pointer"}   `}
            type="submit" value="Send"
          />
        </form>

      </div>
    </section>
  )
}

export default ContactSection