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
            name: Facebook,
            alt: 'Facebook',
            url: 'https://www.facebook.com/'
        },
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
       <div className='flex bg-green-800'>

          <div className=''>
           <span><img src={Logo} className='w-64' alt="Logo" /> </span>
           <p className='w-50'>Discover pure, organic goodness at Agrimart where fresh, wholesome products come straight from nature to you.</p>
          </div>

           <div>
             <h1 className='font-bold text-lg'>Our Services</h1>
             <ul>
                {services.map((service,index) => (
                <li key={index}> 
                    <Link to={service.href}>{service.name}</Link> 
                </li>
                ))}
             </ul>
          </div>

           <div>
             <h3>Useful Links</h3>
             <ul>
                {quickLinks.map((link,index)=>(
                    <li key={index}>
                        <Link to={link.path}> {link.name} </Link>
                    </li>
                ))}
             </ul>
          </div>

           <div>
             <h3>Contact Us</h3>
             <ul>
                {contactDetails.map((contact,index) => (
                    <li key={index}>
                         <img src={contact.icon} alt={contact.alt}/><a href={contact.href} target="_blank" rel="noopener noreferrer">
                            {contact.alt}
                         </a>
                    </li>
                ))}
             </ul>
          </div>

          <div>
                <h3> Follow Us</h3>
                {socialMediaLinks.map((social,index) => (
                <a href={social.url} target="_blank" rel="noopener noreferrer"> 
                    <img src={social.name} alt={social.alt} />
                </a>
                ))}
          </div>
          
       </div>

    </footer>
    </>
  )
}

export default Footer

