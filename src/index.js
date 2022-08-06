import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App/index.js';

function App({greet,name}){
  return(
    <h1>¡{greet}, {name}!</h1>
  )
}

function withGreet(greet){
  return function WrappedComponentWithGreet(WrappedComponent){
    return function AppWithWathever(props){
      return(
        <React.Fragment>
          <WrappedComponent {...props} greet={greet}/>
          <p>P injected</p>
        </React.Fragment>
      )
    }
  }
}
const AppWithWathever=withGreet("Bonjour")(App);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppWithWathever greet={"Moin"} name={"Jose"} />
  // <App />
  
);
