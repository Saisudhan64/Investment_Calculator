import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import { useState } from "react";

function App() {
  let [userInput, updateUserInput] = useState({
    initialInvestment: 10000,
    duration: 15,
    returnPer: 6,
    annualInvestment: 1000,
  });

  function handleInputChange(identifier, newValue) {
    updateUserInput((oldvalue) => {
      return {
        ...oldvalue,
        [identifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onInputChange={handleInputChange} userInput={userInput} />
      {userInput.duration >= 1 ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">please enter a value greater than zero</p>
      )}
    </>
  );
}

export default App;
