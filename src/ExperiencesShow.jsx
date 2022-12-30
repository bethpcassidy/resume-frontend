export function ExperiencesShow(props) {
  return (
    <div>
      <p>First_name: {props.experiences.company_name}</p>
      <p>Last_name: {props.experiences.job_title}</p>
      <p>Email: {props.experiences.start_date}</p>
      <p>Phone_number: {props.experiences.end_date}</p>
      <p>Short_bio: {props.experiences.details}</p>
    </div>
  );
}
