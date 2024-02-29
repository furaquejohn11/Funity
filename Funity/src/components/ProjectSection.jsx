import { images } from "./Images";

export default function ProjectSection()
{
    return(
        <>
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
                        <img src={images.projImg} alt="Image" className="aspect-[4/3] object-cover object-center w-full h-full" height="400" width="600" />
                        <a href="#externalLinkProhibited" className="absolute bottom-2 right-2 bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">Photo by IAEA Imagebank (CC Licensed)
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}