import { Typography } from '@/shared/ui/Typography';
import { defaultVariantStyle } from '@/shared/ui/Typography/helpers/constant';
import { useState } from 'react';
import * as SC from './GradationLine.styles';

export const GradationLine = ({ title, maxGradation = 10 }) => {
    const [level, setLevel] = useState(0);

    const handleLevelChange = index => {
        setLevel(index);
    };

    return (
        <SC.GradationLineContainer>
            <Typography variant={defaultVariantStyle.subtitle3}>
                {title}
            </Typography>
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
