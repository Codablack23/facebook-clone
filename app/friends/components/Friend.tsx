export default function Friend(){
    return (
        <li className="flex items-center border border-gray-100 rounded-md p-4 gap-4 gap-y-8">
            <div>
                <div className="h-16 w-16 rounded-md bg-gray-200"></div>
            </div>
            <div>
              <p className="text-lg font-semibold">Jane Doe 1</p>
              <p className="text-sm text-gray-400">10 mutual friends</p>
            </div>
            <div className="ml-auto">
               <button>
                   <i className="bi bi-three-dots"></i>
               </button>
            </div>
        </li>
    )
}