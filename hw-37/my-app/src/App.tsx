import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from './hooks/useSelector';
import ClickButton from "./components/click-button/ClickButton";
import Description from "./components/description/Description";
import Header from "./components/header/Header";
import MyButton from "./components/my-button/MyButton";
import Post from "./components/post/Post";
import PostsWrap from "./components/posts-wrap/PostsWrap";
import Registration from "./components/registration/Registration";
import Timer from "./components/timer/Timer";
import Title from "./components/title/Title";
import SubmitButton from "./components/ui/submit-button/SubmitButton";
import TextField from "./components/ui/text-field/TextField";
import PostsWrapFront from "./components/posts-wrap-front/PostsWrapFront";
import Login from "./components/login/Login";

const App = () => {

  const [lang, setLang] = useState("en");
  const logged = useSelector(state => state.auth.logged);
    return (
      <BrowserRouter>
        <div className='my-app'>
          <Header/>
          <div className="app-content">

            <Title />
            {/*
            <div className="button-wrap">
              <MyButton text='Main Button' colorClass='red' />
              <MyButton text="Main Button2" />
              <MyButton colorClass='blue' />
            </div>
            */}
            
            {/* <Registration /> */}

            {/* <ClickButton /> */}
            {/* <Timer /> */}
            {/* <PostsWrap /> */}

            {/* <Post id={12} /> */}

            <Routes>
            <Route path="/clicker/" element= {
                <div>
                  <ClickButton/>
                  <ClickButton/>
                  <ClickButton/>
                </div>
              } />

              {!logged &&
                  <>
                    <Route path="/login/*" element={<Login/>} />
                  </>
              }
              <Route path="/home" element={
                <div>
                  <Description />
                  <Description />
                </div>
              }>
                
              </Route>
              <Route path="/posts" >
                <Route index element={<PostsWrap/>} />
                <Route path=":id" element={<Post/>} />
              </Route>
              <Route path="/posts-front" >
                <Route index element={<PostsWrapFront/>} />
                <Route path=":id" element={<Post/>} />
              </Route>
              <Route path="*" element={<Navigate to={"/home"}/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    )
}

export default App;
