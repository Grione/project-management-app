import classes from './Sidebar.module.css';

export default function Sidebar({onClick, projects}) {
  return (
    <aside className={classes.aside}>
      <h1 className={classes.title}>Your Projects</h1>
      <button onClick={onClick} className={classes.button}>+ Add Project</button>
      <ul className={classes.projects}>
        {projects?.map((project, index)=> {
          return <li key={index}>{project.title}</li>
        })}
      </ul>
    </aside>
  )
}