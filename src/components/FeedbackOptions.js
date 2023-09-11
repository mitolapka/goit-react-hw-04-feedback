import { DataButton } from './Data.styled.js'
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(option => (
                <DataButton key={option} onClick={() => onLeaveFeedback(option)}>
                    {option}
                </DataButton>
            ))}
        </div>
    );
};
export default FeedbackOptions;