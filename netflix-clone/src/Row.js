import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
  // title 변수를 받는 함수임, 고로 <Row title="NETFLIX ORIGINALS" />, 넷플릭스 오리지널이 title에 들어감
  // movies의 기본값은 [] 빈배열, setMovies는 movies의 변수값을 설정한다, 그러므로 그 변수값을 setMovies로 변화시키는게 가능
  const [movies, setMovies] = useState([]);
  // 함수형 컴포넌트에서는 상태관리를 할 수 없었지만 리액트 16.8에서 Hooks라는 기능이 도입되면서 함수형 컴포넌트에서도 상태를 관리할 수 있게 되었다.
  // 스위프트에서는 함수에서 @State값 조정 못하는데, 리액트에서는 가능!

  const [trailerUrl, setTrailerUrl] = useState('');

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

  // console.table(movies);

  const opts = {
    height: '300',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || '')
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          /> // alt 속성은 그림이 렌더링되지 못할 때 나타날 문자열을 지정하기 위한 값
        ))}
      </div>
      {/* opts은 도큐멘테이션에서 여러가지 옵션 확인 가능 */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
