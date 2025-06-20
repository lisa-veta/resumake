import { defaultVariantStyle } from '@/shared/ui/Typography/helpers/constant';

export const getTypographyStyles = variant => {
    switch (variant) {
        case defaultVariantStyle.h1:
            return `
                font-style: normal;
                font-weight: 700;
                font-size: 48px;
                line-height: 48px;
            `;
        case defaultVariantStyle.h2:
            return `
                font-style: normal;
                font-weight: 600;
                font-size: 42px;
                line-height: 42px;
            `;
        case defaultVariantStyle.h3:
            return `
                font-style: normal;
                font-weight: 500;
                font-size: 36px;
                line-height: 36px;
            `;
        case defaultVariantStyle.h4:
            return `
                font-style: normal;
                font-weight: 500;
                font-size: 30px;
                line-height: 30px;
            `;
        case defaultVariantStyle.h5:
            return `
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                line-height: 24px;
            `;
        case defaultVariantStyle.h6:
            return `
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 20px;
            `;
        case defaultVariantStyle.labelBold:
            return `
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 20px;
            `;
        case defaultVariantStyle.headline:
            return `
                font-style: normal;
                font-weight: 600;
                font-size: 28px;
                line-height: 20px;
            `;
        case defaultVariantStyle.subtitle1:
            return `
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 16px;
            `;
        case defaultVariantStyle.subtitle2:
            return `
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 14px;
            `;
        case defaultVariantStyle.subtitle3:
            return `
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 12px;
            `;
        case defaultVariantStyle.subtitle4:
            return `
                font-style: normal;
                font-weight: 400;
                font-size: 10px;
                line-height: 10px;
            `;
        case defaultVariantStyle.subtitle5:
            return `
                font-style: normal;
                font-weight: 600;
                font-size: 10px;
                line-height: 10px;
            `;
        case defaultVariantStyle.body1:
            return `
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 16px;
            `;
        case defaultVariantStyle.body2:
            return `
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 24px;
            `;
        case defaultVariantStyle.caption:
            return `
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
            `;
        case defaultVariantStyle.overline:
            return `
                font-style: normal;
                font-weight: 400;
                font-size: 10px;
                line-height: 10px;
                text-transform: uppercase;
            `;
        default:
            return '';
    }
};
