import classes from './Sidebar.module.css';

export default function SidebarItem({ project, active, onClick }) {

  const activeClass = active === project;

  function clickHandler(project) {
    onClick(project);
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