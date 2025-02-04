import "./App.css";
//import UserPage from './components/userPage/UserPage'
//import Lesson09 from './lessons/lesson09/Lesson09'
//import FetchFox from './components/fetchFox/FetchFox'
import { HashRouter, Route, Routes } from "react-router-dom";
//import RandomFox from './lessons/fox/RandomFox'
//import Lesson07 from './lessons/lesson07/Lesson07'
//import Lesson08 from './lessons/lesson08/Lesson08'
//import Lesson06 from './lessons/lesson06/Lesson06'
import Layout from "./components/layout/Layout";
import Lesson05 from "./lessons/lesson05/Lesson05";
import FetchFox from "./components/fetchFox/FetchFox";
import NoPage from "./components/noPage/NoPage";
import Lesson04 from "./lessons/lesson04/Lesson04";
import Lesson06 from "./lessons/lesson06/Lesson06";
import Lesson07 from "./lessons/lesson07/Lesson07";
import HomePage from "./components/homePage/HomePage";

function App() {
  return (
    //оборачиваем все приложение в особый компонент hashRouter из библиотеки React Router Dom
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Lesson06/> */}
          {/* <Lesson07/> */}
          {/* <Lesson08/> */}
          {/* <RandomFox/> */}
          {/* <FetchFox/> */}
          {/* <h1 className='heading'>Frontend!</h1> */}
          {/* <Lesson09/> */}
          {/* <UserPage/> */}

          <Route path="/" element={<HomePage/>} />
          <Route path="fellowship" element={<Lesson05 />} />
          <Route path="fetch-fox" element={<FetchFox />} />
          <Route path="*" element={<NoPage/>}/>
          <Route path="lesson04" element={<Lesson04/>}/>
          <Route path="Lesson05" element={<Lesson04/>}/>
          <Route path="Lesson06" element={<Lesson06/>}/>
          <Route path="Lessono7" element={<Lesson07/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
