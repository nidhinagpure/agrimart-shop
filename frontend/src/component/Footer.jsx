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
        { name: 'Home', path: '/Home', },
        { name: 'Services', path: '/Home', },
        { name: 'About Us', path: '/services' },
        { name: 'Contact Us', path: '/Home', },
        { name: 'feedback', path: '/services' },
    ];

  return (
    <>
    <footer>
       <div className='flex bg-green-800 justify-between gap-30 px-6 py-16 pb-34 mb-0 mt-20'>
 
        <div className=''>
            <span><img src={Logo} className='w-60 ' alt="Logo" /></span>
            <p className='w-60 line-clamp-10 text-left ml-6'>
            Discover pure, organic goodness at Agrimart where fresh, wholesome products come straight from nature to you.</p>
        </div>

        <div>
            <h1 className='font-medium text-xl py-1'>Our Services</h1>
            <ul>
            {services.map((service,index) => (
            <li key={index} className='text-md py-1'> 
                <Link to={service.href}>{service.name}</Link> 
            </li>
            ))}
            </ul>
        </div>

        <div>
            <h3 className='font-medium text-xl py-1'>Useful Links</h3>
            <ul>
            {quickLinks.map((link,index)=>(
                <li key={index} className='text-md py-1'>
                    <Link to={link.path}>{link.name} </Link>
                </li>
            ))}
            </ul>
        </div>

        <div className=''>
            <h3 className='font-medium text-xl py-1'>Contact Us</h3>
            <ul className=''>
            {contactDetails.map((contact,index) => (
                <li key={index}>
                 <div className='flex py-1'>
                   <img src={contact.icon} className='w-6 h-6' alt={contact.alt}/>
                    <a href={contact.href} target="_blank" rel="noopener noreferrer">  <p className='px-3'>{contact.alt} </p></a>
                 </div>    
                </li>
            ))}
            </ul>
        </div>

        <div className='gap-8 pr-6'>
        <h3 className='font-medium text-xl py-1'>Follow Us</h3>
        <div className='flex gap-4 py-1'>
            {socialMediaLinks.map((social,index) => (
            <a href={social.url} key={index} target="_blank" rel="noopener noreferrer"> 
               <img src={social.name} className='w-6 h-6' alt={social.alt} /></a>
                ))}
        </div>
      </div>    
  
       </div>

         <div className='w-7xl bg-gray-300 items-center mx-auto py-2 flex justify-between px-12 mt-[-6%]'>
          <p>© 2024 All rights reserved Agrimart</p>
          <div className='flex gap-4'>
          {socialMediaLinks.map((social,index)=>(
                <a href={social.url} key={index} target="_blank" rel="noopener noreferrer">
                    <img  src={social.name} className='w-6 h-6' alt={social.alt} />
                </a> 
            ))}
            </div>
         </div>

    </footer>
    </>
  )
}

export default Footer

