import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          // Math.floor()는 어떤 수보다 크지 않은 최대의 정수를 반환합니다.
          // Math.random() 함수는 0 이상 1 미만의 구간에서 근사적으로 균일한 부동소숫점 의사난수를 반환
          // 0.5 * 19 = 9.5 그러면 Math.floor()에 의해 10번째 배열에 들어있는 영화가 나옴
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  // console.log(movie);

  // 글자수 많으면 짜르는 함수
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        {/* movie.title이 없으면 name으로 없으면 original name으로 */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
