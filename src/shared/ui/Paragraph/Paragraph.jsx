import { useState } from 'react';
import * as SC from './Paragraph.styles';

export const Paragraph = ({ text, placeholder, onChangeText }) => {
    const handleChange = e => {
        onChangeText?.(e.target.value);
    };
    return (
        <SC.ParagraphContainer>
            <SC.Circle />
            <SC.TextInput
                value={text}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </SC.ParagraphContainer>
    );
};
