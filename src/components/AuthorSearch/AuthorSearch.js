import { useEffect, useState, useRef, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import search_img from "../../Img/search.png"

export const AuthorSearch = () => {
  const [data, setData] = useState({});

  function funkSearch(evt) {
    evt.preventDefault();

    const { inputEl } = evt.target.elements;

    axios
      .get(
        `https://book-service-layer.herokuapp.com/author/search?author=${inputEl.value}`
      )
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div >
        <Search__beg>
          <Search__box>
            <Search__title>
              Search
            </Search__title>
            <form onSubmit={funkSearch} className="d-flex">
              <Search__input
                name="inputEl"
                type="text"
                placeholder={"Search"}
              />
              <Button__search type="submit">
                <img src={search_img} alt="" width={24} height={24} />
                Submit
              </Button__search>
            </form>
          </Search__box>
        </Search__beg>
        <Box__search>
          {data.length &&
            data.map((e) => (
              <Searcha__item>
                <div>
                  <img
                    className="mx-5"
                    src={`https://book-service-layer.herokuapp.com/${e.image}`}
                    width={200}
                    height={250}
                    alt=""
                  />
                </div>
                <div className="mx-5">
                  <h2>{e.first_name}</h2>
                  <h2>{e.last_name}</h2>
                  <div>
                    <strong>{e.date_of_birth}</strong>
                    <strong>-</strong>
                    <strong>{e.date_of_death}</strong>
                  </div>
                  <p>{e.bio}</p>
                </div>
              </Searcha__item>
            ))}
        </Box__search>
      </div>
    </>
  );
};

const Search__beg = styled.div`
  position: relative;
  width: 1320px;
  background-color: #191919;
  margin: 0 auto;
`;

const Search__box = styled.div`
  position: absolute;
  left: 100px;
  top: -220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 1060px;
  padding-top: 40px;
  padding-bottom: 36px;
  background-color: #191919;
  box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

const Search__title = styled.h2`
  margin-bottom: 13px;
  font-weight: 400;
  font-size: 31px;
  line-height: 34px;
  color: #c9ac8c;
`;

const Search__input = styled.input`
  width: 710px;
  padding-left: 15px !important ;
  padding-right: 15px !important;
  padding-left: 27px !important ;
  border: none;
  background: #404040;
  border-radius: 15px;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.3);
`;

const Button__search = styled.div`
  margin-left: 15px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 40px;
  padding-right: 48px;
  background: #c9ac8c;
  border-radius: 15px;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #3c2710;
`;

const Box__search = styled.div`
  width: 1000px;
  margin: 0 auto;
  margin-top: 160px;
`;

const Searcha__item = styled.div`
  display: flex;
  margin-bottom: 20px;
  color: #fff;
`;

