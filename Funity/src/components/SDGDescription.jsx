export default function SDGDescription(props)
{
    return(
        <>
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2">
                <div className="space-y-4">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            {props.title}
                        </h2>
                    </div>
                    <div className="prose prose-gray mx-auto max-w-none">
                        <p>
                            {props.description}
                        </p>
                    </div>
                </div>
                <div className="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-1">
                    <div className="mx-auto w-full rounded-lg overflow-hidden aspect-video dark:aspect-none relative">
                        <img src={props.image} width="100%" height="400" alt="Goal 1: No Poverty" className="aspect-[3/2] object-cover rounded-lg overflow-hidden" />
                        <a href="#externalLinkProhibited" className="absolute bottom-0 right-[25%] bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">Photo by Asian Development Bank (CC Licensed)
                        </a>
                    </div>
                </div>        
            </div>
        </>
    )
}