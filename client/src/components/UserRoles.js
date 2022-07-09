import React, { useState } from "react";
import axios from "axios";
function UserRoles() {
  const [name, setName] = useState("");
  const [roles, SetRoles] = useState([]);
  const [bcRoles, setBCRoles] = useState(null);
  let rolesObj = [];
  const url = "http://127.0.01:8000/roles/customer-role";

  const handleSubmit = () => {
    roles.map((v) => {
      return rolesObj.push({ role: v });
    });
    console.log("roles", rolesObj);
    const customerRoles = { name, roles: rolesObj };
    console.log(customerRoles);
    axios
      .post(url, customerRoles)
      .then((res) => {
        if (res.status === 201) {
          console.log(res.data);
          setBCRoles(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  function handleChange(e) {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    SetRoles(value);
  }

  return (
    <div className=' w-50 mx-auto'>
      <h3>UserRoles</h3>
      <div className=' border-1'>
        <div className='d-flex form-group my-2'>
          <label htmlFor='title' className='col-form-label text-md-end me-3'>
            Name:
          </label>
          <input
            type='text'
            name='title'
            id='title'
            className='form-control'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='d-flex form-group my-2'>
          <label htmlFor='title' className='col-form-label text-md-end me-3'>
            Roles:
          </label>
          <select
            className='form-select border-2'
            name='countryId'
            aria-label='Default select example'
            multiple
            onChange={handleChange}
          >
            <option value='001 - Admin'>001 - Admin</option>
            <option value='002 - Clinical personnel'>
              002 - Clinical personnel
            </option>
            <option value='003 - Warehouse personnel'>
              003 - Warehouse personnel{" "}
            </option>
          </select>
        </div>
        <div className='form-group my-2 d-flex justify-content-center my-4'>
          <button
            type='submit'
            className='btn btn-primary px-5'
            variant='primary'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        {bcRoles && bcRoles !== [] ? (
          <div className='text-start'>
            <h4>bc-roles for user {name}</h4>
            <pre>{JSON.stringify(bcRoles, undefined, 2)}</pre>
          </div>
        ) : (
          ""
        )}{" "}
      </div>
    </div>
  );
}

export default UserRoles;
