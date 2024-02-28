import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

//images
import logo from './assets/images/funityLogoFinal.png';
import projImg from './assets/images/sdgGroupProjects.jpg';
import cleanEnergyImg from './assets/images/cleanEnergy.jpg';
import qualityEduc from './assets/images/qualityEduc.jpg';
import sustainableAgriImg from './assets/images/sustainableAgri.jpg';
import sustainableTranspoImg from './assets/images/sustainableTranspoImg.png';
import goal1Img from './assets/images/goal1Img.jpg';
import goal2Img from './assets/images/goal2Img.jpg';
import goal3Img from './assets/images/goal3Img.jpg';
import goal4Img from './assets/images/goal4Img.jpg';
import goal5Img from './assets/images/goal5Img.jpg';
import goal6Img from './assets/images/goal6Img.jpg';
import goal7Img from './assets/images/goal7Img.jpg';
import goal8Img from './assets/images/goal8Img.jpg';
import goal9Img from './assets/images/goal9Img.jpg';
import goal10Img from './assets/images/goal10Img.jpg';
import goal11Img from './assets/images/goal11Img.jpg';
import goal12Img from './assets/images/goal12Img.jpg';
import goal13Img from './assets/images/goal13Img.jpg';
import goal14Img from './assets/images/goal14Img.jpg';
import goal15Img from './assets/images/goal15Img.jpg';
import goal16Img from './assets/images/goal16Img.jpg';
import goal17Img from './assets/images/goal17Img.jpg';
import firstVid from './assets/images/firstVid.png';
import secondVid from './assets/images/secondVid.png';
import thirdVid from './assets/images/thirdVid.png';

export default function App() {

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
                              <a href="#goal-1"
                                         className="slide slide_1">
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

                                <a href="#goal-2"
                                         className="slide slide_2">
                                    <div className="slide-content">
                                        <h2>GOAL 2</h2>
                                        
                                        <p className="title">ZERO HUNGER</p>
                                        
                                        <p className="desc">
                                            End hunger, achieve food security, improve nutrition, and promote sustainable agriculture.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>

                                <a href="#goal-3"
                                         className="slide slide_3">
                                    <div className="slide-content">
                                        <h2>GOAL 3</h2>
                                        
                                        <p className="title">good health and Well-being</p>
                                        
                                        <p className="desc">
                                            Ensure healthy lives and promote well-being for all ages.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>

                                <a href="#goal-4"
                                         className="slide slide_4">
                                    <div className="slide-content">
                                        <h2>GOAL 4</h2>
                                        
                                        <p className="title">Quality Education</p>
                                        
                                        <p className="desc">
                                            Ensure inclusive and equitable quality education and promote lifelong learning opportunities.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>

                                <a href="#goal-5"
                                         className="slide slide_5">
                                    <div className="slide-content">
                                        <h2>GOAL 5</h2>
                                        
                                        <p className="title">Gender Equality</p>
                                        
                                        <p className="desc">
                                            Achieve gender equality and empower all women and girls.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>
                
                                <a href="#goal-6"
                                     className="slide slide_6">
                                    <div className="slide-content">
                                        <h2>GOAL 6</h2>
                                        
                                        <p className="title">Clean Water and Sanitation</p>
                                        
                                        <p className="desc">
                                            Ensure availability and sustainable management of water and sanitation for all.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>
                
                                <a href="#goal-7"
                                     className="slide slide_7">
                                    <div className="slide-content">
                                        <h2>GOAL 7</h2>
                                        
                                        <p className="title">Affordable and Clean Energy</p>
                                        
                                        <p className="desc">
                                            Ensure access to affordable, reliable, sustainable, and modern energy for all.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>
                
                                <a href="#goal-8"
                                     className="slide slide_8">
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
                
                                <a href="#goal-9"
                                     className="slide slide_9">
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
                
                                <a href="#goal-10"
                                     className="slide slide_10">
                                    <div className="slide-content">
                                        <h2>GOAL 10</h2>
                                        
                                        <p className="title">Reduced Inequalities</p>
                                        
                                        <p className="desc">
                                            Reduce inequality within and among countries.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>
                
                                <a href="#goal-11"
                                     className="slide slide_11">
                                    <div className="slide-content">
                                        <h2>GOAL 11</h2>
                                        
                                        <p className="title">Sustainable Cities and Communities</p>
                                        
                                        <p className="desc">
                                            Make cities and human settlements inclusive, safe, resilient, and sustainable.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>
                
                                <a href="#goal-12"
                                     className="slide slide_12">
                                    <div className="slide-content">
                                        <h2>GOAL 12</h2>
                                        
                                        <p className="title">Responsible Consumption and Production</p>
                                        
                                        <p className="desc">
                                            Ensure sustainable consumption and production patterns.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>
                
                                <a href="#goal-13"
                                     className="slide slide_13">
                                    <div className="slide-content">
                                        <h2>GOAL 13</h2>
                                        
                                        <p className="title">Climate Action</p>
                                        
                                        <p className="desc">
                                            Take urgent action to combat climate change and its impacts.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>
                
                                <a href="#goal-14"
                                     className="slide slide_14">
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
                
                                <a href="#goal-15"
                                     className="slide slide_15">
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
                
                                <a href="#goal-16"
                                     className="slide slide_16">
                                    <div className="slide-content">
                                        <h2>GOAL 16</h2>
                                        
                                        <p className="title">Peace, Justice, and Strong Institutions</p>
                                        
                                        <p className="desc">
                                            Promote peaceful and inclusive societies for sustainable development.
                                        </p>
                                        
                                        <button>READ MORE</button>
                                    </div>
                                </a>
                
                                <a href="#goal-17"
                                     className="slide slide_17">
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
                        <a href="#about-sdg-goal" className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 px-8 text-sm font-medium shadow-sm transition-colors focus-visible:ring-1 text-black focus-visible:ring-gray-950 cursor-pointer transition duration-500 ease-in-out hover:scale-90 hover:bg-blue-600 hover:text-white">
                            Read More about SDG-17
                        </a>
                    </div>
                </div>
            </section>


            {/* sdg 17 goal */}
            <section className="w-full max-w-screen-xl mx-auto p-4 md:py-8 m-top" id="about-sdg-goal">
                <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sustainable Development Goals</h2>
                        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            The 17 Sustainable Development Goals are the world&apos;s best plan to build a better world for people and our planet by 2030. Adopted by all United Nations Member States in 2015, the SDGs are a call for action by all countries - poor, rich and middle-income - to promote prosperity while protecting the environment. They recognize that ending poverty and other deprivations must go hand-in-hand with strategies that improve health and education, reduce inequality, and spur economic growth, all while tackling climate change and working to preserve our oceans and forests.
                        </p>
                    </div>
                </div>
            </section>

            


            {/* 17 sdg descriptions */}
            {/* goal 1 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top -med" id='goal-1'>
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Goal 1: NO POVERTY
                            </h2>
                        </div>
                        <div className="prose prose-gray mx-auto max-w-none">
                            <p>
                                The first goal of the SDGs is to end poverty in all its forms
                                everywhere. This includes extreme poverty, where people live on
                                less than $1.90 a day, as well as relative poverty, where people
                                lack access to basic necessities such as food, clean water, and
                                shelter. Achieving this goal requires a comprehensive approach
                                that addresses the root causes of poverty, including
                                unemployment, inequality, and lack of access to education and
                                healthcare.
                                </p>
                            <p>
                                To achieve this goal, countries need to implement social
                                protection programs that provide support to the most vulnerable
                                populations, as well as policies that promote inclusive economic
                                growth and create opportunities for all. In addition, efforts
                                are needed to ensure that all people have access to quality
                                education and healthcare, which are essential for breaking the
                                cycle of poverty.
                                </p>
                            <p>
                                Progress towards this goal is measured by the proportion of
                                people living below the international poverty line, as well as
                                the extent to which countries have implemented policies and
                                programs to reduce poverty and inequality. While significant
                                progress has been made in recent years, with the global poverty
                                rate falling to its lowest level on record, much more needs to be
                                done to eradicate poverty and ensure that everyone can enjoy a
                                decent standard of living.
                            </p>
                        </div>
                    </div>
                    <div className="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-1">
                        <div className="mx-auto w-full rounded-lg overflow-hidden aspect-video dark:aspect-none relative">
                            <img src={goal1Img} width="100%" height="400" alt="Goal 1: No Poverty" className="aspect-[3/2] object-cover rounded-lg overflow-hidden" />
                            <a href="#externalLinkProhibited" className="absolute bottom-0 right-[25%] bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">Photo by Asian Development Bank (CC Licensed)
                            </a>
                        </div>
                    </div>        
                </div>
            </section>
            {/* goal 2 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-2'>
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Goal 2: ZERO HUNGER
                            </h2>
                        </div>
                        <div className="prose prose-gray mx-auto max-w-none">
                            <p>
                                The number of undernourished people has dropped by almost half in the past two decades because of rapid economic growth and increased agricultural productivity. Many developing countries that used to suffer from famine and hunger can now meet their nutritional needs. Central and East Asia, Latin America and the Caribbean have all made huge progress in eradicating extreme hunger.
                            </p>
                            <p>
                                Unfortunately, extreme hunger and malnutrition remain a huge barrier to development in many countries. There are 821 million people estimated to be chronically undernourished as of 2017, often as a direct consequence of environmental degradation, drought and biodiversity loss. Over 90 million children under five are dangerously underweight. Undernourishment and severe food insecurity appear to be increasing in almost all regions of Africa, as well as in South America.
                            </p>
                        </div>
                    </div>
                    <div className="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-1">
                        <div className="mx-auto w-full rounded-lg overflow-hidden aspect-video dark:aspect-none relative">
                            <img src={goal2Img} width="100%" height="400" alt="Goal 2: Zero Hunger" className="aspect-[3/2] object-cover rounded-lg overflow-hidden" />
                            <a href="#externalLinkProhibited" className="absolute bottom-0 right-[25%] bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">Photo by Asian Development Bank (CC Licensed)
                            </a>
                        </div>
                    </div>        
                </div>
            </section>
            {/* goal 3 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-3'>
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Goal 3: GOOD HEALTH AND WELL-BEING
                            </h2>
                        </div>
                        <div className="prose prose-gray mx-auto max-w-none">
                            <p>
                                We have made great progress against several leading causes of death and disease. Life expectancy has increased dramatically; infant and maternal mortality rates have declined, we have turned the tide on HIV and malaria deaths have halved.
                            </p>
                            <p>
                                Good health is essential to sustainable development and the 2030 Agenda reflects the complexity and interconnectedness of the two. It takes into account widening economic and social inequalities, rapid urbanization, threats to the climate and the environment, the continuing burden of HIV and other infectious diseases, and emerging challenges such as noncommunicable diseases. Universal health coverage will be integral to achieving SDG 3, ending poverty and reducing inequalities. Emerging global health priorities not explicitly included in the SDGs, including antimicrobial resistance, also demand action.
                            </p>
                        </div>
                    </div>
                    <div className="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-1">
                        <div className="mx-auto w-full rounded-lg overflow-hidden aspect-video dark:aspect-none relative">
                            <img src={goal3Img} width="100%" height="400" alt="Goal 3: Good Health and Well-being" className="aspect-[3/2] object-cover rounded-lg overflow-hidden" />
                            <a href="#externalLinkProhibited" className="absolute bottom-0 right-[25%] bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">Photo by Asian Development Bank (CC Licensed) </a>
                        </div>
                    </div>        
                </div>
            </section>
            {/* goal 4 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-4'>
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Goal 4: QUALITY EDUCATION
                            </h2>
                        </div>
                        <div className="prose prose-gray mx-auto max-w-none">
                            <p>
                                Ending all discrimination against women and girls is not only a basic human right, it is crucial for sustainable future; it is proven that empowering women and girls helps economic growth and development.

                                UNDP has made gender equality central to its work and we have seen remarkable progress in the past 20 years. There are more girls in school now compared to 15 years ago, and most regions have reached gender parity in primary education.
                            </p>
                        </div>
                    </div>
                    <div className="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-1">
                        <div className="mx-auto w-full rounded-lg overflow-hidden aspect-video dark:aspect-none relative">
                            <img src={goal4Img} width="100%" height="400" alt="Goal 4: QUALITY EDUCATION" className="aspect-[3/2] object-cover rounded-lg overflow-hidden" />
                            <a href="#externalLinkProhibited" className="absolute bottom-0 right-[25%] bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">Photo by Asian Development Bank (CC Licensed) </a>
                        </div>
                    </div>        
                </div>
            </section>
            {/* goal 5 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-5'>
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Goal 5: GENDER EQUALITY
                            </h2>
                        </div>
                        <div className="prose prose-gray mx-auto max-w-none">
                            <p>
                                Since 2000, there has been enormous progress in achieving the target of universal primary education. The total enrollment rate in developing regions reached 91 percent in 2015, and the worldwide number of children out of school has dropped by almost half. There has also been a dramatic increase in literacy rates, and many more girls are in school than ever before. These are all remarkable successes.
                            </p>
                            <p>
                                Progress has also been tough in some developing regions due to high levels of poverty, armed conflicts and other emergencies. In Western Asia and North Africa, ongoing armed conflict has seen an increase in the number of children out of school. This is a worrying trend. While Sub-Saharan Africa made the greatest progress in primary school enrollment among all developing regions from 52 percent in 1990, up to 78 percent in 2012 large disparities still remain. Children from the poorest households are up to four times more likely to be out of school than those of the richest households. Disparities between rural and urban areas also remain high.
                            </p>
                        </div>
                    </div>
                    <div className="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-1">
                        <div className="mx-auto w-full rounded-lg overflow-hidden aspect-video dark:aspect-none relative">
                            <img src={goal5Img} width="100%" height="400" alt="Goal 5: GENDER EQUALITY" className="aspect-[3/2] object-cover rounded-lg overflow-hidden" />
                            <a href="#externalLinkProhibited" className="absolute bottom-0 right-[25%] bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">Photo by Asian Development Bank (CC Licensed) </a>
                        </div>
                    </div>        
                </div>
            </section>
            {/* goal 6 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-6'>
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Goal 6: CLEAN WATER AND SANITATION
                            </h2>
                        </div>
                        <div className="prose prose-gray mx-auto max-w-none">
                            <p>
                                Water scarcity affects more than 40 percent of people, an alarming figure that is projected to rise as temperatures do. Although 2.1 billion people have improved water sanitation since 1990, dwindling drinking water supplies are affecting every continent.

                                More and more countries are experiencing water stress, and increasing drought and desertification is already worsening these trends. By 2050, it is projected that at least one in four people will suffer recurring water shortages.
                            </p>
                        </div>
                    </div>
                    <div className="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-1">
                        <div className="mx-auto w-full rounded-lg overflow-hidden aspect-video dark:aspect-none relative">
                            <img src={goal6Img} width="100%" height="400" alt="Goal 6: CLEAN WATER AND SANITATION" className="aspect-[3/2] object-cover rounded-lg overflow-hidden" />
                            <a href="#externalLinkProhibited" className="absolute bottom-0 right-[25%] bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">Photo by Asian Development Bank (CC Licensed) </a>
                        </div>
                    </div>        
                </div>
            </section>
            {/* goal 7 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-7'>
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Goal 7: AFFORDABLE AND CLEAN ENERGY
                            </h2>
                        </div>
                        <div className="prose prose-gray mx-auto max-w-none">
                            <p>
                                Between 2000 and 2018, the number of people with electricity increased from 78 to 90 percent, and the numbers without electricity dipped to 789 million.

                                Yet as the population continues to grow, so will the demand for cheap energy, and an economy reliant on fossil fuels is creating drastic changes to our climate.
                            </p>
                        </div>
                    </div>
                    <div className="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-1">
                        <div className="mx-auto w-full rounded-lg overflow-hidden aspect-video dark:aspect-none relative">
                            <img src={goal7Img} width="100%" height="400" alt="Goal 7: AFFORDABLE AND CLEAN ENERGY" className="aspect-[3/2] object-cover rounded-lg overflow-hidden" />
                            <a href="#externalLinkProhibited" className="absolute bottom-0 right-[25%] bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">Photo by Asian Development Bank (CC Licensed) </a>
                        </div>
                    </div>        
                </div>
            </section>
            {/* goal 8 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-8'>
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Goal 8: DECENT WORK AND ECONOMIC GROWTH
                            </h2>
                        </div>
                        <div className="prose prose-gray mx-auto max-w-none">
                            <p>
                                Over the past 25 years the number of workers living in extreme poverty has declined dramatically, despite the lasting impact of the 2008 economic crisis and global recession. In developing countries, the middle class now makes up more than 34 percent of total employment a number that has almost tripled between 1991 and 2015.

                                However, as the global economy continues to recover we are seeing slower growth, widening inequalities, and not enough jobs to keep up with a growing labour force. According to the International Labour Organization, more than 204 million people were unemployed in 2015.
                            </p>
                        </div>
                    </div>
                    <div className="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-1">
                        <div className="mx-auto w-full rounded-lg overflow-hidden aspect-video dark:aspect-none relative">
                            <img src={goal8Img} width="100%" height="400" alt="Goal 8: DECENT WORK AND ECONOMIC GROWTH" className="aspect-[3/2] object-cover rounded-lg overflow-hidden" />
                            <a href="#externalLinkProhibited" className="absolute bottom-0 right-[25%] bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">Photo by Asian Development Bank (CC Licensed) </a>
                        </div>
                    </div>        
                </div>
            </section>
            {/* goal 9 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-9'>
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Goal 9: INDUSTRY, INNOVATION AND INFRASTRUCTURE
                            </h2>
                        </div>
                        <div className="prose prose-gray mx-auto max-w-none">
                            <p>
                                Investment in infrastructure and innovation are crucial drivers of economic growth and development. With over half the world population now living in cities, mass transport and renewable energy are becoming ever more important, as are the growth of new industries and information and communication technologies.

                                Technological progress is also key to finding lasting solutions to both economic and environmental challenges, such as providing new jobs and promoting energy efficiency. Promoting sustainable industries, and investing in scientific research and innovation, are all important ways to facilitate sustainable development.
                            </p>
                        </div>
                    </div>
                    <div className="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-1">
                        <div className="mx-auto w-full rounded-lg overflow-hidden aspect-video dark:aspect-none relative">
                            <img src={goal9Img} width="100%" height="400" alt="Goal 9: INDUSTRY, INNOVATION AND INFRASTRUCTURE" className="aspect-[3/2] object-cover rounded-lg overflow-hidden" />
                            <a href="#externalLinkProhibited" className="absolute bottom-0 right-[25%] bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">Photo by Asian Development Bank (CC Licensed) </a>
                        </div>
                    </div>        
                </div>
            </section>
            {/* goal 10 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-10'>
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Goal 10: REDUCED INEQUALITIES
                            </h2>
                        </div>
                        <div className="prose prose-gray mx-auto max-w-none">
                            <p>
                                Income inequality is on the rise—the richest 10 percent have up to 40 percent of global income whereas the poorest 10 percent earn only between 2 to 7 percent. If we take into account population growth inequality in developing countries, inequality has increased by 11 percent.

                                Income inequality has increased in nearly everywhere in recent decades, but at different speeds. It’s lowest in Europe and highest in the Middle East.
                            </p>
                        </div>
                    </div>
                    <div className="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-1">
                        <div className="mx-auto w-full rounded-lg overflow-hidden aspect-video dark:aspect-none relative">
                            <img src={goal10Img} width="100%" height="400" alt="Goal 10: REDUCED INEQUALITIES" className="aspect-[3/2] object-cover rounded-lg overflow-hidden" />
                            <a href="#externalLinkProhibited" className="absolute bottom-0 right-[25%] bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">Photo by Asian Development Bank (CC Licensed) </a>
                        </div>
                    </div>        
                </div>
            </section>
            {/* goal 11 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-11'>
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Goal 11: SUSTAINABLE CITIES AND COMMUNITIES
                            </h2>
                        </div>
                        <div className="prose prose-gray mx-auto max-w-none">
                            <p>
                                More than half of us  live in cities. By 2050, two-thirds of all humanity—6.5 billion people—will be urban. Sustainable development cannot be achieved without significantly transforming the way we build and manage our urban spaces.

                                The rapid growth of cities—a result of rising populations and increasing migration—has led to a boom in mega-cities, especially in the developing world, and slums are becoming a more significant feature of urban life.
                            </p>
                        </div>
                    </div>
                    <div className="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-1">
                        <div className="mx-auto w-full rounded-lg overflow-hidden aspect-video dark:aspect-none relative">
                            <img src={goal11Img} width="100%" height="400" alt="Goal 11: SUSTAINABLE CITIES AND COMMUNITIES" className="aspect-[3/2] object-cover rounded-lg overflow-hidden" />
                            <a href="#externalLinkProhibited" className="absolute bottom-0 right-[25%] bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">Photo by Asian Development Bank (CC Licensed) </a>
                        </div>
                    </div>        
                </div>
            </section>
            {/* goal 12 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-12'>
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Goal 12: RESPONSIBLE CONSUMPTION AND PRODUCTION
                            </h2>
                        </div>
                        <div className="prose prose-gray mx-auto max-w-none">
                            <p>
                                Achieving economic growth and sustainable development requires that we urgently reduce our ecological footprint by changing the way we produce and consume goods and resources. Agriculture is the biggest user of water worldwide, and irrigation now claims close to 70 percent of all freshwater for human use.

                                The efficient management of our shared natural resources, and the way we dispose of toxic waste and pollutants, are important targets to achieve this goal. Encouraging industries, businesses and consumers to recycle and reduce waste is equally important, as is supporting developing countries to move towards more sustainable patterns of consumption by 2030.
                            </p>
                        </div>
                    </div>
                    <div className="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-1">
                        <div className="mx-auto w-full rounded-lg overflow-hidden aspect-video dark:aspect-none relative">
                            <img src={goal12Img} width="100%" height="400" alt="Goal 12: RESPONSIBLE CONSUMPTION AND PRODUCTION" className="aspect-[3/2] object-cover rounded-lg overflow-hidden" />
                            <a href="#externalLinkProhibited" className="absolute bottom-0 right-[25%] bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">Photo by Asian Development Bank (CC Licensed) </a>
                        </div>
                    </div>        
                </div>
            </section>
            {/* goal 13 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-13'>
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Goal 13: CLIMATE ACTION
                            </h2>
                        </div>
                        <div className="prose prose-gray mx-auto max-w-none">
                            <p>
                                There is no country that is not experiencing the drastic effects of climate change. Greenhouse gas emissions are more than 50 percent higher than in 1990. Global warming is causing long-lasting changes to our climate system, which threatens irreversible consequences if we do not act.

                                The annual average economic losses from climate-related disasters are in the hundreds of billions of dollars. This is not to mention the human impact of geo-physical disasters, which are 91 percent climate-related, and which between 1998 and 2017 killed 1.3 million people, and left 4.4 billion injured. The goal aims to mobilize US$100 billion annually by 2020 to address the needs of developing countries to both adapt to climate change and invest in low-carbon development.
                            </p>
                        </div>
                    </div>
                    <div className="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-1">
                        <div className="mx-auto w-full rounded-lg overflow-hidden aspect-video dark:aspect-none relative">
                            <img src={goal13Img} width="100%" height="400" alt="Goal 13: CLIMATE ACTION" className="aspect-[3/2] object-cover rounded-lg overflow-hidden" />
                            <a href="#externalLinkProhibited" className="absolute bottom-0 right-[25%] bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">Photo by Asian Development Bank (CC Licensed) </a>
                        </div>
                    </div>        
                </div>
            </section>
            {/* goal 14 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-14'>
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Goal 14: LIFE BELOW WATER
                            </h2>
                        </div>
                        <div className="prose prose-gray mx-auto max-w-none">
                            <p>
                                The worlds oceans, their temperature, chemistry, currents and life drive global systems that make the Earth habitable for humankind. How we manage this vital resource is essential for humanity as a whole, and to counterbalance the effects of climate change.

                                Over three billion people depend on marine and coastal biodiversity for their livelihoods. However, today we are seeing 30 percent of the worlds fish stocks overexploited, reaching below the level at which they can produce sustainable yields.
                            </p>
                        </div>
                    </div>
                    <div className="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-1">
                        <div className="mx-auto w-full rounded-lg overflow-hidden aspect-video dark:aspect-none relative">
                            <img src={goal14Img} width="100%" height="400" alt="Goal 14: LIFE BELOW WATER" className="aspect-[3/2] object-cover rounded-lg overflow-hidden" />
                            <a href="#externalLinkProhibited" className="absolute bottom-0 right-[25%] bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">Photo by Asian Development Bank (CC Licensed) </a>
                        </div>
                    </div>        
                </div>
            </section>
            {/* goal 15 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-15'>
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Goal 15: LIFE ON LAND
                            </h2>
                        </div>
                        <div className="prose prose-gray mx-auto max-w-none">
                            <p>
                                Human life depends on the earth as much as the ocean for our sustenance and livelihoods. Plant life provides 80 percent of the human diet, and we rely on agriculture as an important economic resources. Forests cover 30 percent of the Earths surface, provide vital habitats for millions of species, and important sources for clean air and water, as well as being crucial for combating climate change.

                                Every year, 13 million hectares of forests are lost, while the persistent degradation of drylands has led to the desertification of 3.6 billion hectares, disproportionately affecting poor communities.
                            </p>
                        </div>
                    </div>
                    <div className="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-1">
                        <div className="mx-auto w-full rounded-lg overflow-hidden aspect-video dark:aspect-none relative">
                            <img src={goal15Img} width="100%" height="400" alt="Goal 15: LIFE ON LAND" className="aspect-[3/2] object-cover rounded-lg overflow-hidden" />
                            <a href="#externalLinkProhibited" className="absolute bottom-0 right-[25%] bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">Photo by Asian Development Bank (CC Licensed) </a>
                        </div>
                    </div>        
                </div>
            </section>
            {/* goal 16 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-16'>
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Goal 16: PEACE, JUSTICE AND STRONG INSTITUTIONS
                            </h2>
                        </div>
                        <div className="prose prose-gray mx-auto max-w-none">
                            <p>
                                We cannot hope for sustainable development without peace, stability, human rights and effective governance, based on the rule of law. Yet our world is increasingly divided. Some regions enjoy peace, security and prosperity, while others fall into seemingly endless cycles of conflict and violence. This is not inevitable and must be addressed.

                                Armed violence and insecurity have a destructive impact on a countrys development, affecting economic growth, and often resulting in grievances that last for generations. Sexual violence, crime, exploitation and torture are also prevalent where there is conflict, or no rule of law, and countries must take measures to protect those who are most at risk
                            </p>
                        </div>
                    </div>
                    <div className="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-1">
                        <div className="mx-auto w-full rounded-lg overflow-hidden aspect-video dark:aspect-none relative">
                            <img src={goal16Img} width="100%" height="400" alt="Goal 16: PEACE, JUSTICE AND STRONG INSTITUTIONS" className="aspect-[3/2] object-cover rounded-lg overflow-hidden" />
                            <a href="#externalLinkProhibited" className="absolute bottom-0 right-[25%] bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">Photo by Asian Development Bank (CC Licensed) </a>
                        </div>
                    </div>        
                </div>
            </section>
            {/* goal 17 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-17'>
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Goal 17: PARTNERSHIPS FOR THE GOALS
                            </h2>
                        </div>
                        <div className="prose prose-gray mx-auto max-w-none">
                            <p>
                                The SDGs can only be realized with strong global partnerships and cooperation. Official Development Assistance remained steady but below target, at US$147 billion in 2017. While humanitarian crises brought on by conflict or natural disasters continue to demand more financial resources and aid. Many countries also require Official Development Assistance to encourage growth and trade.

                                The world is more interconnected than ever. Improving access to technology and knowledge is an important way to share ideas and foster innovation. Coordinating policies to help developing countries manage their debt, as well as promoting investment for the least developed, is vital for sustainable growth and development.
                            </p>
                        </div>
                    </div>
                    <div className="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-1">
                        <div className="mx-auto w-full rounded-lg overflow-hidden aspect-video dark:aspect-none relative">
                            <img src={goal17Img} width="100%" height="400" alt="Goal 17: PARTNERSHIPS FOR THE GOALS" className="aspect-[3/2] object-cover rounded-lg overflow-hidden" />
                            <a href="#externalLinkProhibited" className="absolute bottom-0 right-[25%] bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">Photo by Asian Development Bank (CC Licensed) </a>
                        </div>
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
                        <a href="#notFound" className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 px-8 text-sm font-medium shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-gray-950 text-black cursor-pointer transition duration-500 ease-in-out hover:scale-90 hover:bg-blue-600 hover:text-white">
                            Get Involved
                        </a>
                    </div>
                    <div className="grid w-full max-w-sm justify-self-center rounded-xl overflow-hidden shadow sm:max-w-none md:justify-self-end relative">
                        <img src={projImg} alt="Image" className="aspect-[4/3] object-cover object-center w-full h-full" height="400" width="600" />
                        <a href="#externalLinkProhibited" className="absolute bottom-2 right-2 bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">Photo by IAEA Imagebank (CC Licensed)
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
                              <img src={firstVid} alt="firstVidImg" className='w-100 h-48 rounded-top-lg" style="width: 100%; height: 12rem; aspect-ratio: 600 / 300; object-fit: cover; cursor-pointer' />
                              <div className="p-4 bg-[#161616] mb-10">
                                  <h3 className="text-lg font-bold mb-2 text-white">SDG Digital Day</h3>
                                  <p className="text-gray-500">
                                      Explore the forefront of sustainable development with ITU&apos;s SDG Digital Day video, delving into innovative tech
                                      solutions driving global progress. Join thought leaders and experts as they discuss leveraging digital tools to tackle
                                      pressing challenges and achieve the Sustainable Development Goals.
                                  </p>
                                  <a href="#externalLinksProhibited"
                                      target="_self"
                                      className="absolute bottom-0 mb-4 right-2 bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">
                                      Video uploaded by: ITU (CC Licensed)
                                  </a>
                              </div>
                          </div>
                        </div>
                        <div className="ratio ratio-14x9">
                          <div className="bg-[#161616] rounded-lg shadow-lg relative">
                              <img src={secondVid} alt="firstVidImg" className='w-100 h-48 rounded-top-lg" style="width: 100%; height: 12rem; aspect-ratio: 600 / 300; object-fit: cover; cursor-pointer' />
                              <div className="p-4 bg-[#161616] mb-10">
                                  <h3 className="text-lg font-bold mb-2 text-white">What is sustainable development?</h3>
                                  <p className="text-gray-500">
                                      Dive into the core principles and practices of sustainable development with FN-sambandet Norge&apos;s insightful video. Learn
                                      how individuals and communities can contribute to a greener, more equitable future by embracing sustainable living and
                                      fostering environmental stewardship.
                                  </p>
                                  <a href="#externalLinksProhibited"
                                      target="_self"
                                      className="absolute bottom-0 mb-4 right-2 bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">
                                      Video by: FN-sambandet Norge (CC Licensed)
                                  </a>
                              </div>
                          </div>
                        </div>
                        <div className="ratio ratio-14x9">
                          <div className="bg-[#161616] rounded-lg shadow-lg relative">
                              <img src={thirdVid} alt="firstVidImg" className='w-100 h-48 rounded-top-lg" style="width: 100%; height: 12rem; aspect-ratio: 600 / 300; object-fit: cover; cursor-pointer' />
                              <div className="p-4 bg-[#161616] mb-10">
                                  <h3 className="text-lg font-bold mb-2 text-white">169 targets of the #SDGs</h3>
                                  <p className="text-gray-500">
                                      Embark on a journey through the 169 targets of the Sustainable Development Goals (SDGs) in this enlightening video by
                                      Andeel Ali. Through clever animation and insightful narration, Ali breaks down each target, shedding light on the global
                                      efforts towards achieving a more prosperous, equitable, and sustainable world.
                                  </p>
                                  <a href="#externalLinksProhibited"
                                      target="_self"
                                      className="absolute bottom-0 mb-4 right-2 bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">
                                      Video uploaded by: Andeel Ali (CC Licensed)
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
                                <a href="#externalLinksProhibited" target="_self"
                                    className="absolute bottom-20 mb-4 right-2 bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">
                                    Image from: Wikimedia Commons
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
                                <a href="#externalLinksProhibited"
                                    target="_self"
                                    className="absolute bottom-20 mb-4 right-2 bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">
                                    Photo by Lance Cheung (CC Licensed)
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
                                <a href="#externalLinksProhibited" target="_self"
                                    className="absolute bottom-20 mb-4 right-2 bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">
                                    Photo by Asian Development Bank (CC Licensed)
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
                                <a href="#externalLinksProhibited" target="_self"
                                    className="absolute bottom-20 mb-4 right-2 bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">
                                    Photo by Asian Development Bank (CC Licensed)
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
                            href="#externalLinksProhibited" target="_self">
                            <i className="fa-solid fa-newspaper"></i>
                            News Updates
                        </a>
                        <a
                            className="flex h-9 items-center rounded-md border border-gray-200 border-gray-200 bg-[#0d0e14] px-4 py-2 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                            href="#externalLinksProhibited" target="_self">
                            <i className="fa-solid fa-group-arrows-rotate"></i>
                            Community
                        </a><a
                            className="flex h-9 items-center rounded-md border border-gray-200 border-gray-200 bg-[#0d0e14] px-4 py-2 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                            href="#externalLinksProhibited" target="_self">
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
                        <a href="#externalLinksProhibited"
                            target="_self"
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
                        <a href="#top" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="h-12" alt="FUNITY Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FUNITY</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#about" className="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#externalLinksProhibited" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#externalLinksProhibited" className="hover:underline me-4 md:me-6">Licensing</a>
                            </li>
                            <li>
                                <a href="#externalLinksProhibited" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a
                            href="#top" className="hover:underline">FUNITY - Uniting for a Future of Sustainability</a>. All Rights Reserved.</span>
                </div>
            </footer>

          </div>

      </main>

    
    </>
  )
}
          