export default function Friend(){
    return (
        <div className="shadow bg-white rounded-md border">
            <header className="bg-gray-300 rounded-t-md h-[200px]">
            </header>
            <div className="p-4">
            <div className="min-h-[50px] my-2">
                <p className="font-semibold text-lg">Friend Request 1</p>
                <p className="font-semibold text-sm text-gray-600">2 mutual friends</p>
             </div>

            <button className="w-full my-1 rounded-md bg-blue-100 py-2 text-blue-600 font-medium">Add Friend</button>
            <button className="w-full my-1 rounded-md bg-gray-200 py-2 font-medium">Remove</button>
            </div>
        </div>
    )
}