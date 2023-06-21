
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [gender, setGender] = useState("");
  return (
    <div>
      {/* Do not remove the main div */}
      <h2>Select your gender:</h2>
      <input type="radio" id="male" name="gender" value="male"
        onClick={(e) => setGender(e.target.value)} />
      <label for="male">Male</label>
      <input type="radio" id="female" name="gender" value="female"
        onClick={(e) => setGender(e.target.value)} />
      <label for="female">Female</label>

      {
        gender && (
          gender === "male" ?
            (
              <div>
                <h2>Select your shirt size:</h2>
                <select name="shirt" id="shirt" >
                  <option value="">Select Size</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">large</option>
                </select>
              </div>
            )
            :
            (
              <div>
                <h2>Select your dress size:</h2>
                <select name="dress" id="dress" >
                  <option value="">Select Size</option>
                  <option value="2">2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                </select>

              </div>
            )
        )
      }
    </div>
  )
}

export default App
