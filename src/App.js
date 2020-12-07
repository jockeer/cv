import React,{Fragment} from 'react';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
function App() {
  return (
    <Fragment>
      <Header/>
      <div className="container-app">
        <h1>Titulo</h1>
      </div>
      <Footer/>

    </Fragment>
    
  );
}

export default App;
