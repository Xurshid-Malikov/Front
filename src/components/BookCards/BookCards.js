
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./BookCards"

export const BookCards = ({ item }) => {
  return (
    <NavLink className="ali text-decoration-none p-0 mt-4" to={`/book/${item.id}`} style={{ width: "15%" }}>

        <Img
          src={"https://book-service-layer.herokuapp.com/" + item.image}
        />
        <Name className="mt-2 text-center">{item.title}</Name>

    </NavLink>
  )
}

const Card = styled.ul`
  background: linear-gradient(209.09deg, #191919 -1.68%, #212121 135.36%);
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  border-radius: 15px;
`;

const Img = styled.img`
  width: 100%;
  height: 150px;
  margin: 0;
  border-radius: 10px;
`;

const Name = styled.h4`
  font-size: 20px;
  line-height: 20px;
  color: #C9AC8C;
`;

