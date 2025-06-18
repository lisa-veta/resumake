import { Typography } from '@/shared/ui/Typography';
import { defaultVariantStyle } from '@/shared/ui/Typography/helpers/constant';
import { InfoResource } from '@/shared/ui/InfoResource';
import { EnvelopeIcon } from '@/shared/icons';
import * as SC from './MainInfo.styles';

export const MainInfo = ({
    name,
    surname,
    avocation,
    city,
    country,
    description,
}) => {
    return (
        <SC.MainInfoContainer>
            <SC.TitleWrapper>
                <Typography variant={defaultVariantStyle.h4}>
                    {name} {surname}
                </Typography>
                <Typography variant={defaultVariantStyle.subtitle2}>
                    {avocation}
                </Typography>
                <InfoResource
                    icon={EnvelopeIcon}
                    resourse={`${country}, ${city}`}
                />
            </SC.TitleWrapper>
            <Typography variant={defaultVariantStyle.subtitle3}>
                {description}
            </Typography>
        </SC.MainInfoContainer>
    );
};
