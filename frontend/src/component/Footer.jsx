import React from 'react'
import Logo from '../assets/logo.png'
import Facebook from './../assets/footer/facebook.png'
import Twitter from './../assets/footer/twitter.png'
import Instagram from './../assets/footer/instagram.png'
import Email from './../assets/footer/email.png'
import Location  from './../assets/footer/location.png'
import Calling from './../assets/footer/calling.png'
import { Link } from "react-router";

const Footer = () => {
        
    const socialMediaLinks = [
        {
            name: Twitter,
            alt: 'Twitter',
            url: 'https://www.twitter.com/'
        },
        {
            name: Instagram,
            alt: 'Instagram',
            url: 'https://www.instagram.com/'
        },
        {
            name: Email,
            alt: 'Email',
            url: 'mailto:info@agrimart.com'
        }
    ];

    const contactDetails = [
        {
            icon: Location,
            alt : 'Argimart Pune',
            href: 'https://maps.app.goo.gl/PjnAu7sv8ukzt1xb8',
        },
        {    
            icon: Calling,
            alt : 'Contact Us',
            href: 'https://maps.app.goo.gl/PjnAu7sv8ukzt1xb8',
        },
        {
            icon: Email,
            alt : 'Gmail Us',
            href: 'mailto:info@agrimart.com',
        }
    ];

    const services = [
        { name: 'Essentials', href: '/essentials', },
        { name: 'Vegetables', href: '/vegetables', },
        { name: 'Fruits', href: '/fruits', },
        { name: 'Exotics', href: '/exotics', },
        { name: 'Dairy', href: '/dairy', }
    ];

    const quickLinks = [
        { name: 'Home', path: '/', },
        { name: 'Services', path: '/Home', },
        { name: 'About Us', path: '/services' },
        { name: 'Contact Us', path: '/Home', },
        { name: 'feedback', path: '/services' },
    ];

  return (
    <>
    <footer className='bg-green-800 text-gray-300 px-6 sm:px-10 py-10'>
       <div className=' max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 justify-content-center flex gap-10'>
        <div className=''>
            <span><img src={Logo} className='w-44 sm:w-56' alt="Logo" /></span>
            <p className='text-sm text-left mt-4 leading-6'>
            Discover pure, organic goodness at Agrimart where fresh, wholesome products come straight from nature to you.</p>
        </div>

        <div>
            <h1 className='font-semibold text-lg sm:text-xl mb-3'>Our Services</h1>
            <ul>
            {services.map((service,index) => (
            <li key={index} className='py-1 text-sm sm:text-base'> 
                <Link to={service.href}>{service.name}</Link> 
            </li>
            ))}
            </ul>
        </div>

        <div>
            <h3 className='font-semibold text-lg sm:text-xl mb-3'>Useful Links</h3>
            <ul>
            {quickLinks.map((link,index)=>(
                <li key={index} className='py-1 text-sm sm:text-base'>
                    <Link to={link.path}>{link.name} </Link>
                </li>
            ))}
            </ul>
        </div>

        <div>
            <h3 className='font-semibold text-lg sm:text-xl mb-3'>Contact Us</h3>
            <ul className=''>
            {contactDetails.map((contact,index) => (
                <li key={index} className='py-2'>
                 <div className='flex items-center gap-3'>
                   <img src={contact.icon} className='w-5 h-5 sm:w-6 sm:h-6' alt={contact.alt}/>
                    <a href={contact.href} target="_blank" rel="noopener noreferrer">  <p className='text-sm sm:text-base'>{contact.alt} </p></a>
                 </div>    
                </li>
            ))}
            </ul>
        </div>

        <div>
        <h3 className='font-semibold text-lg sm:text-xl mb-3'>Follow Us</h3>
        <div className='flex flex-wrap gap-4'>
            {socialMediaLinks.map((social,index) => (
            <a href={social.url} key={index} target="_blank" rel="noopener noreferrer"> 
               <img src={social.name} className='w-6 h-6' alt={social.alt} /></a>
            ))}
        </div>
      </div>    
       </div>

        <div className='max-w-7xl mx-auto mt-10 bg-gray-300 text-black rounded-md px-4 sm:px-8
              py-4 flex flex-col sm:flex-row items-center justify-between gap-4'>
            <p className='text-sm text-center sm:text-left'>© 2024 All rights reserved Agrimart</p>
        <div className='flex gap-4'>
          {socialMediaLinks.map((social,index)=>(
                <a href={social.url} key={index} target="_blank" rel="noopener noreferrer">
                    <img  src={social.name} className='w-6 h-6 bg-gray-500 p-1 rounded-sm' alt={social.alt} />
                </a> 
            ))}
        </div>

         </div>
    </footer>
    </>
  )
}

export default Footer