interface FilterProps{
    activeTab:string
}

export default function FriendsFilter(props:FilterProps){
    return(
        <ul className="flex gap-2 my-4">
        <li className={`pb-1 ${props.activeTab === ""?"border-b-[3px] border-blue-600":null}`}>
        <button className="hover:bg-gray-200 text-gray-600 p-3 rounded-sm">All Friends</button>
        </li>   
        <li className={`pb-1 ${props.activeTab === "recent"?"border-b-[3px] border-blue-600":null}`}>
         <button className="hover:bg-gray-200 text-gray-600 p-3 rounded-sm">Recently Added</button>
        </li>
      </ul>
    )
}