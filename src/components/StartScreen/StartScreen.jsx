import classes from './StartScreen.module.css';
import logo from '../../assets/no-projects.png';

export default function StartScreen({createProject}) {
  return (
    <div className={classes.start_screen}>
      <img src={logo} alt="" className={classes.logo}/>
      <h2 className={classes.title}>No Project Selected</h2>
      <p className={classes.text}>
        Select a project or get started with a new one
      </p>
      <button className={classes.button} onClick={createProject}>Create new project</button>
    </div>
  )
}