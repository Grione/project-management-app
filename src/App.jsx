import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import StartScreen from "./components/StartScreen/StartScreen";
import AddProject from "./components/AddProject/AddProject";
import Project from "./components/Project/Project";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: []
  })

  function handlerCreateProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: null
      }
    })
  }

  function handleCancelProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined
      }
    })
  }

  function handleAddProject(newProject) {
    setProjectState((prevState) => {
      return {
        selectedProject: newProject.id,
        projects: [...prevState.projects, newProject]
      }
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter((proj) => proj.id !== prevState.selectedProject)
      }
    })
  }

  function handleOpenProject(project) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: project.id,
      }
    });
  }

  function handleUpdateProjects(newTasks) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: projectState.projects.map((pr) => {
          if (pr.id === projectState.selectedProject) {
            return {...pr, tasks: newTasks};
          }
         return pr; 
        })
      }
    })

  }

  const selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProject);

  let content = <Project
    project={selectedProject}
    deleteProject={handleDeleteProject}
    updateProject={handleUpdateProjects} />

  if (projectState.selectedProject === null) {
    content = <AddProject
      onSubmit={handleAddProject}
      onCancel={handleCancelProject}
    />
  } else if (projectState.selectedProject === undefined) {
    content = <StartScreen
      createProject={handlerCreateProject} />
  }

  return (
    <>
      <main className="main">
        <Sidebar
          createProject={handlerCreateProject}
          openProject={handleOpenProject}
          projects={projectState.projects}
          activeProject={projectState.selectedProject}
        />
        <section className="project-section">
          {content}
        </section>

      </main>
    </>
  );
}

export default App;
