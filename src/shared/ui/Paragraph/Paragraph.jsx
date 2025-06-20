import { useState } from 'react';
import * as SC from './Paragraph.styles';

export const Paragraph = ({ text, placeholder }) => {
    const [textInput, setTextInput] = useState(text);

    const handleTextChange = e => {
        const { value } = e.target;
        setTextInput(value);
    };

    return (
        <SC.ParagraphContainer>
            <SC.Circle />
            <SC.TextInput
                value={textInput}
                onChange={handleTextChange}
                placeholder={placeholder}
            />
        </SC.ParagraphContainer>
    );
};
