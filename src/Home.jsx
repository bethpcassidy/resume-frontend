import { ResumesIndex } from "./ResumesIndex";
import { useState, useEffect } from "react";
// import axios from "axios";

export function Home() {
  const resumes = [
    {
      id: 1,
      first_name: "Tom",
      last_name: "Hanks",
      email: "hanks@hollywood.com",
      phone_number: "555-555-5555",
      bio: "castaway",
      linkedin_url: "linkedin.com",
      twitter_handle: "@hanksinator",
      personal_url: "tomhanksmovies.com",
      online_resume: "link",
      github_url: "link2",
      image_url: "link3",
    },
  ];

  return (
    <div>
      <ResumesIndex resumes={resumes} />
    </div>
  );
}

//   {
//     id: 1,
//     first_name: "Tom",
//     last_name: "Hanks",
//     email: "hanks@hollywood.com",
//     phone_number: "555-555-5555",
//     bio: "castaway",
//     linkedin_url: "linkedin.com",
//     twitter_handle: "@hanksinator",
//     personal_url: "tomhanksmovies.com",
//     online_resume: "link",
//     github_url: "link2",
//     image_url: "link3",
//   },
// ];

// const [resumes, setResumes] = useState([]);

// const handleIndexResumes = () => {
//   console.log("handleIndexResumes");
//   axios.get("http://localhost:3000/resumes.json").then((response) => {
//     console.log(response.data);
//     setResumes(response.data);
//   });
// };

// useEffect(handleIndexResumes, []);
