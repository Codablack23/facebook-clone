import FriendRequest from "./Request";

export default function RequestList(){
    return (
        <div className="grid grid-cols-3 gap-4 my-4">
           <FriendRequest/>             
           <FriendRequest/>             
           <FriendRequest/>             
           <FriendRequest/>             
           <FriendRequest/>             
        </div>
    )
}