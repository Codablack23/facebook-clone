"use client";
import { useState } from "react";
import PostHeader from "./PostsHeader";

export default function PostContent(){
    const [view,setView] = useState<"list"|"grid">("list")
    return (
        <section>
            <PostHeader
            view={view}
            setView={setView}
            />
        </section>
    )
}