
export default function SupportingSdgCard(props) {
    return(
        <div className="flex flex-col gap-1 relative">
            <img src={props.img} alt={props.alt} width="600" height="400"
                className="rounded-lg object-cover aspect-[4/3] overflow-hidden" />
            <a href={props.source} target="_blank"
                className="absolute bottom-20 mb-4 right-2 bg-white text-black bg-opacity-75 px-2 py-1 text-sm cursor-pointer">
                Click to view credits
            </a>
            <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">
                    {props.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {props.details}
                </p>
            </div>
        </div>
    );
}