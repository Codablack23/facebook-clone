import Link from "next/link"

interface ProfileHeaderProps{
    activeTab:"posts" | "friends"
}

export default function ProfileHeader(props:ProfileHeaderProps){
   return (
    <header className="bg-gradient-to-b min-h-[450px] from-gray-600 via-white via-40% to-90% to-white">
    <div className="max-w-5xl mx-auto">
      <div className="bg-gray-200 min-h-[300px] rounded-b-md">
      </div>
      <div className="max-w-4xl mx-auto">
      <div className="-my-16 flex gap-5">
        <div>
          <div className="h-[180px] flex items-center justify-center w-[180px] bg-white rounded-full">
            <div className="h-[170px] w-[170px] bg-gray-200 rounded-full"></div>
          </div>
        </div>
        <div className="mt-20">
          <p className="text-3xl font-bold">Edih Ebedamowei</p>
          <p className="text-2xl">(Goodluck)</p>
          <p className="text-gray-500 font-medium">643 friends</p>
        </div>
      </div>
      <hr className="my-2 mt-20" />
      <ul className="flex gap-2">
        <li className={`pb-2 ${props.activeTab === "posts"?"border-b-[3px] border-blue-600":null}`}>
        <Link href={"/"}>
        <button className="hover:bg-gray-200 text-gray-600 p-3 rounded-sm">Posts</button>
        </Link>
        </li>   
        <li className={`pb-2  ${props.activeTab === "friends"?"border-b-[3px] border-blue-600":null}`}>
         <Link href={"/friends"}>
         <button className="hover:bg-gray-200 text-gray-600 p-3 rounded-sm">Friends</button>
         </Link>
        </li>
      </ul>
      </div>
    </div>
   </header>
   )
}