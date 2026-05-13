import React from 'react'
import Logo from '../assets/logo.png'
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'
import Instagram from '../assets/instagram.png'
import Email from '../assets/email.png'
import Location from '../assets/location.png'
import Contact from '../assets/contact.png'
import { Link , href } from "react-router";


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
            name: Instagra,
            alt: 'Instagram',
            url: 'https://www.instagram.com/'
        },
        {
            name: Email,
            alt: 'Email',
            url: 'mailto:info@agrimart.com'
        }
    ]

    const contactDetails = [
        {
            icon: Location,
            alt : 'Argimart Pune',
            href: 'https://maps.app.goo.gl/PjnAu7sv8ukzt1xb8',
        },

        {    
            icon: Contact,
            alt : 'Contact Us',
            href: 'https://maps.app.goo.gl/PjnAu7sv8ukzt1xb8',
        },

        {
            icon: Email,
            alt : 'Gmail Us',
            href: 'mailto:info@agrimart.com',
        }

    ],

    const services = [
        { name: 'Essentials', href: '/essentials', },
        { name: 'Vegetables', href: '/vegetables', },
        { name: 'Fruits', href: '/fruits', },
        { name: 'Exotics', href: '/exotics', },
        { name: 'Dairy', href: '/dairy', }
    ],

    const quickLinks = [
        { name: 'Home', path: '/Home', },
        { name: 'Services', path: '/Home', },
        { name: 'About Us', path: '/services' },
        { name: 'Contact Us', path: '/Home', },
        { name: 'feedback', path: '/services' },
    ]

  return (
    <footer>
       <div>

          <div>
           <span><img src={Logo} alt="Logo" /> </span>
           
           <p>Discover pure, organic goodness at Agrimart—where fresh, wholesome products come straight from nature to you.</p>
          </div>

           <div>
            
          </div>

           <div>
            
          </div>

           <div>
            
          </div>
          
       </div>


    </footer>
    
  )
}

export default Footer

