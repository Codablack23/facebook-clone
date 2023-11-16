import FriendsList from "./FriendsList";
import FindFriendHeader from "./Header";

export default function FindFriendContent(){
    return (
        <section className="my-2 p-2">
            <FindFriendHeader/>
            <FriendsList/>
        </section>
    )
}