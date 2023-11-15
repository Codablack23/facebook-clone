import { ReactNode } from "react";
import Header from "./Header";
import ProfileHeader from "./ProfileHeader";

interface MainLayoutProps{
    children:ReactNode,
    activeTab:"posts" | "friends"
}
export default function MainLayout(props:MainLayoutProps){
    return(
        <main className="h-[90vh]">
            <Header/>
            <ProfileHeader activeTab={props.activeTab}/>
            <div className="max-w-4xl mx-auto py-4">
                 {props.children}
            </div>
        </main>
    )
}