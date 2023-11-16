"use client";
import { useState } from "react";
import PostHeader from "./PostsHeader";
import PostList from "./PostList";

export default function PostContent(){
    const [view,setView] = useState<"list"|"grid">("list")
    return (
        <section>
            <PostHeader
            view={view}
            setView={setView}
            />
            <PostList/>
        </section>
    )
}