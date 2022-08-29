import "./accountmy.scss";
import { useEffect, useState } from "react";
import { useAuth } from "../../../Hooks/useAuth";
import axios from "axios";
import styled from "styled-components";

export const MyAccount = () => {
  const { token, setToken } = useAuth();
  const [account, setAccount] = useState([]);

  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/user/me`, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => setAccount(res.data))
      .catch((err) => console.log(err));
  }, [token]);

  const funcAccount = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const { first_name, last_name, phone, image } = evt.target.elements;

    formData.append("first_name", first_name.value);
    formData.append("last_name", last_name.value);
    formData.append("phone", phone.value);
    formData.append("image", image.files[0]);
    axios
      .put(`https://book-service-layer.herokuapp.com/user/account`, formData, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="mt-4 pt-1">
      <form onSubmit={funcAccount} action="" className="d-flex mt-5">
        <div className="d-flex flex-column mx-5 ">
          <img
            className="rounded-circle mb-3"
            src={`https://book-service-layer.herokuapp.com/${account.image}`}
            width={200}
            height={200}
            alt=""
          />
          <Label className="labe">
            Upload cover
            <Input type="file" name="image" className="inp" />
          </Label>
        </div>
        <div>
          <div>
            <h3 className="mb-3">My profile</h3>
            <h5 className="m-0 p-1">First Name</h5>
            <input
              className="form-control accountmy__input"
              type="text"
              name="first_name"
              placeholder='Name'
            />

            <p>Please enter your first name.</p>
            <h5 className="m-0 p-1">Last Name</h5>
            <input
              className="form-control accountmy__input"
              type="text"
              name="last_name"
              placeholder='Firstname'
            />
            <p>Please enter your last name.</p>
            <h5 className="m-0 p-1">Phone</h5>
            <input
              className="form-control accountmy__input"
              type="tel"
              name="phone"
              placeholder='Number'
            />
            <p>Please enter your  phone number.</p>
            <button className="accountmr__btn" type="submit">
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const Label = styled.label`
  cursor: pointer;
  width: 200px;
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
  color: #ffffff;
  padding: 5px;
  background: #152540;
  border-radius: 99px;
  text-align: center;
`
const Input = styled.input`
  display: none;
`
