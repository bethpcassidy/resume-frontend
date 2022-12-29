export function ResumesShow(props) {
  return (
    <div>
      <h1>Resume</h1>
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
    </div>
  );
}