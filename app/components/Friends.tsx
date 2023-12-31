export default function Friends(){
    return (
        <div className="bg-white rounded-md shadow-sm h-[200px] overflow-y-scroll md:min-h-[400px] pb-2 px-3">
            <header className="flex sticky top-0 items-center pt-3 bg-white justify-between">
                <p className="text-xl font-semibold">Friends</p>
                <button className="text-blue-600 p-2 hover:bg-gray-200 rounded-md">See all Friends</button>
            </header>
            <p className="my-1 text-gray-500">643 friends</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                    <div className="h-20 rounded-md bg-gray-200"></div>
                    <p className="text-sm my-1 font-semibold">Friend A</p>
                </div>  
                <div>
                    <div className="h-20 rounded-md bg-gray-200"></div>
                    <p className="text-sm my-1 font-semibold">Friend B</p>
                </div>  
                <div>
                    <div className="h-20 rounded-md bg-gray-200"></div>
                    <p className="text-sm my-1 font-semibold">Friend C</p>
                </div>
            </div>
        </div>
    )
}