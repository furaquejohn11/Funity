export default function ConnectCard(props)
{
    return(
        <>
            <a className="flex h-9 items-center rounded-md border border-gray-200 border-gray-200 bg-[#0d0e14] px-4 py-2 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#externalLinksProhibited" target="_self">
                <i className="fa-solid fa-newspaper"></i>
                {props.text}
            </a>
        </>
    )
}