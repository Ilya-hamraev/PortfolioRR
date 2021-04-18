import { Route, useLocation } from "react-router-dom";

import Header from "components/UI/Header";
import Footer from "components/UI/Footer";

import Home from "components/Home";
import Page404 from "components/404";
import Contacts from "components/Contacts";
import Works from "components/Works";
import About from "components/About";
import { navigation } from "helpers";

import "assets/styles/reset.css";
import "App.css";

function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isHaveUrl = !navigation.every((i) => i.url !== currentPath);

  const content = isHaveUrl ? (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/works" component={Works} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/about" component={About} />
    </>
  ) : (
    <Page404 />
  );

  return (
    <div className="App">
      <div className="Wrapper">
        <Header />
        <div className="Content">{content}</div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
