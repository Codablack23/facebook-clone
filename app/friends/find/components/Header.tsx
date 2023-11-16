"use client";

import { useRouter } from "next/navigation";

export default function FindFriendHeader(){
    const router = useRouter()

    return(
        <header className="p-2 gap-2">
            <button onClick={router.back} className="h-8 w-8 bg-white rounded-full flex items-center justify-center mb-2">
              <i className="bi bi-arrow-left"></i>
            </button>
           <p className="text-xl font-semibold">People you may know</p>
        </header>
    )
}