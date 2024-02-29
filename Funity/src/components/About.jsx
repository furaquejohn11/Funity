export default function About()
{
    return(
        <>
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
        </>
    )
}