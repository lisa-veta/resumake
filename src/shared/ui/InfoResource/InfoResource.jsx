import { useTheme } from 'styled-components';
import * as SC from './InfoResource.styles';

export const InfoResource = ({
    icon: Icon,
    resource,
    placeholder,
    onChange,
}) => {
    const theme = useTheme();
    const handleContentChange = e => {
        const { value } = e.target;
        onChange?.(value);
    };

    return (
        <SC.InfoContainer>
            {Icon && <Icon color={theme.color.icon.primary} />}
            <SC.TitleInput
                onChange={handleContentChange}
                value={resource}
                placeholder={placeholder}
            />
        </SC.InfoContainer>
    );
};
