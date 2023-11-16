export default function Friend(){
    return (
        <li className="md:flex items-center border border-gray-100 rounded-md p-4 gap-4 gap-y-8">
            <div>
                <div className="h-36 md:h-16 w-full md:w-16 rounded-md bg-gray-200 relative">
                <button className="block md:hidden absolute top-2 right-2">
                   <i className="bi bi-three-dots"></i>
               </button>
                </div>
            </div>
            <div>
              <p className="text-lg font-semibold">Jane Doe 1</p>
              <p className="text-sm text-gray-400">10 mutual friends</p>
            </div>
            <div className="ml-auto hidden md:block">
            <button>
                   <i className="bi bi-three-dots"></i>
             </button>
            </div>
        </li>
    )
}