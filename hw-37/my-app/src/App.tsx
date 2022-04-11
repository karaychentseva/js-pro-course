import { useState } from "react";
import ClickButton from "./components/click-button/ClickButton";
import Description from "./components/description/Description";
import MyButton from "./components/my-button/MyButton";
import PostsWrap from "./components/posts-wrap/PostsWrap";
import Registration from "./components/registration/Registration";
import Timer from "./components/timer/Timer";
import Title from "./components/title/Title";
import SubmitButton from "./components/ui/submit-button/SubmitButton";
import TextField from "./components/ui/text-field/TextField";

const App = () => {

    
    return (
      <div className='my-app'>
        <Title />
        <Description />
        <Description />
        {/*
         <div className="button-wrap">
          <MyButton text='Main Button' colorClass='red' />
          <MyButton text="Main Button2" />
          <MyButton colorClass='blue' />
        </div>
         */}
        
        <Registration />

        {/* <ClickButton /> */}
        {/* <Timer /> */}
        {/* <PostsWrap /> */}
      </div>
    )
}

export default App;
