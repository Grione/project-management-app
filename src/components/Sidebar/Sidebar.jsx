import classes from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={classes.aside}>
      <h1 className={classes.title}>Your Projects</h1>
      <button className={classes.button}>+ Add Project</button>
    </aside>
  )
}