import { StudentsIndex } from "./StudentsIndex";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";

// import axios from "axios";
import { StudentsShow } from "./StudentsShow";

export function Home() {
  const students = [
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
      id: 2,
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
      id: 3,
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
    {
      id: 4,
      first_name: "John",
      last_name: "Adams",
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

  // const experiences = [
  //   {
  //     id: 1,
  //     company_name: "Tom",
  //     job_title: "Hanks",
  //     start_date: "hanks@hollywood.com",
  //     end_date: "555-555-5555",
  //     details: "castaway",
  //   },
  // ];

  // const handleIndexStudents = () => {
  //   console.log("handleIndexStudents");
  //   axios.get("http://localhost:3000/students.json").then((response) => {
  //     console.log(response.data);
  //     setStudents(response.data);
  //   });
  // };

  // const [students, setStudents] = useState([]);
  // const [experiences, setExperiences] = useState([]);
  const [isStudentsShowVisible, setIsStudentsShowVisible] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({});

  const [currentExperiences, setCurrentExperiences] = useState({});
  // const [currentCapstones, setCurrentCapstones] = useState({});
  // const [currentSkills, setCurrentSkills] = useState({});
  // const [currentEducations, setCurrentEducations] = useState({});

  const handleShowStudent = (student) => {
    console.log("handleShowStudent", student);
    setIsStudentsShowVisible(true);
    setCurrentStudent(student);
  };
  const handleShowExperience = (experience) => {
    console.log("handleShowExperience", experience);
    setIsExperiencesShowVisible(true);
    setCurrentExperiences(experience);
  };

  // const handleShowExperiences = (experience) => {
  //   axios.get("http://localhost:3000/experiences.json").then((response) => {
  //     console.log(response.data);
  //     setCurrentExperiences(response.data);
  //   });
  // };

  // const handleShowCapstones = (capstone) => {
  //   axios.get("http://localhost:3000/capstones.json").then((response) => {
  //     console.log(response.data);
  //     setCurrentCapstones(response.data);
  //   });
  // };

  // const handleShowEducations = (education) => {
  //   axios.get("http://localhost:3000/educations.json").then((response) => {
  //     console.log(response.data);
  //     setCurrentEducations(response.data);
  //   });
  // };

  // const handleShowSkills = (skill) => {
  //   axios.get("http://localhost:3000/skill.json").then((response) => {
  //     console.log(response.data);
  //     setCurrentSkills(response.data);
  //   });
  // };

  const handleClose = () => {
    console.log("handleClose");
    setIsStudentsShowVisible(false);
  };

  // useEffect(handleIndexStudents, []);

  return (
    <div>
      <StudentsIndex students={students} onShowStudents={handleShowStudent} />
      <Modal show={isStudentsShowVisible} onClose={handleClose}>
        <h1>Test</h1>
        <StudentsShow student={currentStudent} experience={currentExperiences} />
      </Modal>
    </div>
  );
}
