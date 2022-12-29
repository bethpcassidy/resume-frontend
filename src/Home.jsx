import { ResumesIndex } from "./ResumesIndex";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
// import axios from "axios";
import { ResumesShow } from "./ResumesShow";

export function Home() {
  const resumes = [
    {
      id: 1,
      first_name: "Tom",
      last_name: "Hanks",
      email: "hanks@hollywood.com",
      phone_number: "555-555-5555",
      short_bio: "castaway",
      linkedin_url: "linkedin.com",
      twitter_handle: "@hanksinator",
      personal_website_url: "tomhanksmovies.com",
      online_resume_url: "link",
      github_url: "link2",
      photo_url: "https://live.staticflickr.com/8389/8514564783_15746cbefc_m.jpg",
    },
    {
      id: 1,
      first_name: "Tom",
      last_name: "Hanks",
      email: "hanks@hollywood.com",
      phone_number: "555-555-5555",
      short_bio: "castaway",
      linkedin_url: "linkedin.com",
      twitter_handle: "@hanksinator",
      personal_website_url: "tomhanksmovies.com",
      online_resume_url: "link",
      github_url: "link2",
      photo_url: "https://live.staticflickr.com/1925/44825384871_4d429f9422_m.jpg",
    },
    {
      id: 1,
      first_name: "Tom",
      last_name: "Hanks",
      email: "hanks@hollywood.com",
      phone_number: "555-555-5555",
      short_bio: "castaway",
      linkedin_url: "linkedin.com",
      twitter_handle: "@hanksinator",
      personal_website_url: "tomhanksmovies.com",
      online_resume_url: "link",
      github_url: "link2",
      photo_url: "https://live.staticflickr.com/592/22586206367_fb97ac43cb_m.jpg",
    },
  ];
  const [isResumesShowVisible, setIsResumesShowVisible] = useState(false);
  const [currentResume, setCurrentResume] = useState({});
  const handleShowResume = (resume) => {
    console.log("handleShowResume", resume);
    setIsResumesShowVisible(true);
    setCurrentResume(resume);
  };
  const handleClose = () => {
    console.log("handleClose");
    setIsResumesShowVisible(false);
  };
  return (
    <div>
      <ResumesIndex resumes={resumes} onShowResumes={handleShowResume} />
      <Modal show={isResumesShowVisible} onClose={handleClose}>
        <h1>Test</h1>
        <ResumesShow resume={currentResume} />
      </Modal>
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
