export default function VideoCards(props)
{
    return(
        <>
            <div className="ratio ratio-14x9">
                <div className="bg-[#161616] rounded-lg shadow-lg relative">
                    <img src={props.vid} alt="firstVidImg" className='w-full h-48 rounded-top-lg" style="width: 100%; height: 12rem; aspect-ratio: 600 / 300; object-fit: cover; cursor-pointer' />
                    <div className="p-4 bg-[#161616] mb-10 h-auto">
                        <h3 className="text-lg font-bold mb-2 text-white">{props.title}</h3>
                        <p className="text-gray-500">
                            {props.description}
                        </p>
                        <a href="#externalLinksProhibited"
                            target="_self"
                            className="absolute top-0 mb-4 right-0 bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">
                            {props.license}
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}