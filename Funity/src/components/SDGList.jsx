import SDGListCard from "../cards/SDGListCard";

export default function SdgList() {
    return(
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-12">
            <SDGListCard title="1. No Poverty" 
                        details="Volunteer at a local shelter or food bank. Support organizations that provide microfinance services
                        to
                        entrepreneurs in low-income communities."/>
            
            <SDGListCard title="2. Zero Hunger"
                            details="Reduce food waste by supporting initiatives that collect surplus food from restaurants and grocery
                            stores
                            to distribute to those in need."/>  
            <SDGListCard title="3. Good Health and Well-being"
                            details=" Promote healthy lifestyles in your community by organizing fitness classes, health workshops, or
                            mental
                            health awareness events."/>
            <SDGListCard title="4. Quality Education"
                            details="Mentor students, especially those from disadvantaged backgrounds, to help them stay engaged in
                            learning
                            and encourage them to pursue higher education."/>
            <SDGListCard title="5. Gender Equality"
                            details="Support organizations that provide education and training to empower women and girls, advocate for
                            policies that promote gender equality in the workplace and beyond."/>
            <SDGListCard title="6. Clean Water and Sanitation"
                            details="Participate in beach or river clean-up projects, raise awareness about water conservation, and
                            support
                            initiatives that provide access to clean water in underserved communities."/>
            <SDGListCard title="7. Affordable and Clean Energy"
                            details="Advocate for renewable energy policies in your community, promote energy efficiency, and support the
                            adoption of sustainable energy solutions."/>
            <SDGListCard title="8. Decent Work and Economic Growth"
                            details="Support small businesses and entrepreneurs, advocate for policies that promote job creation and
                            provide
                            training and skills development opportunities for youth and adults."/>
            <SDGListCard title="9. Industry, Innovation, and Infrastructure"
                            details="Support initiatives that promote technological innovation and entrepreneurship, advocate for
                            investment in
                            sustainable infrastructure, and participate in programs that bridge the digital divide."/>
            <SDGListCard title="10. Reduced Inequality"
                            details="Advocate for policies that address discrimination and inequality, support organizations that provide
                            social services to marginalized communities, and raise awareness about the impact of inequality on
                            society."/>
            <SDGListCard title="11. Sustainable Cities and Communities"
                            details="Participate in urban greening projects, promote sustainable transportation options, and support
                            initiatives that make cities more inclusive, safe, and resilient."/>
            <SDGListCard title="12. Responsible Consumption and Production"
                            details="Reduce your ecological footprint by practicing waste reduction, recycling, and upcycling, support
                            businesses that adopt sustainable practices, and advocate for circular economy principles."/>
            <SDGListCard title="13. Climate Action"
                            details="Take action to reduce greenhouse gas emissions in your community, support reforestation and
                            conservation
                            efforts, advocate for climate-resilient policies, and raise awareness about the urgency of climate
                            change."/>
            <SDGListCard title="14. Life Below Water"
                            details="Participate in beach or river clean-up projects, support marine conservation efforts, reduce plastic
                            pollution, and raise awareness about the importance of preserving ocean ecosystems."/>
            <SDGListCard title="15. Life on Land"
                            details="Support reforestation and habitat restoration projects, engage in biodiversity conservation efforts,
                            raise
                            awareness about wildlife protection, and promote sustainable land management practices."/>
            <SDGListCard title="16. Peace and Justice Strong Institutions"
                            details="Advocate for human rights, access to justice, and the rule of law, support initiatives that promote
                            social
                            cohesion and conflict resolution, and engage in peacebuilding efforts in your community."/>
            <SDGListCard title="17. Partnerships for the Goals"
                            details="Collaborate with local organizations, businesses, and government agencies to advance the SDGs,
                            support
                            cross-sectoral partnerships, and advocate for multi-stakeholder cooperation to achieve sustainable
                            development."/>
        </div>
    );
}