// Imports
import React, { Component } from 'react';
import Display from "./Components/Display/Display";
import StudentForm from "./Components/Form/StudentForm"

// Statefull Component
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Class Assignment System</h1>
        <StudentForm /> 
        <Display />
      </div>
    );
  }
}

// Exports
export default App;
