import React, { useState, useEffect } from 'react';
import axios from './axios';

function Row({ title, fetchUrl }) { // title 변수를 받는 함수임, 고로 <Row title="NETFLIX ORIGINALS" />, 넷플릭스 오리지널이 title에 들어감
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // when the row appears on the screen, make a request, 정확히 row가 로드되면, make a request!
        // if [], run once when the row loads, and don't run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // get this url from axios: https://api.themoviedb.org/3 그리고 fetchUrl from Requests.js
            console.log(request);
            return request;
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>{title}</h2>

            {/* container -> posters */}

        </div>
    )
}

export default Row