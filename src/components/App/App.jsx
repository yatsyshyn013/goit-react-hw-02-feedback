import React, { Component } from 'react'

import {FeedbackOptions} from '../FeedbackOptions/FeedbackOptions'
import { FeedbackContainer } from './App.styled'
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';



class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total
      ? Math.floor((this.state.good * 100) / this.countTotalFeedback())
      : 0;
  }

  onLeaveFeedback = option => 
    this.setState(prevState => ({
      [option]: prevState[option] + 1
  }))
  
  
  render() { 
    return (
      <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
       
        <FeedbackContainer>

          <Section title={'Please leave feedback'}>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>

           
          {this.countTotalFeedback() > 0
            ? <Section title={'Statistics'}>
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            </Section>
            : <Notification message={'There is no feedback'}></Notification>
          } 
        </FeedbackContainer>
    </div>);
  }
}
 
export default App;

