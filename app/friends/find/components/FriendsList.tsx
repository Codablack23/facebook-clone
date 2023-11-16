import Friend from "./Friend";

export default function FriendsList(){
    return (
        <div className="grid grid-cols-3 gap-4 my-4">
           <Friend/>             
           <Friend/>             
           <Friend/>             
           <Friend/>             
           <Friend/>             
        </div>
    )
}