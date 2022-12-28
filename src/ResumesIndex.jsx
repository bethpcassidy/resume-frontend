export function ResumesIndex(props) {
  return (
    <div id="resume-index">
      <h1 className="text-center">Resumes!!</h1>
      <br />
      <div className="posts row text-bg-success mb-3">
        {props.resumes.map((resume) => (
          <div className="col-4" key={resume.id}>
            <br />
            <h2 className="card-title text-center">
              {resume.first_name}
              {resume.last_name}
            </h2>
            <div>
              <img src={resume.photo_url} className="card-img-top rounded mx-auto d-block" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// <div>
//   <h1>All Resumes</h1>
//   {props.resumes.map((resume) => (
//     <div key={resume.id}>
//       <h2>{resume.first_name}</h2>
//       <h2>{resume.last_name}</h2>
//       <img src={resume.image_url} />
//     </div>
//   ))}
// </div>
