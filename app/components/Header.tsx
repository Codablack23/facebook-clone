export default function Header(){
    return(
        <header className="p-2 px-5 bg-white shadow items-center flex sticky top-0 z-[100]">
          <div>
            <i className="bi bi-facebook text-blue-600 text-4xl"></i>
          </div>
          <div className="flex items-center ml-auto">
            <button className="h-10 w-10 bg-gray-100 rounded-full"></button>
          </div>
        </header>
    )
}