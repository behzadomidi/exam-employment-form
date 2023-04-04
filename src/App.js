import React, { useState, useEffect, useRef } from "react";
import Students from "./components/students/students";
import "./App.css";
import Button from "./components/UI/button/button";
import NewStudent from "./components/students/newStudent/newStudent";
import Toolbar from "./containers/Header/Toolbar/Toolbar";

const App = () => {
  const inputEl = useRef(null);
  const [studentsState, setStudents] = useState([]);
  const [arrayHolder, setArrayHolder] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentPhoneNumber, setStudentPhoneNumber] = useState("");
  const [studentEmail, setStudentEmail] = useState("");

  useEffect(() => {
    setArrayHolder(studentsState);
    // inputEl.current.focus();
  }, []);

  const searchFilterFunction = (event) => {
    const itemData = arrayHolder.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = event.target.value.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setStudents(itemData);
    setSearchBarValue(event.target.value);
  };

  const nameChangeHandler = (event, id) => {
    const studentIndex = studentsState.findIndex((student) => {
      return student.id === id;
    });
    const student = { ...studentsState[studentIndex] };
    student.name = event.target.value;
    const students = [...studentsState];
    students[studentIndex] = student;
    setStudents(students);
  };

  const phoneNumberChangedHandler = (event, id) => {
    const studentIndex = studentsState.findIndex((student) => {
      return student.id === id;
    });
    const student = { ...studentsState[studentIndex] };
    student.phoneNumber = event.target.value;
    const students = [...studentsState];
    students[studentIndex] = student;
    setStudents(students);
  };

  const emailChangedHandler = (event, id) => {
    const studentIndex = studentsState.findIndex((student) => {
      return student.id === id;
    });
    const student = { ...studentsState[studentIndex] };
    student.email = event.target.value;
    const students = [...studentsState];
    students[studentIndex] = student;
    setStudents(students);
  };

  const deleteStudent = (index) => {
    const students = [...studentsState];
    students.splice(index, 1);
    setStudents(students);
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const studentNameHandler = (event) => {
    setStudentName(event.target.value);
  };

  const studentPhoneNumberHandler = (event) => {
    setStudentPhoneNumber(event.target.value);
  };

  const studentEmailHandler = (event) => {
    setStudentEmail(event.target.value);
  };

  const addStudent = () => {
    if (studentName.trim()) {
      const newStudentsState = [...studentsState];
      newStudentsState.push({
        id: studentsState.length,
        name: studentName,
        phoneNumber: studentPhoneNumber,
        email: studentEmail,
      });
      setStudents(newStudentsState);
    }
    setStudentName("");
    setStudentPhoneNumber("");
    setStudentEmail("");
  };

  const executeScroll = () => {
    window.scrollTo(0, inputEl.current.offsetTop);
  };

  return (
    <div className="App">
      <Toolbar />
      <NewStudent
        studentName={studentName}
        studentPhoneNumber={studentPhoneNumber}
        studentEmail={studentEmail}
        studentNameHandler={studentNameHandler}
        studentPhoneNumberHandler={studentPhoneNumberHandler}
        studentEmailHandler={studentEmailHandler}
        clicked={addStudent}
      />
      <input
        type="text"
        value={searchBarValue}
        onChange={searchFilterFunction}
        className="search-bar"
        ref={inputEl}
        placeholder="نام و نام خانوادگی ...."
        autoFocus
      />
      <Button btnType="success" clicked={toggleHandler}>
        تغییر وضعیت نمایش
      </Button>
      <Students
        studentsList={studentsState}
        nameChanged={nameChangeHandler}
        phoneNumberChanged={phoneNumberChangedHandler}
        emailChanged={emailChangedHandler}
        deleted={deleteStudent}
        toggle={toggle}
      />
      <Button btnType="primary" clicked={executeScroll}>
        click to scroll
      </Button>
    </div>
  );
};

export default App;
