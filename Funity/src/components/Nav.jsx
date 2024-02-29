import { images } from '../components/Images';

export default function Nav()
{
    return(
        <>
            <nav className="sn-navbar">
                <ul className="sn-navbar-nav">
                    <li className="sn-logo">
                        <a href="#" className="sn-nav-link">
                            <span className="sn-link-text">FUNITY</span>
                            <img src={images.logo} alt="sampleLogo" width="50px" height="50px" />
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
        </>
    )
}