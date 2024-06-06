import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import StartScreen from "./components/StartScreen/StartScreen";
import AddProject from "./components/AddProject/AddProject";

function App() {
  const [isNewProject, setIsNewProject] = useState(false);
  const [projects, setProjects] = useState([]);

  function handlerCreateProject() {
    setIsNewProject(true);
  }

  function handleAddProject(newProject) {
    setProjects((prevProjects)=> {
      return [
        ...prevProjects, 
        newProject
      ]
    })
  }

  return (
    <>
      <main className="main">
        <Sidebar onClick={handlerCreateProject} projects={projects}/>
        <section className="project-section">
          {isNewProject ? <AddProject onSubmit={handleAddProject} /> : <StartScreen />}
        </section>

      </main>
    </>
  );
}

export default App;
