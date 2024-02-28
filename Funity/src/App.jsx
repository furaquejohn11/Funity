import { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

//images
import logo from './assets/images/funityLogoFinal.png';
import projImg from './assets/images/sdgGroupProjects.jpg';
import cleanEnergyImg from './assets/images/cleanEnergy.jpg';
import qualityEduc from './assets/images/qualityEduc.jpg';
import sustainableAgriImg from './assets/images/sustainableAgri.jpg';
import sustainableTranspoImg from './assets/images/sustainableTranspoImg.png';

export default function App() {

  const [display, setDisplay] = useState("none");

  function handleVideoError()
  {
    setDisplay("block");
  }

  return (
    <>
    

      <nav className="sn-navbar">
        <ul className="sn-navbar-nav">
            <li className="sn-logo">
                <a href="#" className="sn-nav-link">
                    <span className="sn-link-text">FUNITY</span>
                    <img src={logo} alt="sampleLogo" width="50px" height="50px" />
                </a>
            </li>

            <li className="sn-nav-item">
                <a href="#top" className="sn-nav-link">
                    <i className="fa-solid fa-house"></i>
                    <span className="sn-link-text">Home</span>
                </a>
            </li>

            <li className="sn-nav-item">
                <a href="#about" className="sn-nav-link">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <span className="sn-link-text">About</span>
                </a>
            </li>

            <li className="sn-nav-item">
                <a href="#projects" className="sn-nav-link">
                    <i className="fa-solid fa-list-check"></i>
                    <span className="sn-link-text">Projects</span>
                </a>
            </li>

            <li className="sn-nav-item">
                <a href="#promotionalVideos" className="sn-nav-link">
                    <i className="fa-solid fa-video"></i>
                    <span className="sn-link-text">Videos</span>
                </a>
            </li>

            <li className="sn-nav-item">
                <a href="#support" className="sn-nav-link">
                    <i className="fa-solid fa-leaf"></i>
                    <span className="sn-link-text">Support</span>
                </a>
            </li>

            <li className="sn-nav-item">
                <a href="#practical" className="sn-nav-link">
                    <i className="fa-solid fa-handshake-angle"></i>
                    <span className="sn-link-text">Examples</span>
                </a>
            </li>

            <li className="sn-nav-item">
                <a href="#connect" className="sn-nav-link">
                    <i className="fa-solid fa-newspaper"></i>
                    <span className="sn-link-text">Updates</span>
                </a>
            </li>

            <li className="sn-nav-item">
                <a href="#action" className="sn-nav-link">
                    <i className="fa-solid fa-person-running"></i>
                    <span className="sn-link-text">Act</span>
                </a>
            </li>

            <li className="sn-nav-item">
                <a href="#top" className="sn-nav-link sn-logout">
                    <i className="fa-solid fa-chevron-up"></i>
                    <span className="sn-link-text">Go Top</span>
                </a>
            </li>
        </ul>
      </nav>
    


      <main className="sn-main">

          <div>

            {/* home section */}
            <section className="w-full max-w-screen-xl mx-auto p-4 md:py-8" id="top">
              <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
                <div className="space-y-3">
                        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
                            Sustainable Development Goal 17
                        </h1>
                        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Strengthen the means of implementation and revitalize the global partnership for sustainable
                            development.
                        </p>
                  </div>

                  <div id="slider">
                        <input type="radio" name="slider" id="slide1" />
                        <input type="radio" name="slider" id="slide2" />
                        <input type="radio" name="slider" id="slide3" />
                        <input type="radio" name="slider" id="slide4" />
                        <input type="radio" name="slider" id="slide5" />
                        <input type="radio" name="slider" id="slide6" />
                        <input type="radio" name="slider" id="slide7" />
                        <input type="radio" name="slider" id="slide8" />
                        <input type="radio" name="slider" id="slide9" />
                        <input type="radio" name="slider" id="slide10" />
                        <input type="radio" name="slider" id="slide11" />
                        <input type="radio" name="slider" id="slide12" />
                        <input type="radio" name="slider" id="slide13" />
                        <input type="radio" name="slider" id="slide14" />
                        <input type="radio" name="slider" id="slide15" />
                        <input type="radio" name="slider" id="slide16" />
                        <input type="radio" name="slider" id="slide17" />

                        <div id="slides">
                          <div id="overflow">
                            <div className="inner">
                              <a href="https://www.undp.org/sustainable-development-goals/no-poverty?gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qBaxyFLRelP9RaiSiPsH8viOmcErSf76sTi02FPS6g5OfXmoiQlIVxoCDIcQAvD_BwE"
                                        target="_blank" className="slide slide_1">
                                    <div className="slide-content">
                                        <h2>GOAL 1</h2>
                                        
                                        <p className="title">NO POVERTY</p>
                                        
                                        <p className="desc">
                                            Aims to end poverty in all forms everywhere, promoting shared prosperity and
                                            social inclusion.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>

                                <a href="https://www.undp.org/sustainable-development-goals/zero-hunger?gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qBaxyFLRelP9RaiSiPsH8viOmcErSf76sTi02FPS6g5OfXmoiQlIVxoCDIcQAvD_BwE"
                                        target="_blank" className="slide slide_2">
                                    <div className="slide-content">
                                        <h2>GOAL 2</h2>
                                        
                                        <p className="title">ZERO HUNGER</p>
                                        
                                        <p className="desc">
                                            End hunger, achieve food security, improve nutrition, and promote sustainable agriculture.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>

                                <a href="https://www.undp.org/sustainable-development-goals/good-health?gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qBaxyFLRelP9RaiSiPsH8viOmcErSf76sTi02FPS6g5OfXmoiQlIVxoCDIcQAvD_BwE"
                                        target="_blank" className="slide slide_3">
                                    <div className="slide-content">
                                        <h2>GOAL 3</h2>
                                        
                                        <p className="title">good health and Well-being</p>
                                        
                                        <p className="desc">
                                            Ensure healthy lives and promote well-being for all ages.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>

                                <a href="https://www.undp.org/sustainable-development-goals/quality-education?gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qBaxyFLRelP9RaiSiPsH8viOmcErSf76sTi02FPS6g5OfXmoiQlIVxoCDIcQAvD_BwE"
                                        target="_blank" className="slide slide_4">
                                    <div className="slide-content">
                                        <h2>GOAL 4</h2>
                                        
                                        <p className="title">Quality Education</p>
                                        
                                        <p className="desc">
                                            Ensure inclusive and equitable quality education and promote lifelong learning opportunities.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>

                                <a href="https://www.undp.org/sustainable-development-goals/gender-equality?gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qBaxyFLRelP9RaiSiPsH8viOmcErSf76sTi02FPS6g5OfXmoiQlIVxoCDIcQAvD_BwE"
                                        target="_blank" className="slide slide_5">
                                    <div className="slide-content">
                                        <h2>GOAL 5</h2>
                                        
                                        <p className="title">Gender Equality</p>
                                        
                                        <p className="desc">
                                            Achieve gender equality and empower all women and girls.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>
                
                                <a href="https://www.undp.org/sustainable-development-goals/clean-water-and-sanitation?gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qBaxyFLRelP9RaiSiPsH8viOmcErSf76sTi02FPS6g5OfXmoiQlIVxoCDIcQAvD_BwE"
                                    target="_blank" className="slide slide_6">
                                    <div className="slide-content">
                                        <h2>GOAL 6</h2>
                                        
                                        <p className="title">Clean Water and Sanitation</p>
                                        
                                        <p className="desc">
                                            Ensure availability and sustainable management of water and sanitation for all.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>
                
                                <a href="https://www.undp.org/sustainable-development-goals/affordable-and-clean-energy?gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qBaxyFLRelP9RaiSiPsH8viOmcErSf76sTi02FPS6g5OfXmoiQlIVxoCDIcQAvD_BwE"
                                    target="_blank" className="slide slide_7">
                                    <div className="slide-content">
                                        <h2>GOAL 7</h2>
                                        
                                        <p className="title">Affordable and Clean Energy</p>
                                        
                                        <p className="desc">
                                            Ensure access to affordable, reliable, sustainable, and modern energy for all.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>
                
                                <a href="https://www.undp.org/sustainable-development-goals/decent-work-and-economic-growth?gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qBaxyFLRelP9RaiSiPsH8viOmcErSf76sTi02FPS6g5OfXmoiQlIVxoCDIcQAvD_BwE"
                                    target="_blank" className="slide slide_8">
                                    <div className="slide-content">
                                        <h2>GOAL 8</h2>
                                        
                                        <p className="title">Decent Work and Economic Growth</p>
                                        
                                        <p className="desc">
                                            Promote sustainable economic growth, productive
                                            employment, and decent work for all.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>
                
                                <a href="https://www.undp.org/sustainable-development-goals/industry-innovation-and-infrastructure?gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qBaxyFLRelP9RaiSiPsH8viOmcErSf76sTi02FPS6g5OfXmoiQlIVxoCDIcQAvD_BwE"
                                    target="_blank" className="slide slide_9">
                                    <div className="slide-content">
                                        <h2>GOAL 9</h2>
                                        
                                        <p className="title">Industry, Innovation, and Infrastructure</p>
                                        
                                        <p className="desc">
                                            Build resilient infrastructure, promote sustainable industrialization, and
                                            foster innovation.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>
                
                                <a href="https://www.undp.org/sustainable-development-goals/reduced-inequalities?gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qBaxyFLRelP9RaiSiPsH8viOmcErSf76sTi02FPS6g5OfXmoiQlIVxoCDIcQAvD_BwE"
                                    target="_blank" className="slide slide_10">
                                    <div className="slide-content">
                                        <h2>GOAL 10</h2>
                                        
                                        <p className="title">Reduced Inequalities</p>
                                        
                                        <p className="desc">
                                            Reduce inequality within and among countries.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>
                
                                <a href="https://www.undp.org/sustainable-development-goals/sustainable-cities-and-communities?gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qBaxyFLRelP9RaiSiPsH8viOmcErSf76sTi02FPS6g5OfXmoiQlIVxoCDIcQAvD_BwE"
                                    target="_blank" className="slide slide_11">
                                    <div className="slide-content">
                                        <h2>GOAL 11</h2>
                                        
                                        <p className="title">Sustainable Cities and Communities</p>
                                        
                                        <p className="desc">
                                            Make cities and human settlements inclusive, safe, resilient, and sustainable.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>
                
                                <a href="https://www.undp.org/sustainable-development-goals/responsible-consumption-and-production?gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qBaxyFLRelP9RaiSiPsH8viOmcErSf76sTi02FPS6g5OfXmoiQlIVxoCDIcQAvD_BwE"
                                    target="_blank" className="slide slide_12">
                                    <div className="slide-content">
                                        <h2>GOAL 12</h2>
                                        
                                        <p className="title">Responsible Consumption and Production</p>
                                        
                                        <p className="desc">
                                            Ensure sustainable consumption and production patterns.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>
                
                                <a href="https://www.undp.org/sustainable-development-goals/climate-action?gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qBaxyFLRelP9RaiSiPsH8viOmcErSf76sTi02FPS6g5OfXmoiQlIVxoCDIcQAvD_BwE"
                                    target="_blank" className="slide slide_13">
                                    <div className="slide-content">
                                        <h2>GOAL 13</h2>
                                        
                                        <p className="title">Climate Action</p>
                                        
                                        <p className="desc">
                                            Take urgent action to combat climate change and its impacts.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>
                
                                <a href="https://www.undp.org/sustainable-development-goals/below-water?gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qBaxyFLRelP9RaiSiPsH8viOmcErSf76sTi02FPS6g5OfXmoiQlIVxoCDIcQAvD_BwE"
                                    target="_blank" className="slide slide_14">
                                    <div className="slide-content">
                                        <h2>GOAL 14</h2>
                                        
                                        <p className="title">Life Below Water</p>
                                        
                                        <p className="desc">
                                            Sustainably use the oceans, seas, and marine resources for sustainable
                                            development.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>
                
                                <a href="https://www.undp.org/sustainable-development-goals/life-on-land?gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qBaxyFLRelP9RaiSiPsH8viOmcErSf76sTi02FPS6g5OfXmoiQlIVxoCDIcQAvD_BwE"
                                    target="_blank" className="slide slide_15">
                                    <div className="slide-content">
                                        <h2>GOAL 15</h2>
                                        
                                        <p className="title">Life on Land</p>
                                        
                                        <p className="desc">
                                            Protect, restore, and promote the use of sustainably manage forests, combat
                                            desertification, etc.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>
                
                                <a href="https://www.undp.org/sustainable-development-goals/peace-justice-and-strong-institutions?gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qBaxyFLRelP9RaiSiPsH8viOmcErSf76sTi02FPS6g5OfXmoiQlIVxoCDIcQAvD_BwE"
                                    target="_blank" className="slide slide_16">
                                    <div className="slide-content">
                                        <h2>GOAL 16</h2>
                                        
                                        <p className="title">Peace, Justice, and Strong Institutions</p>
                                        
                                        <p className="desc">
                                            Promote peaceful and inclusive societies for sustainable development.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>
                
                                <a href="https://www.undp.org/sustainable-development-goals/partnerships-for-the-goals?gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qBaxyFLRelP9RaiSiPsH8viOmcErSf76sTi02FPS6g5OfXmoiQlIVxoCDIcQAvD_BwE"
                                    target="_blank" className="slide slide_17">
                                    <div className="slide-content">
                                        <h2>GOAL 17</h2>
                                        
                                        <p className="title">Partnerships for the Goals</p>
                                        
                                        <p className="desc">
                                            Revitalize the global partnership for sustainable
                                            development.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>
                            </div>
                          </div>
                        </div>

                        <div id="controls">
                            <label htmlFor="slide1"></label>
                            <label htmlFor="slide2"></label>
                            <label htmlFor="slide3"></label>
                            <label htmlFor="slide4"></label>
                            <label htmlFor="slide5"></label>
                            <label htmlFor="slide6"></label>
                            <label htmlFor="slide7"></label>
                            <label htmlFor="slide8"></label>
                            <label htmlFor="slide9"></label>
                            <label htmlFor="slide10"></label>
                            <label htmlFor="slide11"></label>
                            <label htmlFor="slide12"></label>
                            <label htmlFor="slide13"></label>
                            <label htmlFor="slide14"></label>
                            <label htmlFor="slide15"></label>
                            <label htmlFor="slide16"></label>
                            <label htmlFor="slide17"></label>
                        </div>

                        <div id="bullets">
                            <label htmlFor="slide1"></label>
                            <label htmlFor="slide2"></label>
                            <label htmlFor="slide3"></label>
                            <label htmlFor="slide4"></label>
                            <label htmlFor="slide5"></label>
                            <label htmlFor="slide6"></label>
                            <label htmlFor="slide7"></label>
                            <label htmlFor="slide8"></label>
                            <label htmlFor="slide9"></label>
                            <label htmlFor="slide10"></label>
                            <label htmlFor="slide11"></label>
                            <label htmlFor="slide12"></label>
                            <label htmlFor="slide13"></label>
                            <label htmlFor="slide14"></label>
                            <label htmlFor="slide15"></label>
                            <label htmlFor="slide16"></label>
                            <label htmlFor="slide17"></label>
                        </div>
                  </div>
              </div>
            </section>



            {/* about section */}
            <section className="w-full max-w-screen-xl mx-auto p-4 md:py-8 m-top" id="about">
                <div
                    className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2 lg:text-left">
                    <div className="space-y-4 md:space-y-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About SDG-17</h2>
                            <p
                                className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                SDG-17 emphasizes the importance of global cooperation and sustainable development. It aims to
                                mobilize
                                resources, strengthen policies, and promote partnerships to achieve the sustainable development
                                goals.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto max-w-[400px] flex flex-col gap-4 md:items-start md:max-w-none md:gap-8 lg:gap-10">
                        <a href="https://populationmatters.org/un-sdgs/?gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qOMePiYA-XUGpFgHDZK6RDrb17NyBtV9k2WraqhojQyuQsz6b3rifhoC3YoQAvD_BwE" target="_blank" className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 px-8 text-sm font-medium shadow-sm transition-colors focus-visible:ring-1 text-black focus-visible:ring-gray-950 cursor-pointer transition duration-500 ease-in-out hover:scale-90 hover:bg-blue-600 hover:text-white">
                            Read More about SDG-17
                        </a>
                    </div>
                </div>
            </section>



            {/* <!-- projects section --> */}
            <section className="w-full max-w-screen-xl mx-auto p-4 md:py-8 m-top" id="projects">
                <div
                    className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2 lg:text-left">
                    <div className="space-y-4 md:space-y-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">SDG Success Stories: Inspiring Examples
                            </h2>
                            <p className="text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                                Explore Real-world Projects Making a Difference Across Sustainable Development Goals.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto max-w-[400px] flex flex-col gap-4 md:items-start md:max-w-none md:gap-8 lg:gap-10">
                        <a href="https://asiasociety.org/education/projects-organized-un-sustainable-development-goal" target="_blank" className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 px-8 text-sm font-medium shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-gray-950 text-black cursor-pointer transition duration-500 ease-in-out hover:scale-90 hover:bg-blue-600 hover:text-white">
                            View Organized Projects by United Nation SDG
                        </a>
                    </div>
                    <div className="grid w-full max-w-sm justify-self-center rounded-xl overflow-hidden shadow sm:max-w-none md:justify-self-end relative">
                        <img src={projImg} alt="Image" className="aspect-[4/3] object-cover object-center w-full h-full" height="400" width="600" />
                        <a href="https://www.flickr.com/photos/iaea_imagebank/26623151151" target="_blank" className="absolute bottom-2 right-2 bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">Click to view credits
                        </a>
                    </div>
                </div>
            </section>



            {/* <!-- promorional videos section --> */}
            <section className="m-top" id="promotionalVideos">
                <div className="container mx-auto py-12 px-4">
                    <h2 className="text-3xl font-bold text-center mb-6">SDG Insights: Videos on Sustainable Development Goals</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="ratio ratio-14x9">
                          <div className="bg-[#161616] rounded-lg shadow-lg relative">
                              <iframe src="https://www.youtube.com/embed/oKnudpPa8lQ?si=z4TNxcOOV2uy70T5" title="SDG Digital Day" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen 
                              className='w-100 h-48 rounded-top-lg" style="width: 100%; height: 12rem; aspect-ratio: 600 / 300; object-fit: cover;'
                              onError={handleVideoError}></iframe>
                              <div className="p-4 bg-[#161616] mb-10">
                                  <h3 className="text-lg font-bold mb-2 text-white">SDG Digital Day</h3>
                                  <p className="text-gray-500">
                                      Explore the forefront of sustainable development with ITU&apos;s SDG Digital Day video, delving into innovative tech
                                      solutions driving global progress. Join thought leaders and experts as they discuss leveraging digital tools to tackle
                                      pressing challenges and achieve the Sustainable Development Goals.
                                  </p>
                                  <h1 style={{color:'red', display:display}}>SOMETHING WENT WRONG: Video failed to load</h1>
                                  <a href="https://www.youtube.com/watch?v=oKnudpPa8lQ&t=3s"
                                      target="_blank"
                                      className="absolute bottom-0 mb-4 right-2 bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">
                                      Click to view credits
                                  </a>
                              </div>
                          </div>
                        </div>
                        <div className="ratio ratio-14x9">
                          <div className="bg-[#161616] rounded-lg shadow-lg relative">
                              <iframe src="https://www.youtube.com/embed/7V8oFI4GYMY?si=AKMgXLmAVyHHVEb0" title="SDG Digital Day" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen 
                              className='w-100 h-48 rounded-top-lg" style="width: 100%; height: 12rem; aspect-ratio: 600 / 300; object-fit: cover;'></iframe>
                              <div className="p-4 bg-[#161616] mb-10">
                                  <h3 className="text-lg font-bold mb-2 text-white">What is sustainable development?</h3>
                                  <p className="text-gray-500">
                                      Dive into the core principles and practices of sustainable development with FN-sambandet Norge&apos;s insightful video. Learn
                                      how individuals and communities can contribute to a greener, more equitable future by embracing sustainable living and
                                      fostering environmental stewardship.
                                  </p>
                                  <h1 style={{color:'red', display:display}}>SOMETHING WENT WRONG: Video failed to load</h1>
                                  <a href="https://www.youtube.com/watch?v=7V8oFI4GYMY&t=8s"
                                      target="_blank"
                                      className="absolute bottom-0 mb-4 right-2 bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">
                                      Click to view credits
                                  </a>
                              </div>
                          </div>
                        </div>
                        <div className="ratio ratio-14x9">
                          <div className="bg-[#161616] rounded-lg shadow-lg relative">
                              <iframe src="https://www.youtube.com/embed/BLmTnH57HKg?si=RwWWdvL8Al5e-cES" title="SDG Digital Day" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen 
                              className='w-100 h-48 rounded-top-lg" style="width: 100%; height: 12rem; aspect-ratio: 600 / 300; object-fit: cover;'></iframe>
                              <div className="p-4 bg-[#161616] mb-10">
                                  <h3 className="text-lg font-bold mb-2 text-white">169 targets of the #SDGs</h3>
                                  <p className="text-gray-500">
                                      Embark on a journey through the 169 targets of the Sustainable Development Goals (SDGs) in this enlightening video by
                                      Andeel Ali. Through clever animation and insightful narration, Ali breaks down each target, shedding light on the global
                                      efforts towards achieving a more prosperous, equitable, and sustainable world.
                                  </p>
                                  <h1 style={{color:'red', display:display}}>SOMETHING WENT WRONG: Video failed to load</h1>
                                  <a href="https://www.youtube.com/watch?v=BLmTnH57HKg&t=3s"
                                      target="_blank"
                                      className="absolute bottom-0 mb-4 right-2 bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">
                                      Click to view credits
                                  </a>
                              </div>
                          </div>
                        </div>  
                    </div>
                </div>
            </section>



            {/* <!-- how to support sdg section --> */}
            <section className="w-full max-w-screen-xl mx-auto p-4 md:py-8 m-top" id="support">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col gap-2">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                Get Involved
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Supporting the SDGs
                            </h2>
                            <p
                                className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Practical examples of how you can contribute to the Sustainable
                                Development Goals in your community and beyond.
                            </p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="flex flex-col gap-1 relative">
                                <img src={sustainableTranspoImg} alt="sustainableTranspoPhoto" width="600" height="400"
                                    className="rounded-lg object-cover aspect-[4/3] overflow-hidden" />
                                <a href="https://commons.wikimedia.org/wiki/File:United_Nations_sustainable_development_goal_11.2_sustainable_transport.png" target="_blank"
                                    className="absolute bottom-20 mb-4 right-2 bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">
                                    Click to view credits
                                </a>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-xl font-semibold">
                                        Sustainable Transportation
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Promoting the use of bicycles and electric vehicles to reduce
                                        carbon emissions and improve air quality.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 relative">
                                <img src={sustainableAgriImg} alt="sustainableAgriImg" width="600" height="400"
                                    className="rounded-lg object-cover aspect-[4/3] overflow-hidden" />
                                <a href="https://www.merit.unu.edu/the-hidden-cost/"
                                    target="_blank"
                                    className="absolute bottom-20 mb-4 right-2 bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">
                                    Photo by Lance Cheung (Click to view credits)
                                </a>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-xl font-semibold">
                                        Sustainable Agriculture
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Supporting local farmers and promoting organic farming
                                        practices to ensure food security and protect the
                                        environment.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 relative">
                                <img src={qualityEduc} alt="qualityEducImg" width="600" height="400"
                                    className="rounded-lg object-cover aspect-[4/3] overflow-hidden" />
                                <a href="https://www.flickr.com/photos/asiandevelopmentbank/21431207238" target="_blank"
                                    className="absolute bottom-20 mb-4 right-2 bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">
                                    Click to view credit
                                </a>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-xl font-semibold">
                                        Quality Education
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Volunteering to teach children in underserved communities and
                                        advocating for inclusive and equitable education for all.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 relative">
                                <img src={cleanEnergyImg} alt="cleanEnergyImg" width="600" height="400"
                                    className="rounded-lg object-cover aspect-[4/3] overflow-hidden" />
                                <a href="https://www.flickr.com/photos/asiandevelopmentbank/21431017820" target="_blank"
                                    className="absolute bottom-20 mb-4 right-2 bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">
                                    Click to view credit
                                </a>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-xl font-semibold">
                                        Clean Energy Innovation
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Supporting research and development of renewable energy
                                        technologies and advocating for policies that promote the
                                        transition to clean energy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* <!-- practical examples section --> */}
            <section className="w-full max-w-screen-xl mx-auto p-4 md:py-8 m-top" id="practical">
                <div className="container px-4 space-y-6 text-center md:space-y-10 md:px-6 lg:space-y-12">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How you can help</h2>
                        <p
                            className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Practical examples of how you can contribute to the Sustainable Development Goals.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-12">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">1. No Poverty</h3>
                            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                                Volunteer at a local shelter or food bank. Support organizations that provide microfinance services
                                to
                                entrepreneurs in low-income communities.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">2. Zero Hunger</h3>
                            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                                Reduce food waste by supporting initiatives that collect surplus food from restaurants and grocery
                                stores
                                to distribute to those in need.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">3. Good Health and Well-being</h3>
                            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                                Promote healthy lifestyles in your community by organizing fitness classes, health workshops, or
                                mental
                                health awareness events.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">4. Quality Education</h3>
                            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                                Mentor students, especially those from disadvantaged backgrounds, to help them stay engaged in
                                learning
                                and encourage them to pursue higher education.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">5. Gender Equality</h3>
                            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                                Support organizations that provide education and training to empower women and girls, advocate for
                                policies that promote gender equality in the workplace and beyond.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">6. Clean Water and Sanitation</h3>
                            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                                Participate in beach or river clean-up projects, raise awareness about water conservation, and
                                support
                                initiatives that provide access to clean water in underserved communities.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">7. Affordable and Clean Energy</h3>
                            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                                Advocate for renewable energy policies in your community, promote energy efficiency, and support the
                                adoption of sustainable energy solutions.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">8. Decent Work and Economic Growth</h3>
                            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                                Support small businesses and entrepreneurs, advocate for policies that promote job creation and
                                provide
                                training and skills development opportunities for youth and adults.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">9. Industry, Innovation, and Infrastructure</h3>
                            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                                Support initiatives that promote technological innovation and entrepreneurship, advocate for
                                investment in
                                sustainable infrastructure, and participate in programs that bridge the digital divide.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">10. Reduced Inequality</h3>
                            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                                Advocate for policies that address discrimination and inequality, support organizations that provide
                                social services to marginalized communities, and raise awareness about the impact of inequality on
                                society.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">11. Sustainable Cities and Communities</h3>
                            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                                Participate in urban greening projects, promote sustainable transportation options, and support
                                initiatives that make cities more inclusive, safe, and resilient.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">12. Responsible Consumption and Production</h3>
                            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                                Reduce your ecological footprint by practicing waste reduction, recycling, and upcycling, support
                                businesses that adopt sustainable practices, and advocate for circular economy principles.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">13. Climate Action</h3>
                            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                                Take action to reduce greenhouse gas emissions in your community, support reforestation and
                                conservation
                                efforts, advocate for climate-resilient policies, and raise awareness about the urgency of climate
                                change.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">14. Life Below Water</h3>
                            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                                Participate in beach or river clean-up projects, support marine conservation efforts, reduce plastic
                                pollution, and raise awareness about the importance of preserving ocean ecosystems.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">15. Life on Land</h3>
                            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                                Support reforestation and habitat restoration projects, engage in biodiversity conservation efforts,
                                raise
                                awareness about wildlife protection, and promote sustainable land management practices.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">16. Peace and Justice Strong Institutions</h3>
                            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                                Advocate for human rights, access to justice, and the rule of law, support initiatives that promote
                                social
                                cohesion and conflict resolution, and engage in peacebuilding efforts in your community.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">17. Partnerships for the Goals</h3>
                            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                                Collaborate with local organizations, businesses, and government agencies to advance the SDGs,
                                support
                                cross-sectoral partnerships, and advocate for multi-stakeholder cooperation to achieve sustainable
                                development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* <!-- stay connected section --> */}
            <section className="w-full max-w-screen-xl mx-auto p-4 md:py-8 m-top" id="connect">
                <div className="container flex flex-col items-center justify-center space-y-4 px-4 text-center md:space-y-8 md:px-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Stay Updated on SDG
                        </h2>
                        <p
                            className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Get the latest news and updates on Sustainable Development Goals (SDGs), join our community, and stay
                            informed about our initiatives.
                        </p>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <a className="flex h-9 items-center rounded-md border border-gray-200 border-gray-200 bg-[#0d0e14] px-4 py-2 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                            href="https://sdgs.un.org/news" target="_blank">
                            <i className="fa-solid fa-newspaper"></i>
                            News Updates
                        </a>
                        <a
                            className="flex h-9 items-center rounded-md border border-gray-200 border-gray-200 bg-[#0d0e14] px-4 py-2 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                            href="#notFound" target="_blank">
                            <i className="fa-solid fa-group-arrows-rotate"></i>
                            Community
                        </a><a
                            className="flex h-9 items-center rounded-md border border-gray-200 border-gray-200 bg-[#0d0e14] px-4 py-2 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                            href="https://unstats.un.org/sdgs/report/2023/" target="_blank">
                            <i className="fa-solid fa-square-pen"></i>
                            SDG Updates
                        </a></div>
                </div>
            </section>



            {/* <!-- take action section --> */}
            <section className="w-full max-w-screen-xl mx-auto p-4 md:py-8 m-top" id="action">
                <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Take Action</h2>
                        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            You can make a difference. Join the global effort to support SDG-17.
                        </p>
                    </div>
                    <div className="mx-auto max-w-[400px] flex flex-col gap-4 md:items-start md:max-w-none md:gap-8 lg:gap-10">
                        <a href="https://populationmatters.org/un-sdgs/?gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qOMePiYA-XUGpFgHDZK6RDrb17NyBtV9k2WraqhojQyuQsz6b3rifhoC3YoQAvD_BwE"
                            target="_blank"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 px-8 text-sm font-medium shadow-sm transition-colors focus-visible:ring-1 text-black focus-visible:ring-gray-950 cursor-pointer transition duration-500 ease-in-out hover:scale-90 hover:bg-blue-600 hover:text-white">
                            Get Involved
                        </a>
                    </div>
                </div>
            </section>



            {/* <!-- footer --> */}
            <footer className="rounded-lg shadow m-top">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 mt-20">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="h-12" alt="FUNITY Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FUNITY</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a
                            href="https://flowbite.com/" className="hover:underline">FUNITY - Uniting for a Future of Sustainability</a>. All Rights Reserved.</span>
                </div>
            </footer>

          </div>

      </main>

    
    </>
  )
}
          