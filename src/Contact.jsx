import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return(
    <div className='projpage'>
      <h3 className='abttitle'>Contact Us</h3>
      <hr />
      <a className='nav-link active' href='https://wa.me/+917699900211'>WhatsApp</a>
      <a className='nav-link active' href='mailto:amyssnipet@yahoo.com'>e-Mail</a>
      <hr />
      <h4 className='abttitle2'>Social Media Links</h4>
      <a className='nav-link active' href='https://youtube.com/@craclleetcode'>YouTube</a>
      <a className='nav-link active' href='https://github.com/amyssnippet'>GitHub</a>
      <a className='nav-link active' href='https://www.hackerrank.com/profile/amyssnipet'>Hackerrank</a>
      <a className='nav-link active' href='https://leetcode.com/u/amysnippet'>LeetCode</a>
    </div>
  )
}

export default Contact
