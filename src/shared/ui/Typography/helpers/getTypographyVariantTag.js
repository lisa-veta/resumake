import { defaultVariantTag } from './constant';

export const getTypographyVariantTag = variant =>
    defaultVariantTag[variant] || defaultVariantTag.caption;
