export function ResumesShow(props) {
  return (
    <div>
      <h1>Resume</h1>
      <p>First_name: {props.resume.first_name}</p>
      <p>Last_name: {props.resume.last_name}</p>
      <p>Email: {props.resume.email}</p>
      <p>Phone_number: {props.resume.phone_number}</p>
      <p>Short_bio: {props.resume.short_bio}</p>
      <p>Linkedin_url: {props.resume.linkedin_url}</p>
      <p>Twitter_handle: {props.resume.twitter_handle}</p>
      <p>Personal_website_url: {props.resume.personal_website_url}</p>
      <p>Online_resume_url: {props.resume.online_resume_url}</p>
      <p>Github_url: {props.resume.github_url}</p>
      <p>Photo_url: {props.resume.photo_url}</p>

      <h1> Education </h1>
      <p>Student_id: {props.resume.student_id}</p>
      <p>Start_date: {props.resume.start_date}</p>
      <p>End_date: {props.resume.end_date}</p>
      <p>Degree: {props.resume.degree}</p>
      <p>University_name: {props.resume.university_name}</p>
      <p>Details: {props.resume.details}</p>
    </div>
  );
}