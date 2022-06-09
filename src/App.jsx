// import { Suspense } from "react";
// import { NavLink } from "react-router-dom";
// import { Switch } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ConverterPage from "./pages/ConverterPage";
import HomePage from "./pages/HomePage";
import CatsPage from "./pages/CatsPage";
import ChecklistPage from "./pages/ChecklistPage";
import ShortListPage from "./pages/ShortListPage";
import QuizPage from "./pages/QuizPage";
import RandomuserPage from "./pages/RandomuserPage";
import NotFoundPage from "./pages/NotFoundPage";
import Nav from "./components/--navigation/Navigation/Nav";
import PostsPage from "./pages/PostsPage";
import SinglePostsPage from "./pages/SinglePostPage";
import EditPost from "./pages/EditPost";
import AboutPage from "./pages/AboutPage";
import Contacts from "./components/--about/Contacts/Contacts";

function App() {
  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<HomePage />} />
          <Route path="cats" element={<CatsPage />} />
          <Route path="converter" element={<ConverterPage />} />
          <Route path="checklist" element={<ChecklistPage />} />
          <Route path="shortlist" element={<ShortListPage />} />
          <Route path="quiz" element={<QuizPage />} />
          <Route path="randomuser" element={<RandomuserPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:id" element={<SinglePostsPage />} />
          <Route path="posts/:id/edit" element={<EditPost />} />
          <Route path="about" element={<AboutPage />}>
            <Route path="contacts" element={<Contacts />} />
            <Route path="team" element={<p>Our team</p>} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      {/* </Suspense> */}
      {/* <nav style={{ borderBottom: "2px solid lightgrey" }}>
        <NavLink to="/" exact className="link" activeClassName="activeLink">
          Home
        </NavLink>
        <NavLink to="/cats" className="link" activeClassName="activeLink">
          Cats
        </NavLink>
        <NavLink to="/converter" className="link" activeClassName="activeLink">
          Currency converter
        </NavLink>
        <NavLink to="/checklist" className="link" activeClassName="activeLink">
          Checklist
        </NavLink>
        <NavLink to="/shortlist" className="link" activeClassName="activeLink">
          Shortlist
        </NavLink>
        <NavLink to="/quiz" className="link" activeClassName="activeLink">
          Quiz
        </NavLink>
        <NavLink to="/randomuser" className="link" activeClassName="activeLink">
          Randomuser
        </NavLink>
      </nav> */}

      {/* <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/cats">
            <CatsPage />
          </Route>
          <Route path="/converter">
            <ConverterPage />
          </Route>
          <Route path="/checklist">
            <ChecklistPage />
          </Route>
          <Route path="/shortlist">
            <ShortListPage />
          </Route>
          <Route path="/quiz">
            <QuizPage />
          </Route>
          <Route path="/randomuser">
            <RandomuserPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Suspense> */}
    </>
  );
}

export default App;
