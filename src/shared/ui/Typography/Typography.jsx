import * as SC from './Typography.styles';
import { getTypographyVariantTag } from './helpers/getTypographyVariantTag';

export const Typography = ({ variant, children, ...restProps }) => {
    const variantTagComponent = getTypographyVariantTag(variant);

    return (
        <SC.StyledTypography
            as={variantTagComponent}
            variant={variant}
            {...restProps}
        >
            {children}
        </SC.StyledTypography>
    );
};
