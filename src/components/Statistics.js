import { List, LI } from './Data.styled.js'
import Notification from './Notification'
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
     if (total === 0) {
        return <Notification message="There is no feedback yet." />;
    }
    return (
        <List>
            <LI>Good: {good}</LI>
            <LI>Neutral: {neutral}</LI>
            <LI>Bad: {bad}</LI>
            <LI>Total: {total}</LI>
            <LI>Positive Feedback Percentage: {positivePercentage}%</LI>
        </List>
    );
};
export default Statistics;
