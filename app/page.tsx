import Friends from "./components/Friends";
import MainLayout from "./components/MainLayout";
import PostContent from "./components/PostContent";

export default function Home() {
  return (
   <MainLayout activeTab="posts">
    <div className="grid md:grid-cols-5 gap-4">
      <div className="md:sticky top-0 md:col-span-2">
        <Friends/>
      </div>
      <div className="md:col-span-3">
        <PostContent/>
      </div>
    </div>
   </MainLayout>
  )
}
