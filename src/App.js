import { useAuth } from "./Hooks/useAuth";
import { Register } from "./pages";
import { Main } from "./Main/Main";

function App() {
  const {token, setToken} = useAuth()

  if(token){
     return <Main />
  }
  return <Register/>
}

export default App;

