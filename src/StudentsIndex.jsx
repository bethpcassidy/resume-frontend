export function StudentsIndex(props) {
  return (
    <div id="student-index">
      <h1 className="text-center">Resumes!!</h1>
      <br />
      <div className="posts row text-bg-light mb-3">
        {props.students.map((student) => (
          <div className="col-4" key={student.id}>
            <br />
            <h2 className="card-title text-center">
              {student.last_name}, {student.first_name}
            </h2>
            <br />
            <div>
              <img src={student.photo_url} className="card-img-top rounded mx-auto d-block" alt="" />
            </div>
            <br />
            <div className="d-grid gap-2 mx-auto">
              <button className="btn btn-dark" onClick={() => props.onShowStudents(student)}>
                Profile
              </button>
              <br />
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
