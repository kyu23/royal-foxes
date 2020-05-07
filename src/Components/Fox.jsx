/* instead of storing Components inside the App.js we store it in a react file inside the components folder */
import React, {Component} from 'react'

const ranks = [
  "Serf",
  "Yeoman",
  "Knight",
  "Baron",
  "Earl",
  'Count',
  'Duke',
  'Emperor'
];

class Fox extends Component { 
  /* Using State - we are storing Royal Title in a state which will need a constructor as well as a super the properties == used to access and call functions on an object's parent */
  constructor(props) {
    super(props);
    this.state = { 
      currentRank: this.props.rank
      /* have to name it this.state */
      /* because it's an obj, need : and not equal sign */
    }
  }

  levelUp = () => {
    /* alert('level up ${this.props.name}') */
     /* setState is a method change it's set */
    if(this.state.currentRank !== ranks.length-1){
      /* if we hit maximum length of ranks array, we don't do anything */
      this.setState({currentRank: this.state.currentRank+1}, () => {
        if(this.state.currentRank === 7){
          alert("Congrats you're the Emperor now") 
          /* when you click and shows Emperor, have to click it again in order for alert to appear.. need to use a callback function */
          /* have to use arrow function in order to access State */
        }
    }); 
  }
}

  render(){
    return(
      <div className="card col-md-6"> {/* column - medium - 3.... can insert CSS inside f the div className itself */}
      {/* classNames are immutable so if we wanted to change the Royal Title of a Fox, we'd need to create a new function with a variable className we can change called "state" */}
      {/* states are light switches - on/off --> and can change lightswitches */}
        <div className="card-body">
        <h2 className="card-title">
          {this.props.name}
        </h2>
        <p className="card-text">Royal Title: { ranks[this.state.currentRank] }</p> {/* this is where we are creating new columns.. since we created a new constructor, we'll need to change Title to currentTitle */}
        {/* when we are setting Royal Title to a state, we need to change it to this.state.title --> gives us the Royal Title given, and then when button is clicked it goes through the levelUp function to be set to Emperor */}
        <p className="card-text"> Fur Color: {this.props.furColor}</p>
        <button 
        onClick={this.levelUp} /* this is an event of what happens when clicked which is why we created the levelUp function */
        className="btn" style={{
          backgroundColor: "rebeccapurple", 
          color:'#fff'}}
          >Rank Up</button>
        </div>
      </div>
    )
    }
}

export default Fox; /* absolutely need this line on every new Components file */