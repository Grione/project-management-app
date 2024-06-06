import classes from './AddProject.module.css';
import { useRef } from 'react';

export default function AddProject({ onSubmit }) {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const dateRef = useRef(null);

  function handlerCreateProject() {
    const newProject = {
      title: titleRef.current.value,
      description: descRef.current.value,
      date: dateRef.current.value
    }

    onSubmit(newProject);
  }

  return (
    <div className={classes.add_project}>
      <div className={classes.buttons}>
        <button className={classes.button_secondary}>Cancel</button>
        <button onClick={handlerCreateProject} className={classes.button_primary}>Save</button>
      </div>
      <div className={classes.inputs}>
        <div className={classes.input_row}>
          <label>Title</label>
          <input type="text" ref={titleRef}  className={classes.input}/>
        </div>
        <div className={classes.input_row}>
          <label>Description</label>
          <textarea ref={descRef} className={classes.input}></textarea>
        </div>
        <div className={classes.input_row}>
          <label>Due Date</label>
          <input type='date' ref={dateRef}  className={classes.input}/>
        </div>
      </div>
    </div>
  )
}