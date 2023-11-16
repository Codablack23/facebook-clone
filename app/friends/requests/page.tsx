import MainLayout from "@/app/components/MainLayout";
import RequestContent from "./components/RequestContent";
// import FriendsContent from "./components/FriendsContent";

export default function Page() {
  return (
   <MainLayout activeTab="friends">
     <RequestContent/>
   </MainLayout>
  )
}