import { userState } from "react";
import { Hello } from "./components/Hello";

function App() {
  // Inicializei um estado com o valor inicial false
  // Descontrução de array (pesquisar estudar)
  const [userState, serUserState] = userState(false);
  // Neste momento , userState esta com o valor de false

  //setTimeout(function () {
    // estou logando o usuario
    //setUserState(true);
  //}, 5000);

  return <Hello setUserState={setUserState} isLogged={userState} username="Camila" />;
}

export default App
