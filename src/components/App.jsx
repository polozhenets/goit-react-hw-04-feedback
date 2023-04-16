import { FeedbackOptions  } from './FeedbackOptions/FeedbackOptions';
import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const options = ['Good','Neutral','Bad']
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  countTotalFeedback = () =>{
    const {good,neutral,bad} = this.state
    return good+neutral+bad;
  }
  countPositiveFeedbackPercentage = () =>{
    const total = this.countTotalFeedback();
    if(total===0){
      return 0;
    }
    const {good} = this.state;
    return ((good/total)*100).toFixed(2);
  }
  feedBackHandler = (e) =>{
    const choice = e.target.name;
    this.setState((prevState) =>({
      [choice] : prevState[choice]+1
    }))
  }

  render() {
    const {good,neutral,bad} = this.state;
    let total = this.countTotalFeedback()
    return(
    <div style={{
      width: '320px',
      display: 'block',
      color: '#010101',
      margin :'0 auto',    
    }}>
      <Section title="Please leave feedback">
        <FeedbackOptions  options={options} onLeaveFeedback={this.feedBackHandler}/>
      </Section>
      
        
        
      
      {!total
      ?
      <Notification message="There is no feedback"/>
      :
      <Section title="Statistics">
        
        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
      </Section>
    }
    </div>
    )
  }
}
