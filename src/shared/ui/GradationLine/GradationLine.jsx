import * as SC from './GradationLine.styles';

export const GradationLine = ({
    text,
    placeholder,
    maxGradation = 10,
    level = 0,
    onChangeText,
    onChangeLevel,
}) => {
    const handleLevelChange = index => {
        onChangeLevel?.(index);
    };

    const handleTitleChange = e => {
        onChangeText?.(e.target.value);
    };

    return (
        <SC.GradationLineContainer>
            <SC.TextInput
                value={text}
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
