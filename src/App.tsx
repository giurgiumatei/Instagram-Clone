import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="App">
        <div className="app__header">
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                 alt="Instagram"
            />
        </div>
      <Post username="suntmatei" caption="Acesta este Radu Lupsa" imageUrl="http://www.cs.ubbcluj.ro/~rlupsa/rlupsa.jpg"/>
      <Post username="suntmatei" caption="Si acesta este Radu Lupsa" imageUrl="http://www.cs.ubbcluj.ro/~rlupsa/rlupsa.jpg"/>
      <Post username="suntmatei" caption="Va vine sa credeti sau nu si acesta este Radu Lupsa" imageUrl="http://www.cs.ubbcluj.ro/~rlupsa/rlupsa.jpg"/>
    </div>
  );
}

export default App;
