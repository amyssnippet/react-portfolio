import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
  return(
    <>
      <section class="footer">
      <div class="footer-row">
        <div class="footer-col">
          <h4>Info</h4>
          <ul class="links">
            <li><Link className='fta' to='/'>Home</Link></li>
            <li><Link className='fta' to="/aboutme">About me</Link></li>
            <li><Link className='fta' to='/projects'>Projects</Link></li>
            <li><Link className='fta' to="/hobbies">Hobbies</Link></li>
            <li><Link className='fta' to="/services">Services</Link></li>
            <li><Link className='fta' to='/skills'>Skills</Link></li>
            <li><Link className='fta' to="/contact">Contact</Link></li>
            <li><Link className='fta' to='/certificates'>Certificates</Link></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Social Links</h4>
          <ul class="links">
            <li><a className='fta' href="https://wa.me/+917699900211">Whatsapp</a></li>
            <li><a className='fta' href="https://github.com/amyssnippet">Github</a></li>
            <li><a className='fta' href='https://leetcode.com/u/amysnippet'>LeetCode</a></li>
            <li><a className='fta' href="https://youtube.com/@crackleetcode">YouTube</a></li>
            <li><a className='fta' href="https://www.hackerrank.com/profile/amyssnipet">HackerRank</a></li>
            <li><a className='fta' href="mailto:amyssnipet@yahoo.com">e-Mail</a></li>
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}

export default Footer;
