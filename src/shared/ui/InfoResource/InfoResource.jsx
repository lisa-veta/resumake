import { useTheme } from 'styled-components';
import { useState } from 'react';
import * as SC from './InfoResource.styles';

export const InfoResource = ({ icon: Icon, resource, placeholder }) => {
    const theme = useTheme();
    const [text, setText] = useState(resource);

    const handleContentChange = e => {
        const { value } = e.target;
        setText(value);
    };

    return (
        <SC.InfoContainer>
            {Icon && <Icon color={theme.color.icon.primary} />}
            <SC.TitleInput
                onChange={handleContentChange}
                value={text}
                placeholder={placeholder}
            />
        </SC.InfoContainer>
    );
};
