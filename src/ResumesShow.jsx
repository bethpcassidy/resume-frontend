export function ResumesShow(props) {
  return (
    <div>
      <h1>Resume</h1>
 experience
      <p>First_name: {props.resume.First_name}</p>
      <p>Last_name: {props.resume.Last_name}</p>
      <p>Email: {props.resume.Email}</p>
      <p>Phone_number: {props.resume.Phone_number}</p>
      <p>Short_bio: {props.resume.Short_bio}</p>
      <p>Linkedin_url: {props.resume.Linkedin_url}</p>
      <p>Twitter_handle: {props.resume.Twitter_handle}</p>
      <p>Personal_website_url: {props.resume.Personal_website_url}</p>
      <p>Online_resume_url: {props.resume.Online_resume_url}</p>
      <p>Github_url: {props.resume.Github_url}</p>
      <p>Photo_url: {props.resume.Photo_url}</p>

      <h1>Skills</h1>
      <li>Skill Name {props.resume.skill} </li>

      <h2>Capstone</h2>
      <p>Name {props.resume.capstone} </p>
      <p>Description {props.resume.description} </p>
      <p>URL {props.resume.url} </p>
      <p>Screenshot {props.resume.screenshot} </p>




      <div class="float-end">
        <img src={props.resume.photo_url} />
      </div>
      <br></br>



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

      <h1>Experience</h1>
      <h2>Company: {props.resume.company_name}</h2>
      <h4>Job Title: {props.resume.job_title}</h4>
      <p>Start Date: {props.resume.start_date}</p>
      <p>End Date: {props.resume.end_date}</p>
      <p>Job Description:{props.resume.details}</p>



      <p>Photo_url: {props.resume.photo_url}</p>

      <h1> Education </h1>
      <p>Student_id: {props.resume.student_id}</p>
      <p>Start_date: {props.resume.start_date}</p>
      <p>End_date: {props.resume.end_date}</p>
      <p>Degree: {props.resume.degree}</p>
      <p>University_name: {props.resume.university_name}</p>
      <p>Details: {props.resume.details}</p>


main
    </div>
  );
}
