export default function Project({project}) {
  return (
    <section>
      <h1>{project.title}</h1>
      <span>{project.date}</span>
      <p>{project.description}</p>
    </section>
  )
}