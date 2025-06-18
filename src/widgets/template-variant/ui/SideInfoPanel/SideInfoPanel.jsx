import { sideInfoData } from '@/shared/config';
import { Typography } from '@/shared/ui/Typography';
import { defaultVariantStyle } from '@/shared/ui/Typography/helpers/constant';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/app/Themes';
import { useState } from 'react';
import * as SC from './SideInfoPanel.styles';

export const SideInfoPanel = () => {
    const [photo, setPhoto] = useState(null);
    const { sections } = sideInfoData;

    const handlePhotoUpload = e => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPhoto(reader.result);
            reader.readAsDataURL(file);
        }
    };
    return (
        <ThemeProvider theme={darkTheme}>
            <SC.Wrapper>
                <SC.UploadContainer>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                    />
                    {photo ? (
                        <img src={photo} alt="Profile" />
                    ) : (
                        <span>+</span>
                    )}
                </SC.UploadContainer>

                <SC.SideContainer>
                    {Object.entries(sections).map(([section, info]) => {
                        const { name, items } = info;
                        return (
                            <SC.BlockWrapper key={section}>
                                <Typography
                                    variant={defaultVariantStyle.subtitle2}
                                >
                                    {name}
                                </Typography>
                                {Object.entries(items).map(([key, item]) => {
                                    const Component = item.component;
                                    return (
                                        <Component key={key} {...item.props} />
                                    );
                                })}
                            </SC.BlockWrapper>
                        );
                    })}
                </SC.SideContainer>
            </SC.Wrapper>
        </ThemeProvider>
    );
};
