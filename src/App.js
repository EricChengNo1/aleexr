import React from 'react';

// import Header from './Components/Header';
import Main from './Components/Main';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';

class App extends React.Component{
  render(){
    return (<div>
      {/*<Header />*/}
      <Main />
      <About />
      <Service />
      <Contact />
    </div>)
  }
}
export default App;
