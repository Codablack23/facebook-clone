import Friends from "./components/Friends";
import MainLayout from "./components/MainLayout";
import PostContent from "./components/PostContent";

export default function Home() {
  return (
   <MainLayout activeTab="posts">
    <div className="grid grid-cols-5 gap-4">
      <div className="sticky top-0 col-span-2">
        <Friends/>
      </div>
      <div className="col-span-3">
        <PostContent/>
      </div>
    </div>
   </MainLayout>
  )
}
