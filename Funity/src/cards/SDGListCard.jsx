export default function SDGListCard(props) {
    return(
        <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">{props.title}</h3>
            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                {props.details}
            </p>
        </div>
    );
}