import RequestHeader from "./Header";
import RequestList from "./RequestList";

export default function RequestContent(){
    return (
        <section className="my-2">
            <RequestHeader/>
            <RequestList/>
        </section>
    )
}