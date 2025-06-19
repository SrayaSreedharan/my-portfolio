import React from 'react'
import './Home.css'
import html from '../Images/html-5.png'
import boot from '../Images/bootstrap.png'
import js from '../Images/js.png'
import react from '../Images/react.jpeg'
import redux from '../Images/redux.png'
import social from '../Images/social.png'
import Tastyhug from '../Images/tastyhug.png'
import style from '../Images/stylelab.png'
import git from '../Images/git icon.png'
import linkedin from '../Images/linkedin.png'
import pic from '../Pages/pic.png'

const Home = () => {

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
    <div className='container'>
         <nav className="navbar"> 
            <div className="logo"> 
                <h2 className="logo-heading">Developer💻</h2> 
            </div> 
            <div className="menu"> 
                <ul className="menu-list"> 
                    <li className="menu-list-items"> 
                        <a className="links" href="#home" style={{textDecoration:'none',color:'white'}}> 
                            Home 
                        </a> 
                    </li> 
                    <li className="menu-list-items"> 
                        <a className="links" href="#service" style={{textDecoration:'none',color:'white'}}> 
                            Service
                        </a> 
                    </li> 
                    <li className="menu-list-items"> 
                        <a className="links" href="#works" style={{textDecoration:'none',color:'white'}}> 
                            works
                        </a> 
                    </li> 
                    <li className="menu-list-items"> 
                        <a className="links" href="#contact" style={{textDecoration:'none',color:'white'}}> 
                            Contact 
                        </a> 
                    </li> 
                </ul> 
            </div> 
        </nav> 
        <section id="home"  className=' row align-items-center text-center text-md-start'>
            <div className="text col-12 col-md-6 mb-4 mb-md-0">
                <h1>SRAYA SREEDHARAN</h1>
                <h5>FRONTEND DEVELOPER</h5>
                <div className='icon'>
                    <img src={html} style={{height:'30px'}}/>
                    <img src={boot} style={{height:'30px'}}/>
                    <img src={js} alt="pic" style={{height:'30px'}}/>
                    <img src={react} alt="pic" style={{height:'30px'}}/>
                    <img src={redux} alt="pic" style={{height:'30px'}}/>{<br></br>}
                </div>
            </div>
            <div className="hero-image">
                <img src={pic} alt="pic"/>
            </div>
            <div className='about'>
                <p> Hi, I'm a passionate <strong>React Developer</strong> with experience in building dynamic, responsive, and high-performance web applications. I specialize in modern JavaScript (ES6+), React.js, and component-driven development.I love creating user-friendly interfaces, optimizing performance, and writing clean, maintainable code. I'm also experienced with state management tools like Redux and Context API.
                I'm always learning new technologies and contributing to open-source projects. Let's build something amazing together!
                </p> 
            </div>
        </section>
        <div > 
            <h2 style={{textAlign:'center',fontSize:'35px'}}>My Services</h2> 
        </div> 
        <section id="service" className="services-content"> 
            <div className="my-row" > 
                <div className="my-col"> 
                    <div className="my-card"> 
                        <h3 className="greet-heading blue-text">Web Design</h3> 
                        <p className="small-para"> 
                            Web development refers to the creating, 
                            building, and maintaining 
                            of websites. It includes aspects such as 
                            web design, web publishing, 
                            web programming, and database management. 
                            It is the creation of an 
                            application that works over the internet 
                            i.e. websites. 
                        </p> 
                    </div> 
                </div> 
                <div className="my-col"> 
                    <div className="my-card"> 
                        <h3 className="greet-heading blue-text">Web Development</h3> 
                        <p className="small-para " > 
                            Web development refers to the creating, 
                            building, and maintaining 
                            of websites. It includes aspects such as 
                            web design, web publishing, 
                            web programming, and database management. 
                            It is the creation of an 
                            application that works over the internet 
                            i.e. websites. 
                        </p> 
                    </div> 
                    </div>
                     <div className="my-col"> 
                    <div className="my-card"> 
                        <h3 className="greet-heading blue-text">Frontend </h3> 
                        <p className="small-para"> 
                            Web development refers to the creating, 
                            building, and maintaining 
                            of websites. It includes aspects such as 
                            web design, web publishing, 
                            web programming, and database management. 
                            It is the creation of an 
                            application that works over the internet 
                            i.e. websites. 
                        </p> 
                    </div> 
                </div> 
                </div>
                </section>
        <section id="works" className='works'>
            <h2 style={{ textAlign: 'center' ,fontSize:'35px'}}>WORKS</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
                 <div style={{ textAlign: 'center' }}>
                    <p>Social Media App<img src={git} style={{height:'20px'}}/></p>
                    <img src={social} alt="Social Media App" style={{ height: '150px', borderRadius: '10px' }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                <p>Tastyhug</p>
                <img src={Tastyhug} alt="Tastyhug App" style={{ height: '150px', borderRadius: '10px' }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                <p>Stylelab</p>
                <img src={style} alt="Stylelab App" style={{ height: '150px', borderRadius: '10px' }} />
                </div>
             </div>
        </section>
        <section id="contact" >
            <h2 style={{ textAlign: 'center' }}>CONTACT ME</h2>
            <div style={{ display: 'flex',  justifyContent: 'center',  flexWrap: 'wrap',  gap: '20px',  padding: '20px' }}>
                <a href="https://github.com/SrayaSreedharan"><img src={git} style={{ height: '40px', borderRadius: '10px' }}/></a>
                <a href="https://in.linkedin.com/in/sraya-sreedharan-0653a1259"><img src={linkedin} style={{ height: '40px', borderRadius: '10px' }}/></a>
            </div>
        </section>
</div>
<footer className="footer"> 
        <div className="footer-content text-center"> 
            <h4> Copyright © 2025 All rights reserved | This portfolio website template is created by sraya sreedharan. </h4> 
            <div className="social-links"> 
                <div className="footer-menu"> 
                    <ul className="footer-menu-list"> 
                        <li className="footer-list-items"> 
                            <a className="footer-links" href="#"> 
                                <i className="fab fa-facebook-f"></i> 
                            </a> 
                        </li> 
                        <li className="footer-list-items"> 
                            <a className="footer-links" href="#"> 
                                <i className="fab fa-twitter"></i> 
                            </a> 
                        </li> 
                        <li className="footer-list-items"> 
                            <a className="footer-links" href="#"> 
                                <i className="fab fa-instagram"></i> 
                            </a> 
                        </li> 
                        <li className="footer-list-items"> 
                            <a className="footer-links" href="#"> 
                                <i className="fab fa-linkedin-in"></i> 
                            </a> 
                        </li> 
                    </ul> 
                </div> 
            </div> 
        </div> 
    </footer> 

    </>
  )
}
export default Home
