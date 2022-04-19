import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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

const App = () => {

  const [lang, setLang] = useState("en");
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
              <Route path="/registration/*" element={<Registration/>} />
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
              <Route path="*" element={<Navigate to={"/home"}/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    )
}

export default App;
