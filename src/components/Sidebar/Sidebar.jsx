import classes from './Sidebar.module.css';
import SidebarItem from './SidebarItem';

export default function Sidebar({ onClick, projects, openProject, activeProject }) {

  return (
    <aside className={classes.aside}>
      <h1 className={classes.title}>Your Projects</h1>
      <button onClick={onClick} className={classes.button}>+ Add Project</button>
      <ul className={classes.projects}>
        {projects?.map((project, index) => {
          return (
            <SidebarItem 
            key={index}
            project={project} 
            onClick={openProject}
            active={activeProject}
            />
          )

        })}
      </ul>
    </aside>
  )
}