import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data);
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);

        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=130f33ffoc5t4fdc244afb86281fdf02`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <section>
                <form onSubmit={search}>
                    <label>What word do you want to look up? 🧐</label>
                    <input type="search" onChange={handleKeywordChange} id="search-engine" placeholder="Search for a word 🔍" />
                </form>
                <small className="hint">i.e. yoga, mountain, sunset</small>
            </section>
            <Results results={results} />
        </div>
    );
}