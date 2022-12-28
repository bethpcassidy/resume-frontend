export function ResumesIndex(props) {
  return (
    <div>
      <h1>All Resumes</h1>
      {props.resumes.map((resume) => (
        <div key={resume.id}>
          <h2>{resume.first_name}</h2>
          <h2>{resume.last_name}</h2>
          <img src={resume.image_url} />
        </div>
      ))}
    </div>
  );
}