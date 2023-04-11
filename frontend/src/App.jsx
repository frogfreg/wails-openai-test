import { namesFetcher } from "./utils.js";
import useSWR from "swr";
import Login from "./components/Login";

export default function App() {
    const { data } = useSWR("something", namesFetcher);

    let content = <Login />;

    if (data) {
        console.log(data);
        // content = <div>{data}</div>;
    }

    return (
        <div>
            React inside rails
            <div>{content}</div>
        </div>
    );
}
