export function StudentsShow(props) {
  return (
    <div>
      <h1>Resume</h1>

      <p>First_name: {props.student.first_name}</p>
      <p>Last_name: {props.student.last_name}</p>
      <p>Email: {props.student.email}</p>
      <p>Phone_number: {props.student.phone_number}</p>
      <p>Short_bio: {props.student.short_bio}</p>
      <p>Linkedin_url: {props.student.linkedin_url}</p>
      <p>Twitter_handle: {props.student.twitter_handle}</p>
      <p>Personal_website_url: {props.student.personal_website_url}</p>
      <p>Online_resume_url: {props.student.online_resume_url}</p>
      <p>Github_url: {props.student.github_url}</p>
      <p>Photo_url: {props.student.photo_url}</p>

      {/* <h1>Skills</h1>
      <li>Skill Name {props.student.skill} </li>

      <h2>Capstone</h2>
      <p>Name {props.student.capstone} </p>
      <p>Description {props.student.description} </p>
      <p>URL {props.student.url} </p>
      <p>Screenshot {props.student.screenshot} </p>
      <div class="float-end">
        <img src={props.student.photo_url} />
      </div>
      <br></br>

      <h1> Education </h1>
      <p>Student_id: {props.student.student_id}</p>
      <p>Start_date: {props.student.start_date}</p>
      <p>End_date: {props.student.end_date}</p>
      <p>Degree: {props.student.degree}</p>
      <p>University_name: {props.student.university_name}</p>
      <p>Details: {props.student.details}</p> */}
    </div>
  );
}
