import { Typography } from '@/shared/ui/Typography';
import { defaultVariantStyle } from '@/shared/ui/Typography/helpers/constant';
import * as SC from './InfoResource.styles';
import { useTheme } from 'styled-components';

export const InfoResource = ({ icon: Icon, resource }) => {
    const theme = useTheme();
    return (
        <SC.InfoContainer>
            {Icon && <Icon color={theme.color.icon.primary}/>}
            <Typography variant={defaultVariantStyle.subtitle3}>
                {resource}
            </Typography>
        </SC.InfoContainer>
    );
};
