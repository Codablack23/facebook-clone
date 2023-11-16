import Friend from "./Friend";

export default function FriendsList(){
    return(
        <ul className="grid grid-cols-2 my-6 gap-2">
        <Friend/>
        <Friend/>
        <Friend/>
        <Friend/>
        <Friend/>
        </ul>
    )
}