import Link from "next/link";

export default function FriendsHeader(){
    return (
       <header className="md:flex items-center">
        <div className="flex-1">
        <p className="font-semibold text-xl">Friends</p>
        </div>
        <div className="flex gap-2 bg-gray-100 my-2 p-2 rounded-3xl flex-1">
          <i className="bi bi-search"></i>
          <div className="flex-1">
            <input 
            placeholder="Search"
            style={{background:"none",outline:"none"}}
            className="w-full placeholder:text-black" />
          </div>
        </div>
        <div className="flex-1 flex gap-3 items-center md:justify-end">
           <Link href={"/friends/requests"}>
            <button className="text-blue-600 p-2">Friend Requests</button>
           </Link>
          <Link  href={"/friends/find"}>
          <button className="text-blue-600 p-2">Find Friends</button>
          </Link>
        </div>
       </header> 
    )
}