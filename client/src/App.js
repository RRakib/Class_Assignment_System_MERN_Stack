// Imports
import React, { Component } from 'react';
import Footer from "./Components/Footer/Footer"
import Display from "./Components/Display/Display";
import StudentForm from "./Components/Form/StudentForm"

// Statefull Component
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Class Assignment System</h1>
        <StudentForm /> 
        <Footer />
      </div>
    );
  }
}

// Exports
export default App;
