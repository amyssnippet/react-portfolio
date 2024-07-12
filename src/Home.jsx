import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => <>
  <div className='router-container'>
    <div className='imgandname'>
      <img src="/PSX_20240219_195257.jpg" width="100" height="100" alt='mypic' className='imghome' />
      <h1 className='nameh1'>Hi, I'm <span className='h1xtrastyle'>Amol</span></h1>
    </div>
    <div className='mydesc'>
      <h5>
        Crafting seemless digital experiences with cutting-edge technology.
      </h5>
      <hr/>
      <h3 className='abttitle'>About Me</h3><hr />
      <p className='abtp'>Hi, I'm <underline>Amol Yadav</underline>, a passionate, <underline>Full Stack</underline> and <underline>React Developer</underline> with a knack for transforming complex problems into intuitive solutions. With a strong foundation in <underline>Data Structures and Algorithms</underline>, I build efficient, scalable, and user-centric applications. Explore my portfolio to see how I blend <underline>creativity</underline> and <underline>techincal expertise</underline> to deliver exceptional <underline>digital experiences</underline>.</p>
      <Link className='projlink' to='/aboutme'>View more aboutme</Link>
    </div>
    <div className='mydesc'>
      <hr />
      <h3 className='abttitle'>Projects</h3>
      <hr />
      <div className='procont'>
        <div className='proj'>
          <img src="https://vedbooks.vercel.app/SRC/IMG/20240409_130356_0000.png" alt="vedmedia" height="200" width="200" className='projimg' />
          <h1 className='projtitle'>Vedmedia</h1>
          <p className='projdesc'>A project as an organisation to deliver Hinduism and Vedic content digitally including Books, Texts, and many more..</p>
          <a href='' className='projlink'>View Project</a>
        </div>
        <div className='proj'>
          <img src="https://os-imgs.vercel.app/IMG/logoos.png" className='projimg' height="200" width="200" alt='open-source' />
          <h1 className='projtitle'>Dev Snippets</h1>
          <p className='projdesc'>A project that delivers content like snippets, libraries, docs, courses and many more that every Developer needs.</p>
          <a href='https://os-org-in.github.io/DevSnippets/' className='projlink'>View Project</a>
        </div>
        <div className='viewmore'>
          <Link to='/projects' className='projlink'>View more Projects</Link>
        </div>
      </div>
      <div className='hobhome'>
        <hr />
        <h4 className='abttitle'>My Hobbies</h4>
        <hr />
        <h6 className='abttitle2'>1. Open Source Contributions</h6>
        <p className='abtp2'>Contributing to open-source projects allows me to collaborate with developers worldwide, enhance my coding skills, and give back to the community.</p>
        <hr />
        <h6 className='abttitle2'>2. Making Tutorials</h6>
        <p className='abtp2'>I enjoy making tutorials on web development topics. It not only helps me solidify my understanding but also shares knowledge with others in the tech companies.</p>
        <Link to='/hobbies' className='projlink'>view more hobbies</Link>
      </div>
      <div className='hobhome'>
        <hr />
        <h4 className='abttitle'>Services</h4>
        <hr />
        <h6 className='abttitle2'>1. Frontend Development</h6>
        <h6 className='abttitle2'>2. Backend Development</h6>
        <h6 className='abttitle2'>3. MERN Stack Development</h6>
        <Link to='/services' className='projlink'>view more services</Link>
      </div>
      <div className='hobhome'>        <hr />
        <h4 className='abttitle'>Skills</h4>
       <hr />
        <h6 className='abttitle2'>1. Programmer</h6>
        <h6 className='abttitle2'>2. Frontend Developer</h6>
        <h6 className='abttitle2'>3. Backend Developer</h6>
        <Link to='/skills' className='projlink'>view more skills</Link>
      </div>
    </div>
  </div>
</>;

export default Home;
