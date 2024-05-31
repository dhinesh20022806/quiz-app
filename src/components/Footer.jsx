import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer className='flex gap-10 text-5xl py-5 justify-center '>
    <a target='_blank' href='https://www.instagram.com/dhinesh_28_/'><InstagramIcon fontSize='inherit'  className='text-red-500  ' /></a>
   
   <a 
    target='_blank'
    href='https://www.linkedin.com/in/dhinesha28/'

   >
   <LinkedInIcon  fontSize='inherit'  className='text-blue-400  ' />
   </a>
    <a 
        target='_blank'
        href='https://github.com/dhinesh20022806'
    >
    <GitHubIcon fontSize='inherit' />
    </a>

    </footer>
  )
}

export default Footer