import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';


export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleFeedback = type => {
        this.setState(prevState => ({
            [type]: prevState[type] + 1,
        }));
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const totalFeedback = this.countTotalFeedback();
        return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
    };

    render() {
        const { good, neutral, bad } = this.state;
        const totalFeedback = this.countTotalFeedback();
        const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={this.handleFeedback}
                    />
                </Section>

                <Section title="Statistics">
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={totalFeedback}
                        positivePercentage={positiveFeedbackPercentage}
                    />
                </Section>
            </div>
        );
    }
}

