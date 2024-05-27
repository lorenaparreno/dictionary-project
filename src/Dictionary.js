import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionResponse(response) {
        setResults(response.data[0]);
    }

    function handleShecodesResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        // documentation: https://dictionaryapi.dev/e
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionResponse);

        let shecodesApiKey =
            "130f33ffoc5t4fdc244afb86281fdf02";
        let shecodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=130f33ffoc5t4fdc244afb86281fdf02`;
        let headers = { Authorization: `${shecodesApiKey}` };
        axios.get(shecodesApiUrl, { headers: headers }).then(handleShecodesResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1><strong>DICTIONARY</strong>
                        <br />
                        <br />
                        What word do you want to look up?</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="search"
                            onChange={handleKeywordChange}
                            defaultValue={props.defaultKeyword}
                        />
                    </form>
                    <div className="hint">
                        i.e.: sunset, yoga, mountain...
                    </div>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
        );
    } else {
        load();
        return "Loading";
    }
}