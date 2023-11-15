// import Image from "next/image";

import { Image } from "antd";



export default function Page(){
    return(
        <section className="flex items-center min-h-screen max-w-5xl mx-auto">
            <div className="flex-1">
                <div >
                <Image
                src={"/facebook-logo-1.svg"}
                alt="Facebook Logo"
                width={"60%"}
                className="-ml-8 -mb-4"
                height={"100%"}
                preview={false}
                />
                </div>
                <p className="text-2xl">Facebook helps you connect and share with the people in your life.</p>
            </div>
            <div className="flex-1">
                <form action="" className="mx-auto max-w-md bg-white shadow-sm min-h-[300px] p-4">
                    <input type="text" className="border border-gray-200 block w-full p-2 rounded-md my-3" placeholder="Email address or Phone Number" />
                    <input type="password" className="border border-gray-200 block w-full p-2 rounded-md my-3" placeholder="Password" />
                    <button className="my-5 bg-blue-500 text-white rounded-md text-xl w-full py-2">Login</button>
                </form>
            </div>
        </section>
    )
}