import Description from "./components/description/Description";
import MyButton from "./components/my-button/MyButton";
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
      </div>
    )
}

export default App;
