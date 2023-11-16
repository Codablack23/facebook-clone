interface PostProps{
    [key:string]:any
}

const postText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo molestias architecto, maxime qui, autem nulla quidem similique cupiditate deserunt magni officiis laborum! Fuga sequi illo reprehenderit ut, voluptatem enim unde mollitia praesentium aspernatur nesciunt adipisci nostrum animi, amet cupiditate omnis maiores quasi, tempora eaque maxime aperiam quis laboriosam neque! Omnis quia sapiente debitis cupiditate, nemo nobis doloremque porro velit dicta tempore ipsum? Iure, placeat id? Quia natus, itaque pariatur animi consequuntur facilis non, sequi minus illo iste vero. Sit unde suscipit neque assumenda molestiae fugit, consectetur, fuga excepturi nostrum aliquid veritatis perferendis, quisquam atque omnis illum magni saepe magnam!`
export default function Post(props:PostProps){
   return (
    <li className="min-h-[200px] p-3 py-3 bg-white rounded-md shadow-sm">
      <header className="flex items-center gap-2">
        <div>
            <div className="h-12 w-12 flex items-center justify-center bg-gray-200 rounded-full"></div>
        </div>
        <div className="flex-1">
            <p><span className="font-semibold">Jane Doe</span> is with <span className="font-semibold">John Doe</span> and <span className="font-semibold">30 others</span></p>
            <p className="text-sm">6th November at 12:21</p>
        </div>
        <div>
            <button>
                <i className="bi bi-three-dots text-xl text-blue-600"></i>
            </button>
        </div>
      </header>
      <div className="my-3">
        {postText.length>70?
        <p>{postText.slice(0,70) } ... <span className="font-semibold cursor-pointer">Read More</span></p>
        :<p>{postText}</p>
        }
      </div>
      <div className="flex flex-wrap gap-1 my-2">
        <div className="flex-1 min-w-[250px] h-40 bg-gray-200 rounded-md"></div>
        <div className="flex-1 min-w-[250px] h-40 bg-gray-200 rounded-md"></div>
        <div className="flex-1 min-w-[250px] h-40 bg-gray-200 rounded-md"></div>
        <div className="flex-1 min-w-[250px] h-40 bg-gray-200 rounded-md"></div>
      </div>
      <div className="my-2 flex py-2 border-b">
       <div className="flex items-center gap-1">
        <span className="p-2 bg-gradient-to-r from-blue-400 to-blue-500 h-6 w-6 rounded-full flex items-center justify-center">
            <i className="bi bi-hand-thumbs-up-fill text-white text-xs"></i>
        </span> 
        <p className="text-sm">5</p>
       </div> 
       <div className="flex ml-auto items-center gap-1">
        <p className="text-sm">5</p>
        <span className="">
            <i className="bi bi-chat-fill text-gray-500"></i>
        </span> 
       </div>
      </div>
    </li>
   )
}