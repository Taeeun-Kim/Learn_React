import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl }) {
  // title 변수를 받는 함수임, 고로 <Row title="NETFLIX ORIGINALS" />, 넷플릭스 오리지널이 title에 들어감
  // movies의 기본값은 [] 빈배열, setMovies는 movies의 변수값을 설정한다, 그러므로 그 변수값을 setMovies로 변화시키는게 가능
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // when the row appears on the screen, make a request, 정확히 row가 로드되면, make a request!
    // if [], run once when the row loads, and don't run again
    // Whenever I use anything inside useEffect, if there is any variable that is being pulled from outside(예시: fetchUrl은 외부에서 옴),
    // 하지만 useEffect 안에서 쓴다면, 밑으로 가서
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // get this url from axios: https://api.themoviedb.org/3 그리고 fetchUrl from Requests.js
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]); // 여기 빈 배열에 꼭!!! fetchUrl을 넣어줘야 함

  console.table(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie.name}
          /> // alt 속성은 그림이 렌더링되지 못할 때 나타날 문자열을 지정하기 위한 값
        ))}
      </div>
    </div>
  );
}

export default Row;
