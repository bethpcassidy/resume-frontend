import { StudentsIndex } from "./StudentsIndex";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import axios from "axios";

import { StudentsShow } from "./StudentsShow";
import { ExperiencesShow } from "./ExperiencesShow";

export function Home() {
  const [students, setStudents] = useState([]);
  // const [experience, setExperiences] = useState([]);
  const [isStudentsShowVisible, setIsStudentsShowVisible] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({});

  const handleIndexStudents = () => {
    console.log("handleIndexStudents");
    axios.get("http://localhost:3000/students.json").then((response) => {
      console.log(response.data);
      setStudents(response.data);
    });
  };
  const handleShowStudent = (student) => {
    console.log("handleShowStudent", student);

    setIsStudentsShowVisible(true);
    setCurrentStudent(student);
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

  useEffect(handleIndexStudents, []);

  return (
    <div>
      <StudentsIndex students={students} onShowStudents={handleShowStudent} />
      <Modal show={isStudentsShowVisible} onClose={handleClose}>
        <h1>Test</h1>
        <StudentsShow student={currentStudent} />
        {/* <ExperiencesShow experiences={experiences} /> */}
      </Modal>
    </div>
  );
}
