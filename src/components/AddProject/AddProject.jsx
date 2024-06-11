import classes from './AddProject.module.css';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function validateRequaredInput(value) {
  if (!value) return false;

  if (value.trim().length < 1) return false;

  return value;
}

export default function AddProject({ onSubmit, onCancel }) {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const dateRef = useRef(null);

  const [isValidName, setIsValidName] = useState(null);

  function handlerCreateProject() {
    const validatedValue = validateRequaredInput(titleRef.current.value);

    if (!validatedValue) {
      setIsValidName(false);
      return;
    };

    const newProject = {
      id: uuidv4(),
      title: titleRef.current.value,
      description: descRef.current.value,
      date: dateRef.current.value,
      tasks: [],
    }

    onSubmit(newProject);
  }

  function handlerOnChange() {
    setIsValidName(null);
  }

  return (
    <div className={classes.add_project}>
      <div className={classes.buttons}>
        <button onClick={onCancel} className={classes.button_secondary}>Cancel</button>
        <button onClick={handlerCreateProject} className={classes.button_primary}>Save</button>
      </div>
      <div className={classes.inputs}>
        <div className={classes.input_row}>
          <label>Title*</label>
          <input type="text" ref={titleRef} className={classes.input} onChange={handlerOnChange} required />
          {isValidName === false ? <p>Enter the title project</p> : undefined}
        </div>
        <div className={classes.input_row}>
          <label>Description</label>
          <textarea ref={descRef} className={classes.input}></textarea>
        </div>
        <div className={classes.input_row}>
          <label>Due Date</label>
          <input type='date' ref={dateRef} className={classes.input} />
        </div>
      </div>
    </div>
  )
}