import style from "./App.scss";
import WebFont from "webfontloader";
import NavBar from "./NavBar.js";
import MainPage from "./MainPage.js";
import { ProjectPage } from "./ProjectSection";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
function App() {
  //inital setup
  useEffect(() => {
    //loadFont
    WebFont.load({
      google: {
        families: ["Syne"],
      },
    });
  });

  return (
    <>
      <section className="page">
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<MainPage />} />
            <Route path="/project">
              <Route
                path="chain-z"
                element={
                  <ProjectPage
                    name="chain-z"
                    header="Chain Z Project"
                    link="https://minh2301.github.io/Chain-Z/home.html"
                  >
                    This is the first static website project that I created to
                    fulfill a requirement from my school program when I was in
                    11th grade. Our product is a chain for face masks. Please
                    click the link below to visit this website.{" "}
                  </ProjectPage>
                }
              />
              <Route
                path="thriving-thunder"
                element={
                  <ProjectPage
                    name="thriving-thunder"
                    header="Thriving Thunder Project"
                    link="https://hardcore-hoover-49c2f8.netlify.app/?fbclid=IwAR2Dmzpcl-kHFIoJVcImsdAJQp-YBnYWHvwVfSqccn6xhEhYssU2OnvTqio"
                  >
                    This is the second website that I created in 2 weeks when I
                    participated in a competition organized by “The Digibeet,” a
                    small organization that originated from a group of students
                    in Vietnam. Please click the link below to visit this
                    project.
                  </ProjectPage>
                }
              />
            </Route>
          </Route>
        </Routes>
      </section>
    </>
  );
}
export default App;
