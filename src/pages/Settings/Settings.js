import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/authContext"
import { Link,Route,Routes } from "react-router-dom" 
import {SettingsProfile} from "../SettingsProfile/SettingsProfile"
import {SettingsSecurity} from "../SettingsSecurity/SettingsSecurity"
import {SettingsOther} from "../SettingsOther/SettingsOther"
export const Settings = () => {
  const { token } = useContext(AuthContext);

  const [me, setMe] = useState({});
  useEffect(() => {
    axios
      .get("https://book-service-layer.herokuapp.com/user/me", {
        headers: {
          Authorization: token.token,
        }
      })
      .then((res) => setMe(res.data))
      .catch((error) => console.log(error));
  }, [token]);
  return(
    <div>
      Settings
      <div>
        <Link to="/settings">My account</Link>
        <Link to="security">Security</Link>
        <Link to="other">Other</Link>
      </div>
      <Routes>
        <Route index element={<SettingsProfile item={me} />}></Route>
        <Route path="security" element={<SettingsSecurity item={me} />}></Route>
        <Route path="other" element={<SettingsOther />}></Route>
      </Routes>
    </div>
  )
}