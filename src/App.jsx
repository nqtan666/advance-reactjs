import { useState } from 'react'
import './App.css';
import NavBar from './components/Header/NavBar';
import Content from './components/Main/Content';
import Footer from './components/Footer/Footer';

import Lesson4 from '../src/lessons/Lesson4/Lesson4'
import Lesson5 from '../src/lessons/Lesson5/Lesson5'
import Lesson6 from '../src/lessons/Lesson6/Lesson6'
import Lesson7 from '../src/lessons/Lesson7/Lesson7'
import Lesson8 from '../src/lessons/Lesson8/Lesson8'
import Lesson9 from '../src/lessons/Lesson9/Lesson9'
import Lesson10 from '../src/lessons/Lesson10/Lesson10'
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      {/* <Content
        count={count}
        setCount={setCount}
      /> */}
      {/* <Lesson4 /> */}
      {/* <Lesson5 /> */}
      {/* <Lesson6 /> */}
      {/* <Lesson7 /> */}
      {/* <Lesson8 /> */}
      {/* <Lesson9 /> */}
      <Lesson10 />
      <Footer />
    </div>
  )
}

export default App
