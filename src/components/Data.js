import { DataButton, List, H2, LI } from './Data.styled.js'
import { Component } from 'react';

export class Data extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    goodClick = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    };
    neutralClick = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };
    badClick = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
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
        const totalFeedback = this.countTotalFeedback();
        const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
        <div>
            <H2>
                Please leave feedback
            </H2>
            <DataButton onClick={this.goodClick}>
                Good
            </DataButton>
            <DataButton onClick={this.neutralClick}>
                Neutral
            </DataButton>
            <DataButton onClick={this.badClick}>
                Bad
            </DataButton>
            <H2>
                Statistics
            </H2>
            <List>
                <LI >Good: {this.state.good}</LI>
                <LI>Neutral: {this.state.neutral}</LI>
                <LI>Bad: {this.state.bad}</LI>
                <li>Total: {totalFeedback} </li>
                <li>Positive Feedback Percentage: {positiveFeedbackPercentage}%</li>
            </List>
        </div>)
}
}