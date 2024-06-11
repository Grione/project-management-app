import classes from './Project.module.css';
import { useEffect, useState } from 'react';

export default function Project({ project, updateProject, deleteProject }) {

  const [tasks, setTasks] = useState([...project.tasks]);
  const [taskInput, setTaskInput] = useState('');

  useEffect(() => {
    setTasks([...project.tasks]);
  }, [project.tasks])

  function addTask() {

    const newTasks = [...tasks, taskInput];
    setTasks(newTasks);
    updateProject(newTasks);

    setTaskInput('');
  }

  return (
    <section>
      <button onClick={() => deleteProject()}>Delete</button>
      <h1>{project.title}</h1>
      <span>{project.date}</span>
      <p>{project.description}</p>
      <hr />
      <h2>Tasks</h2>

      <div className={classes.row}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
      </div>

      {project.tasks?.map((task, index) => {
        return <div key={index}>{task}</div>
      })}

    </section>
  )
}