import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

export const MyAcount = () => {
      return (
            <Div>
                  <Link className="me-4 text-decoration-none" to="MyAcount"><P>My account</P></Link>
                  <Link className="me-4 text-decoration-none" to="Acount"><P>Security</P></Link>
                  <Link className="text-decoration-none" to="MAcount"><P>Make Payment</P></Link>
                  <div>
                        <Outlet />
                  </div>
            </Div>
      )
}

const Div = styled.div`
width: 1260px;
margin: 0 auto;
display: flex;
`
const P = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px; 
  color: #152540;
`
