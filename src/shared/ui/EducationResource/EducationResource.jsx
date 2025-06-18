import { Typography } from '@/shared/ui/Typography';
import { defaultVariantStyle } from '@/shared/ui/Typography/helpers/constant';
import { useTheme } from 'styled-components';
import * as SC from './EducationResource.styles';

export const EducationResource = ({
    startYear,
    finishYear,
    speciality,
    university,
    faculty,
}) => {
    const theme = useTheme();
    return (
        <SC.EducationResource>
            <Typography variant={defaultVariantStyle.subtitle3}>
                {startYear} - {finishYear}
            </Typography>
            <Typography
                variant={defaultVariantStyle.subtitle4}
                color={theme.pink}
            >
                {speciality}
            </Typography>
            <Typography variant={defaultVariantStyle.subtitle3}>
                {university} / {faculty}
            </Typography>
        </SC.EducationResource>
    );
};
