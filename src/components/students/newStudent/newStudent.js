import React from "react";
import classes from "./newStudent.module.css";
import Button from "../../UI/button/button";
import WithClass from "../../hoc/WithClass";
import PropTypes from "prop-types";

const NewStudent = (props) => {
  const { studentName, studentPhoneNumber, studentEmail } = props;
  const {
    studentNameHandler,
    studentPhoneNumberHandler,
    studentEmailHandler,
    clicked,
  } = props;

  return (
    <React.Fragment>
      <h1>اضافه کردن کارجوی جدید</h1>
      <label>نام و نام خانوادگی</label>
      <input
        type="text"
        value={studentName}
        onChange={studentNameHandler}
        placeholder="نام ..."
      />

      <label>شماره تلفن</label>
      <input
        type="number"
        value={studentPhoneNumber}
        onChange={studentPhoneNumberHandler}
        placeholder="09..."
      />
      <label>ایمیل</label>
      <input
        type="email"
        value={studentEmail}
        onChange={studentEmailHandler}
        placeholder="example@gmail.com"
      />
      <Button clicked={clicked} btnType="danger">
        اضافه کردن
      </Button>
    </React.Fragment>
  );
};

export default React.memo(WithClass(NewStudent, classes.NewPost));
NewStudent.prototype = {
  studentName: PropTypes.string.isRequired,
  studentPhoneNumber: PropTypes.any.isRequired,
  studentEmail: PropTypes.string.isRequired,
  studentNameHandler: PropTypes.func.isRequired,
  studentPhoneNumberHandler: PropTypes.func.isRequired,
  studentEmailHandler: PropTypes.func.isRequired,
  clicked: PropTypes.func.isRequired,
};
