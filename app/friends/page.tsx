import MainLayout from "@/app/components/MainLayout";
import FriendsContent from "./components/FriendsContent";

export default function Home() {
  return (
   <MainLayout activeTab="friends">
     <FriendsContent/>
   </MainLayout>
  )
}