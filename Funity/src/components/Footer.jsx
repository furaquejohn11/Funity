import { images } from "./Images";

export default function Footer()
{
    return(
        <>
            <footer className="rounded-lg shadow m-top">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 mt-20">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="#top" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={images.logo} className="h-12" alt="FUNITY Logo" />
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
        </>
    )
}