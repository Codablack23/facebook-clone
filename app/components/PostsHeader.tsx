interface PostHeaderProps{
    view:"list"|"grid",
    setView:(view:"list"|"grid")=>void
}

export default function PostHeader(props:PostHeaderProps){
    const handleSetView = (view:"list"|"grid")=>{
      return ()=>{
        props.setView(view)
      }
    }
    return (
        <div className="bg-white rounded-md shadow-sm">
            <header className="p-3 border-b">
                <p className="text-2xl font-semibold">Posts</p>
            </header>
            <div className="flex items-center px-4 pt-2">
                <div className={`pb-2 flex-1 ${props.view === "list"?"border-b-[3px] border-b-blue-600 text-blue-600":""}`}>
                    <button onClick={handleSetView("list")} className={`w-full p-2 ${props.view !== "list"?"hover:bg-gray-200 ":""} rounded-md `}>
                        <i className="bi bi-list text-xl mr-3"></i>
                        <span>List</span>
                    </button>
                </div>  
                <div className={`pb-2 flex-1 ${props.view === "grid"?"border-b-[3px] border-b-blue-600 text-blue-600":""}`}>
                    <button onClick={handleSetView("grid")} className={`w-full p-2 ${props.view !== "grid"?"hover:bg-gray-200 ":""} rounded-md `}>
                        <i className="bi bi-grid text-xl mr-3"></i>
                        <span>Grid</span>
                    </button>
                </div>
            </div>
        </div>
    )
}