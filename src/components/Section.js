import React from 'react';
import { H2} from './Data.styled.js'
export const Section = ({ title, children }) => {
    return (
        <div>
            <H2>{title}</H2>
            {children}
        </div>
    );
};