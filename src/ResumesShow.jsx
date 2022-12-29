export function ResumesShow(props) {
  return (
    <div>
      <h1>Resume</h1>
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
    </div>
  );
}
