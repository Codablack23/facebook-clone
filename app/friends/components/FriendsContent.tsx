import FriendsFilter from "./FriendFilters";
import FriendsList from "./FriendsList";
import FriendsHeader from "./Header";

export default function FriendsContent(){
    return (
        <section className="bg-white rounded-md p-4">
            <FriendsHeader/>
            <FriendsFilter
            activeTab=""
            />
            <FriendsList/>
        </section>
    )
}