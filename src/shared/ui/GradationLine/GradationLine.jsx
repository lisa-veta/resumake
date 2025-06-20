import { useState } from 'react';
import * as SC from './GradationLine.styles';

export const GradationLine = ({ text, placeholder, maxGradation = 10 }) => {
    const [level, setLevel] = useState(0);
    const [title, setTitle] = useState(text);

    const handleLevelChange = index => {
        setLevel(index);
    };
    const handleTitleChange = e => {
        const { value } = e.target;
        setTitle(value);
    };

    return (
        <SC.GradationLineContainer>
            <SC.TextInput
                value={title}
                onChange={handleTitleChange}
                placeholder={placeholder}
            />
            <SC.CircleWrapper>
                {Array.from({ length: maxGradation }, (_, i) => i + 1).map(
                    levelValue => (
                        <SC.Circle
                            key={`gradation-circle-${levelValue}`}
                            active={levelValue <= level}
                            onClick={() => handleLevelChange(levelValue)}
                        />
                    ),
                )}
            </SC.CircleWrapper>
        </SC.GradationLineContainer>
    );
};
