import { useState } from "react";
// import { namesFetcher } from "./utils.js";
// import useSWR from "swr";
import Login from "./components/Login";
import Chat from "./components/Chat";

export default function App() {
    // const { data } = useSWR("something", namesFetcher);
    const [hasKey, setHasKey] = useState(false);

    if (localStorage.getItem("apikey") !== null && !hasKey) {
        setHasKey(true);
    }

    let content = <Login setHasKey={setHasKey} />;

    if (hasKey) {
        content = <Chat />;
    }

    console.log(localStorage.getItem("key"));

    return (
        <div>
            React inside rails
            <div>{content}</div>
        </div>
    );
}
