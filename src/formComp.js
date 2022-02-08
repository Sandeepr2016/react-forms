import React, { useState, useRef } from 'react';

const FormComp = () => {
  const [formData, setFormData] = useState({});
  const fname = useRef();
  const lname = useRef();
  const formElements = [
    { label: 'firstname', key: 'fname', rf: fname },
    { label: 'lastname', key: 'lname', rf: lname },
  ];

  const formElem = formElements.map((val, ind) => {
    return (
      <div key={val.key}>
        <span>{val.label}</span>
        <input type="text" ref={val.rf} />
      </div>
    );
  });

  const submit = (event) => {
    event.preventDefault();
    let data = {
      ftname: fname.current.value,
      ltname: lname.current.value,
    };
    console.log(data);
  };

  // console.log(formElem);
  return (
    <React.Fragment>
      <h1>Forms</h1>
      <form onSubmit={submit}>
        {formElem}
        <input type="submit" />
      </form>
    </React.Fragment>
  );
};

export default FormComp;
