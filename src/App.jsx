import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import StartScreen from "./components/StartScreen/StartScreen";
import AddProject from "./components/AddProject/AddProject";
import Project from "./components/Project/Project";

function App() {
  const [isNewProject, setIsNewProject] = useState(false);
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(null);

  function handlerCreateProject() {
    setIsNewProject(true);
    setProject(null);
  }

  function handleCancelProject() {
    setIsNewProject(false);
  }

  function handleAddProject(newProject) {
    setProjects((prevProjects) => {
      return [
        ...prevProjects,
        newProject
      ]
    });
    handleCancelProject();
  }

  function handleOpenProject(project) {
    setProject(project);
    setIsNewProject(false);
  }

  return (
    <>
      <main className="main">
        <Sidebar 
          onClick={handlerCreateProject} 
          openProject={handleOpenProject} 
          projects={projects} 
          activeProject={project}
          />
        <section className="project-section">
          {isNewProject && <AddProject
              onSubmit={handleAddProject}
              onCancel={handleCancelProject}
              projects={projects} /> }
          {(!isNewProject && !project) && <StartScreen
              onClick={handlerCreateProject} />}

          {project && <Project project={project} />}
        </section>

      </main>
    </>
  );
}

export default App;
