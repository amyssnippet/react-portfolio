import React from 'react';
import { Link } from 'react-router-dom';

function Certificates() {
  return (
    <>
    <div className='projpage'>
      <h1 className='abttitle'>Certificates</h1>
      <div className='crt'>
        <img src="https://amyssnippet.github.io/amyssnippet/certificates/react_basic%20certificate_page-0001.jpg" className='crtimg' alt='react_basic_certificate' />
        <h1 className='projtitle'>React(Basic) Dev</h1>
        <p className='projdesc'>A comprehensive React Basic Project Exam at Hackerrank.</p>
        <a className='projlink' href='https://www.hackerrank.com/certificates/a942017356de'>view here at Hackerrank</a>
      </div>
      <div className='crt2'>
        <img src='https://amyssnippet.github.io/amyssnippet/certificates/124238053.jpg' className='crtimg' alt='udemy_css_bootstrap_js_php_certificate' />
        <h1 className='projtitle'>Udemy Courses Certificate</h1>
        <p className='projdesc'>I hold a Udemy certificate in CSS, Bootstrap, JavaScript, and PHP, showcasing my dedication to web development.</p>
      </div>
      <div className='crt2'>
        <img src='https://amyssnippet.github.io/amyssnippet/certificates/frontend_developer_react certificate_page-0001.jpg' className='crtimg' alt='front_end_react_hackerrank_certificate' />
        <h1 className='projtitle'>Frontend (React) Developer</h1>
        <p className='projdesc'>A hackerrank certificate for completing the Frontend (React) Developer</p>
        <a href='https://www.hackerrank.com/certificates/eac201a27222' className='projlink'>view here at Hackerrank</a>
      </div>
    </div>
   </>
  )
}

export default Certificates;
