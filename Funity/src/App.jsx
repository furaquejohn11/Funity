//style
import './App.css'

//images
import { images } from './components/Images';

//components
import Nav from './components/Nav';
import Slider from './components/Slider';
import About from './components/About';
import SDGDescription from './components/SDGDescription';
import ProjectSection from './components/ProjectSection';
import VideoCards from './components/VideoCards';
import SupportCard from './components/SupportCard';
import SdgList from './components/SDGList';
import ConnectCard from './components/ConnectCard';
import Footer from './components/Footer';

export default function App() {

  return (
    <>
    

      <Nav />
    


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

                  <Slider />
              </div>
            </section>



            {/* about section */}
            <About />



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
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-1'>
                <SDGDescription title="Goal 1: NO POVERTY" description="There is a concerning trend in global poverty, exacerbated by the COVID-19 pandemic, which has halted decades of progress in poverty reduction. It predicts that by 2030, approximately 575 million people will still be living in extreme poverty, particularly challenging in sub-Saharan Africa and conflict-affected regions. Despite some expansion in social protection during the pandemic, over 4 billion people globally remain without adequate coverage. Historical trends suggest only one-third of countries will halve their national poverty rates by 2030, and social protection coverage remains insufficient for various vulnerable groups. To effectively combat poverty, there's a call for increased action and investment in job creation and social services, emphasizing the need to redirect public resources toward essential services." image={images.goal1Img} />
            </section>
            {/* goal 2 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-2'>
                <SDGDescription title="Goal 2: ZERO HUNGER" description="There is an escalating issue of hunger and food insecurity worldwide, with the number of affected individuals rising steadily since 2015, exacerbated by factors such as the COVID-19 pandemic, conflict, climate change, and inequality. Despite global efforts, projections suggest that by 2030, approximately 670 million people will still face hunger, equal to the number in 2015. Challenges persist in reducing malnutrition among children, necessitating a 2.2-fold increase in the current rate of reduction in stunting to meet global targets. Urgent action is required to transform food systems, enhance food security, and invest in sustainable agricultural practices to achieve zero hunger by 2030. Additionally, various targets address issues such as the increase in food insecurity due to the pandemic, the stagnation in reducing overweight children, declining investments in agriculture, the elimination of agricultural export subsidies, and the ongoing challenge of fluctuating food prices, especially in sub-Saharan Africa and least developed countries." image={images.goal2Img} />
            </section>
            {/* goal 3 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-3'>
                <SDGDescription title="Goal 3: GOOD HEALTH AND WELL-BEING" description="It is noted that the challenges facing the achievement of Sustainable Development Goal 3 (SDG3), exacerbated by the pandemic and ongoing crises, lead to a rise in health inequalities and threatening universal health coverage. Notably, there's an alarming increase in the number of un- or under-vaccinated children, especially in low- and middle-income countries, alongside a slow decline in maternal mortality rates and under-5 mortality rates, with urgent efforts required to meet the 2030 targets. Progress towards ending communicable diseases remains off track, with setbacks observed in reducing HIV infections, TB, and malaria cases. Additionally, there's a need to bolster health systems and address the shortage of health workers, especially in regions with high disease burdens. Efforts to enhance family planning services and childhood vaccinations also require immediate attention to ensure universal access to healthcare services." image={images.goal3Img} />
            </section>
            {/* goal 4 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-4'>
                <SDGDescription title="Goal 4: QUALITY EDUCATION" description="The existing challenges in achieving education targets, is worsened by the COVID-19 pandemic, which has further disrupted progress. Without additional measures, only a small fraction of countries will meet Sustainable Development Goal 4 (SDG4) by 2030, leaving millions of children without access to quality education and lacking essential numeracy and literacy skills. Despite some improvements in school completion rates, progress has slowed, and learning levels have stagnated, with documented losses due to pandemic-related school closures. Access to pre-primary education remains limited, and participation in education and training for youth and adults is insufficient. Basic school infrastructure and teacher qualifications are also highlighted as areas needing attention. Reimagining education systems and prioritizing education financing are crucial for achieving SDG4 effectively." image={images.goal4Img} />
            </section>
            {/* goal 5 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-5'>
                <SDGDescription title="Goal 5: GENDER EQUALITY" description="The illustrated stark reality that the world is far from achieving gender equality by 2030, with none of the 18 indicators being on track to meet targets. Progress in closing gender gaps in various areas, such as legal protection, representation in leadership roles, and ending child marriage, remains slow, with estimations suggesting it could take centuries to achieve parity. The COVID-19 pandemic has exacerbated existing gender inequalities, particularly in healthcare, education, and economic opportunities. Comprehensive policy reforms and strong political leadership are deemed essential to dismantle systemic barriers to achieving Sustainable Development Goal 5 (SDG5) and advancing gender equality globally." image={images.goal5Img} />
            </section>
            {/* goal 6 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-6'>
                <SDGDescription title="Goal 6: CLEAN WATER AND SANITATION" description="Despite some progress, billions of people still lack access to safe water, sanitation, and hygiene, with water scarcity worsening due to conflicts and climate change. Achieving universal coverage by 2030 requires substantial increases in current rates of progress, particularly for drinking water, sanitation, and hygiene. Challenges include water pollution, wastewater treatment, and water use efficiency, compounded by inadequate frameworks for sustainable water management and decreasing ODA disbursements to the water sector. Addressing these issues necessitates boosting infrastructure investment, enhancing cross-sectoral coordination, and prioritizing climate change adaptation efforts to achieve Sustainable Development Goal 6 (SDG6)." image={images.goal6Img} />
            </section>
            {/* goal 7 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-7'>
                <SDGDescription title="Goal 7: AFFORDABLE AND CLEAN ENERGY" description="Despite improvements in access to electricity and clean cooking fuels globally, significant challenges persist, with 675 million people still lacking electricity access and 2.3 billion relying on unsafe cooking fuels. The war in Ukraine and economic uncertainty contribute to energy price volatility, prompting mixed responses with some countries investing more in renewables while others increase reliance on coal, jeopardizing the green transition. If current trends persist, millions will remain without electricity access and clean cooking fuels by 2030. Accelerating electrification, ramping up investments in renewables, and enhancing electricity grid infrastructure are essential to achieve universal energy access and mitigate climate impacts. However, decreasing international financial support for clean energy in developing countries poses a significant challenge, highlighting the need for concerted global efforts to ensure equitable energy access and sustainable development." image={images.goal7Img} />
            </section>
            {/* goal 8 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-8'>
                <SDGDescription title="Goal 8: DECENT WORK AND ECONOMIC GROWTH" description="Progress toward achieving SDG8 faces significant challenges exacerbated by various crises including the aftermath of COVID-19, trade tensions, and the conflict in Ukraine. These factors are predicted to slow down global economic growth, jeopardizing advancements in equitable pay and decent work. While global real GDP per capita increased in 2021, forecasts indicate a slowdown in growth, particularly impacting LDCs. Informal employment remains a prevalent issue with around 2 billion workers lacking social protection, and productivity growth has been declining globally. The global unemployment rate has slightly decreased but remains a concern, especially among young people, with nearly one in four not in education, employment, or training. Additionally, child labor has increased, and while tourism's economic contribution is recovering, challenges persist in achieving sustainable development goals related to finance access and digital solutions. Addressing these issues will require comprehensive reforms in the financial system to tackle rising debts and promote equitable pay and decent work for all." image={images.goal8Img} />
            </section>
            {/* goal 9 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-9'>
                <SDGDescription title="Goal 9: INDUSTRY, INNOVATION AND INFRASTRUCTURE" description="The recovery of the manufacturing industry from COVID-19 is varied, with high-income regions reaching record levels of manufacturing value added (MVA) per capita in 2022, while levels in least developed countries (LDCs) remained close to the 2015 baseline. Higher-technology industries recovered faster, indicating the importance of promoting innovation and technology transfer. To achieve Goal 9 by 2030, it is crucial to support LDCs, invest in advanced technologies, reduce carbon emissions, and enhance global mobile broadband access. Despite global manufacturing employment returning to pre-pandemic levels in 2021, the share of manufacturing employment in total employment continued to decline. Additionally, while global CO2 emissions reached a new all-time high in 2022, access to mobile broadband, particularly in Sub-Saharan Africa and LDCs, remains a challenge." image={images.goal9Img} />
            </section>
            {/* goal 10 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-10'>
                <SDGDescription title="Goal 10: REDUCED INEQUALITIES" description="Before the COVID-19 pandemic, the incomes of the bottom 40% of the population were increasing faster than the national average in many countries, contributing to a reduction in income inequality. However, the pandemic and subsequent uneven recoveries across regions threaten to reverse this trend and exacerbate global inequality. Record numbers of people are fleeing conflicts and economic hardship, with one in 251 people worldwide being a refugee by mid-2022, the highest proportion ever documented. Achieving SDG 10 requires addressing the root causes of wage disparities and access to resources within and between countries. Despite some progress, challenges remain, such as the persistence of a high share of people living below half the median income in many countries and a decline in the share of economic output earned by workers over the past decade. Additionally, the global average cost of sending remittances remains high, exceeding the SDG target." image={images.goal10Img} />
            </section>
            {/* goal 11 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-11'>
                <SDGDescription title="Goal 11: SUSTAINABLE CITIES AND COMMUNITIES" description="The COVID-19 pandemic has led to significant shifts in migration patterns, impacting urban areas disproportionately and hindering progress towards sustainable cities. The number of people living in slums or slum-like conditions in urban areas has been steadily growing, exacerbating the housing crisis, particularly in developing countries. Access to public transportation remains inadequate for over half of the world's urban population, and the physical expansion of cities outpaces population growth, highlighting challenges in urban planning. Waste management also remains a concern, with a significant portion of municipal solid waste left uncollected, contributing to pollution and health risks. To achieve SDG 11, efforts must focus on strengthening urban planning capacities, improving public transportation access, enhancing waste management systems, and increasing the proportion of open public spaces in cities. Additionally, increasing the number of countries with local governments equipped with disaster risk reduction strategies is crucial for building resilience in urban areas." image={images.goal11Img} />
            </section>
            {/* goal 12 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-12'>
                <SDGDescription title="Goal 12: RESPONSIBLE CONSUMPTION AND PRODUCTION" description="The world is falling short of its target to reduce per-capita food waste and losses by 2030, exacerbated by the disruptions caused by the COVID-19 pandemic, which have altered consumption and production patterns. There is an urgent need for responsible consumption and production practices to be integrated into the pandemic recovery efforts, alongside accelerating the decoupling of economic growth from resource use. While reporting on corporate sustainability has increased significantly since the start of the SDG period, there is room for improvement, particularly in reporting activities contributing to the SDGs. Key policies supporting the transition to sustainable practices have been implemented, but there are regional disparities in reporting and progress. Despite efforts, post-harvest food losses remain stagnant, far from the goal of halving them by 2030. Additionally, fossil fuel subsidies have risen, posing a challenge to sustainability efforts. To achieve SDG12, robust policies promoting sustainable practices and reducing resource use are essential." image={images.goal12Img} />
            </section>
            {/* goal 13 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-13'>
                <SDGDescription title="Goal 13: CLIMATE ACTION" description="The world faces an imminent climate crisis, with current actions insufficient to prevent catastrophic impacts. Urgent and transformative measures are needed within this decade to significantly reduce greenhouse gas emissions across all sectors to meet the 1.5°C target. Failure to act risks the lives of billions of people, leading to worsening heatwaves, droughts, floods, wildfires, sea-level rise, and famines. Emissions must be nearly halved by 2030 to combat climate change effectively. Despite some progress in disaster risk reduction strategies and climate finance, global temperatures have already exceeded 1.1°C, and emissions continue to rise, surpassing pre-industrial levels. Furthermore, climate change education remains inadequate, with a significant portion of national curriculum frameworks lacking mention of climate change, highlighting the urgent need for comprehensive climate action and education." image={images.goal13Img} />
            </section>
            {/* goal 14 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-14'>
                <SDGDescription title="Goal 14: LIFE BELOW WATER" description="The health of the ocean, the world's largest ecosystem, is in danger due to rising acidification, eutrophication, declining fish stocks, and plastic pollution. Despite some progress in expanding marine protected areas and combating illegal fishing, more concerted efforts and acceleration are needed to advance towards SDG14. Urgent and coordinated global action is required to protect the ocean, which continues to be endangered by destructive trends. The UN Ocean Conference 2025 and other events are planned to address these issues, including the Civil Society and Other Stakeholders Forum-SIDS4 4th International Conference on Small Island Developing States and the Second Preparatory Committee Meeting for the SIDS4 Conference. Publications and reports emphasize the need for win-win synergies between tackling climate and sustainable development crises, such as the expert group report &quot;Analysing Climate and SDG Synergies, Aiming to Maximize Action Impact&quot; and the video &quot;Ocean 20: Building a Sustainable Blue Economy&quot;. These resources highlight the importance of a unified approach to protect the ocean and promote sustainable development." image={images.goal14Img} />
            </section>
            {/* goal 15 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-15'>
                <SDGDescription title="Goal 15: LIFE ON LAND" description="The global community faces a critical triple planetary crisis encompassing climate change, pollution, and biodiversity loss, with escalating trends in forest loss, land degradation, and species extinction posing grave threats to both the planet's health and human well-being. Despite some progress in sustainable forest management, deforestation driven primarily by agricultural expansion remains a pressing concern, while efforts to conserve marine and terrestrial key biodiversity areas (KBAs) face challenges due to uneven regional coverage. Land degradation, exacerbated by human activities and climate change, imperils food and water security for 1.3 billion people, with projections indicating further degradation without intervention. Species extinction rates continue to rise, with the Red List Index deteriorating steadily, underscoring the urgency to halt biodiversity loss. Progress in implementing measures like the Nagoya Protocol and addressing invasive alien species is noted, yet significant gaps persist in incorporating biodiversity values into national frameworks and achieving Aichi Biodiversity Targets, highlighting the need for concerted global action and transformative shifts in human-nature relationships to meet Goal 15 objectives." image={images.goal15Img} />
            </section>
            {/* goal 16 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-16'>
                <SDGDescription title="Goal 16: PEACE, JUSTICE AND STRONG INSTITUTIONS" description="The pursuit of Sustainable Development Goal 16, aimed at fostering peace, justice, and strong institutions, faces significant challenges as ongoing violent conflicts worldwide disrupt global efforts for peace and stability. With one-quarter of humanity residing in conflict-affected regions and a record-breaking 100 million individuals forcibly displaced as of May 2022, the accessibility of justice, basic services, and legal protections is severely compromised, exacerbating structural injustices and inequalities. Rising homicides, especially in 2021, partly linked to COVID-19 economic repercussions and increased socio-political violence, underscore the urgency of addressing escalating violence. The United Nations' alarming report of a 53% increase in civilian killings during armed conflicts in 2022, with disproportionate impacts on women and heavy weapon use, highlights the urgent need for effective conflict resolution mechanisms. Moreover, persistent gender disparities in safety perceptions and widespread violence against children at home further emphasize the imperative for comprehensive interventions. While COVID-19 measures temporarily disrupted trafficking dynamics, efforts to combat trafficking require adaptation to changing circumstances. Data gaps persist concerning sexual violence against children and budget credibility, indicating the need for enhanced monitoring and reporting mechanisms. Youth underrepresentation in governance structures, coupled with widespread under-registration of births, underlines the necessity of inclusive policies to ensure universal access to justice and uphold human rights. Despite progress in adopting access to information laws globally, concerted action is needed to bolster institutions, restore trust, and foster peaceful and inclusive societies in line with SDG 16 objectives." image={images.goal16Img} />
            </section>
            {/* goal 17 */}
            <section className="w-full py-12 md:py-24 lg:py-32 m-top-med" id='goal-17'>
                <SDGDescription title="Goal 17: PARTNERSHIPS FOR THE GOALS" description="While there has been progress in development aid, remittances, and access to technology, achieving SDG 17 (Partnerships for the Goals) faces challenges. Funding for development remains insufficient, especially for low-income countries, and international cooperation is hampered by geopolitical tensions and nationalism. Though internet access and trade have grown, significant gaps persist, particularly for developing countries. Despite increases in funding for data and statistics, long-term challenges hinder progress." image={images.goal17Img} />
            </section>




            {/* <!-- projects section --> */}
            <ProjectSection />



            {/* <!-- promorional videos section --> */}
            <section className="m-top" id="promotionalVideos">
                <div className="container mx-auto py-12 px-4">
                    <h2 className="text-3xl font-bold text-center mb-6">SDG Insights: Videos on Sustainable Development Goals</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <VideoCards vid={images.firstVid} title="SDG Digital Day" description="Explore the forefront of sustainable development with ITU&apos;s SDG Digital Day video, delving into innovative tech
                        solutions driving global progress. Join thought leaders and experts as they discuss leveraging digital tools to tackle
                        pressing challenges and achieve the Sustainable Development Goals." license="Video uploaded by: ITU (CC Licensed)" />

                        <VideoCards vid={images.secondVid} title="What is sustainable development?" description="Dive into the core principles and practices of sustainable development with FN-sambandet Norge&apos;s insightful video. Learn
                        how individuals and communities can contribute to a greener, more equitable future by embracing sustainable living and
                        fostering environmental stewardship." license="Video by: FN-sambandet Norge (CC Licensed)" />

                        <VideoCards vid={images.thirdVid} title="169 targets of the #SDGs" description="Embark on a journey through the 169 targets of the Sustainable Development Goals (SDGs) in this enlightening video by
                        Andeel Ali. Through clever animation and insightful narration, Ali breaks down each target, shedding light on the global
                        efforts towards achieving a more prosperous, equitable, and sustainable world." license="Video uploaded by: Andeel Ali (CC Licensed)" />
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
                            <SupportCard img={images.sustainableTranspoImg} license="Image from: Wikimedia Commons" title="Sustainable Transportation" description="Promoting the use of bicycles and electric vehicles to reduce
                            carbon emissions and improve air quality." />

                            <SupportCard img={images.sustainableAgriImg} license="Photo by Lance Cheung (CC Licensed)" title="Sustainable Agriculture" description="Supporting local farmers and promoting organic farming
                            practices to ensure food security and protect the
                            environment." />

                            <SupportCard img={images.qualityEduc} license="Photo by Asian Development Bank (CC Licensed)" title="Quality Education" description="Volunteering to teach children in underserved communities and
                            advocating for inclusive and equitable education for all." />

                            <SupportCard img={images.cleanEnergyImg} license="Photo by Asian Development Bank (CC Licensed)" title="Clean Energy Innovation" description="Supporting research and development of renewable energy
                            technologies and advocating for policies that promote the
                            transition to clean energy." />
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
                    <SdgList />
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
                        <ConnectCard text="News Updates" />
                        <ConnectCard text="Community" />
                        <ConnectCard text="SDG Updates" />
                        
                    </div>
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
            <Footer />

          </div>

      </main>

    
    </>
  )
}
          