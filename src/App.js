import './App.css';
import './scss/reset.scss';
import './scss/all.scss';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './pages/Home';
import Me from './pages/Me';
import Header from './components/Header';
import Footer from './components/Footer';
import Developed from './components/Developed';
import { useState } from 'react';



function App() {
  const [language, setLanguage] = useState(0);

  return (
    <BrowserRouter>
    <Header setLanguage={setLanguage} language={language}/>
    {/* <Routes>
      <Route exact path="/" element={<Home language={language}/>} />
      <Route path="/" element={<Home language={language}/>} />
      <Route exact path="/fl-renu" element={<Home language={language}/>}/>
      <Route exact path="/me" element={<Me language={language}/>}/>
      <Route path="users" element={<Users />}>
        <Route path="me" element={<OwnUserProfile />} />
        <Route path=":id" element={<UserProfile />} />
      </Route>
    </Routes> */}
    <Home language={language}/>
    <Footer setLanguage={setLanguage} language={language}/>
    <Developed />
  </BrowserRouter>
  );
}

export default App;