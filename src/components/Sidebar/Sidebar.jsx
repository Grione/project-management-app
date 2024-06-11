import classes from './Sidebar.module.css';
import SidebarItem from './SidebarItem';

export default function Sidebar({ createProject, projects, openProject, activeProject }) {

  return (
    <aside className={classes.aside}>
      <h1 className={classes.title}>Your Projects</h1>
      <button onClick={createProject} className={classes.button}>+ Add Project</button>
      <ul className={classes.projects}>
        {projects?.map((project) => {
          return (
            <SidebarItem 
            key={project.id}
            project={project} 
            openProject={openProject}
            active={activeProject}
            />
          )

        })}
      </ul>
    </aside>
  )
}