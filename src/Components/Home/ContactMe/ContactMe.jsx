import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLocationDot, FaWhatsapp } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import { IoPhonePortraitOutline } from 'react-icons/io5';


const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_7ec59gr', 'template_k9e2p22', form.current, {
            publicKey: 'al0nJoGivJ-gK1sfc',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
       <div id='contactMe' className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 '>
        <h2 className='text-center text-4xl font-bold text-teal-400'>Contact Me</h2>
         <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 p-8 ">
            {/* Contact Form */}
            <div className=" shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-teal-500">Contact Me</h2>
                <form ref={form} onSubmit={sendEmail}  className="flex flex-col space-y-4">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                    ></textarea>
                    <input
                        type="submit"
                        value="Send Email"
                        className="bg-teal-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 cursor-pointer"
                    />
                </form>
            </div>

            {/* Contact Info Card */}
            <div className="  py-16 shadow-2xl rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-teal-500">Get in Touch</h2>
                <div className="space-y-4 text-gray-400">
                    <div>
                        <h3 className="font-bold flex items-center gap-2"><FaLocationDot />Location:</h3>
                        <p className="">Haripur,Tehatta,Dist:Nadia,WestBengal</p>
                    </div>
                    <div>
                        <h3 className="font-bold flex items-center gap-2"><HiOutlineMail />Email:</h3>
                        <p className="">bikrambiswas912@gmail.com</p>
                    </div>
                    <div>
                        <h3 className="font-bold flex items-center gap-2"><IoPhonePortraitOutline />Phone:</h3>
                        <p className="">+91 8370988289</p>
                    </div>
                    <div>
                        <h3 className="font-bold flex items-center gap-2"><FaWhatsapp />WhatsApp:</h3>
                        <p className="">+91 8370988289</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default ContactMe;
