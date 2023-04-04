import React from "react";
import "../students.css";
import Button from "../../UI/button/button";
import PropTypes from "prop-types";
const Student = (props) => {
  let {
    name,
    id,
    phoneNumber,
    phoneNumberChanged,
    email,
    emailChanged,
    deleted,
  } = props;
  return (
    <div className="students">
      <label>شماره پرسنلی :{id}</label>
      <label>نام و نام خانوادگی</label>
      <input type="text" value={name} onChange={name} disabled />

      <label>شماره تلفن</label>
      <input
        type="number"
        value={phoneNumber}
        onChange={phoneNumberChanged}
        disabled
      />

      <label>ایمیل</label>
      <input type="email" value={email} onChange={emailChanged} disabled />

      <label>
        <Button btnType="danger" clicked={deleted}>
          حذف
        </Button>
      </label>
    </div>
  );
};
export default React.memo(Student);
Student.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.any.isRequired,
  email: PropTypes.string.isRequired,
  deleted: PropTypes.func.isRequired,
};
