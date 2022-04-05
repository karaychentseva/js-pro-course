import ClickButton from "./components/click-button/ClickButton";
import Description from "./components/description/Description";
import MyButton from "./components/my-button/MyButton";
import PostsWrap from "./components/posts-wrap/PostsWrap";
import Timer from "./components/timer/Timer";
import Title from "./components/title/Title";

const App = () => {

    return (
      <div className='my-app'>
        <Title />
        <Description />
        <Description />
        <div className="button-wrap">
          <MyButton text='Main Button' colorClass='red' />
          <MyButton text="Main Button2" />
          <MyButton colorClass='blue' />
        </div>
        
        {/* <ClickButton /> */}
        {/* <Timer /> */}
        <PostsWrap />
      </div>
    )
}

export default App;
