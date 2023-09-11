// App.jsx
import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';

export function App() {
    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

    const handleFeedback = type => {
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [type]: prevFeedback[type] + 1,
        }));
    };

    const { good, neutral, bad } = feedback;
    const totalFeedback = good + neutral + bad;

    const countPositiveFeedbackPercentage = () => {
        return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
    };

    return (
        <div>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={['good', 'neutral', 'bad']}
                    onLeaveFeedback={handleFeedback}
                />
            </Section>

            <Section title="Statistics">
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={totalFeedback}
                    positivePercentage={countPositiveFeedbackPercentage()}
                />
            </Section>
        </div>
    );
}

