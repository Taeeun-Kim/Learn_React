import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    // react-router는 코어까지 들어있는 master 브랜치에 있는 라이브러리 입니다.
    // 새로운 페이지를 로드하지 않고 하나의 페이지 안에서 필요한 데이터만 가져오는 형태를 가진다, 즉 SPA의 핵심
    // https://m.blog.naver.com/sejun3278/221797203201 참조
    // 현재의 페이지를 완전히 다시 로드해서 새로 구성을 하느냐, 아니면 필요한 데이터만 가지고 와서 재로드 없이 렌더링하느냐의 차이입니다.
    <Router>
      {/* Switch - 한번에 하나의 Route만 보여줌, ? true : false */}
      <Switch>
        {isLoggedIn ? (
          // <> Fragment 사용 이유: 컴포넌트가 여러 엘리먼트를 return 할때 jsx규칙상 하나의 태그로 묶어서 return 해줘야 한다.
          // div나 span같은걸 쓰기 싫으면, 아무 의미 없지만 묶어주는 <> 사용
          <>
            <Route exact path='/'>
              <Home />
            </Route>
          </>
        ) : (
          <Route exact path='/'>
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
