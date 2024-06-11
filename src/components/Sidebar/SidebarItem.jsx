import classes from './Sidebar.module.css';

export default function SidebarItem({ project, active, openProject }) {

  const activeClass = active === project.id;

  function clickHandler(project) {
    openProject(project);
  }

  return (
    <li
      onClick={() => clickHandler(project)}
      className={activeClass ? classes.active : undefined}
    >
      {project.title}
    </li>
  )
}