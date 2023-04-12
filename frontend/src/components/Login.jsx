import { useState } from "react";

export default function Login({ setHasKey }) {
    const [keyValue, setKeyValue] = useState("");

    function saveKey() {
        localStorage.setItem("apikey", keyValue);
        setHasKey(true);
    }

    return (
        <form onSubmit={saveKey} className="flex text-lg pt-10">
            <fieldset className="mx-auto w-1/3  p-4 flex flex-col bg-mygrey rounded">
                <label className="">Paste your API key</label>
                <input
                    className="bg-mygrey border-2 border-white rounded-md p-2 my-5 max-w-prose"
                    onChange={(event) => {
                        console.log(event.target);
                        console.log(event.target.value);
                        setKeyValue(event.target.value);
                    }}
                    type="password"
                    name="key"
                    value={keyValue}
                />
                <div className="flex justify-center">
                    <button
                        className="border-2 border-white rounded-lg p-1 px-3 mt-2"
                        type="submit"
                    >
                        Save
                    </button>
                </div>
            </fieldset>
        </form>
    );
}
