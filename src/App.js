import React, {Component} from 'react' /* need to add { Component } */
import 'bootstrap/dist/css/bootstrap.min.css' /* this imports bootstrap library into here */
/* need to change Javascript to Javascript React in bottom right */
import Fox from './Components/Fox'; /* need to import the Fox component */


function App() {
  return (
    <div className="container">
      <div className="jumbotron"> {/* div.jumbotron for shortcut */}
        <h1>Royal Foxes</h1>
      </div>
      <div className="row"> {/* .row */}
        <Fox /* Fox is expect a name, rank, and color which is set in the Components - Fox.jsx file */
          name='Fantastic Mr. Fox'
          rank={2} /* for numbers, you'll need curly bracket */
          furColor='Auburn'
        />
        <Fox /* Fox is expect a name, rank, and color which is set in the Components - Fox.jsx file */
          name='Michael J'
          rank={4}
          furColor='Silver'
        />
        <Fox /* Fox is expect a name, rank, and color which is set in the Components - Fox.jsx file */
          name='Fox McCloud'
          rank={3}
          furColor='Brownish'
        />
        <Fox /* Fox is expect a name, rank, and color which is set in the Components - Fox.jsx file */
          name='Kurama Kyubi'
          rank={5}
          furColor='Auburn'
        />
        <Fox /* Fox is expect a name, rank, and color which is set in the Components - Fox.jsx file */
          name='Sandy'
          rank={4}
          furColor='Blonde'
        />
      </div>
    </div>
  );
}

export default App;
