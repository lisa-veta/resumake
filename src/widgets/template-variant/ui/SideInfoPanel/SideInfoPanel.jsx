import { sideInfoData } from '@/shared/config';
import { Typography } from '@/shared/ui/Typography';
import { defaultVariantStyle } from '@/shared/ui/Typography/helpers/constant';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/app/Themes';
import { useState } from 'react';
import { GradationLine } from '@/shared/ui/GradationLine';
import { Paragraph } from '@/shared/ui/Paragraph';
import { EducationResource } from '@/shared/ui/EducationResource';
import { DynamicListBlock } from '@/widgets/template-variant/ui/SideInfoPanel';
import * as SC from './SideInfoPanel.styles';

const placeholders = {
    startYear: '2024',
    finishYear: '2027',
    speciality: 'Специальность',
    university: 'Универ',
    faculty: 'Факультет',
};
const HardSkillItem = () => <GradationLine placeholder="Навык" />;
const SoftSkillItem = () => <Paragraph placeholder="Навык" />;
const EducationItem = () => <EducationResource placeholders={placeholders} />;

export const SideInfoPanel = () => {
    const [photo, setPhoto] = useState(null);
    const { sections } = sideInfoData;
    const [hardSkills, setHardSkills] = useState([{ id: Date.now() }]);
    const [softSkills, setSoftSkills] = useState([{ id: Date.now() }]);
    const [educationData, setEducationData] = useState([{ id: Date.now() }]);

    const handlePhotoUpload = e => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPhoto(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const addItem = setter => () =>
        setter(prev => [...prev, { id: Date.now() }]);
    const removeItem = setter => id =>
        setter(prev =>
            prev.length > 1 ? prev.filter(item => item.id !== id) : prev,
        );
    const addHardSkill = addItem(setHardSkills);
    const removeHardSkill = removeItem(setHardSkills);
    const addSoftSkill = addItem(setSoftSkills);
    const removeSoftSkill = removeItem(setSoftSkills);
    const addEducationData = addItem(setEducationData);
    const removeEducationData = removeItem(setEducationData);

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
                        <Typography variant={defaultVariantStyle.subtitle2}>
                            +
                        </Typography>
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
                    <DynamicListBlock
                        title="Образование"
                        items={educationData}
                        addItem={addEducationData}
                        removeItem={removeEducationData}
                        RenderItem={EducationItem}
                    />

                    <DynamicListBlock
                        title="Hard Skills"
                        items={hardSkills}
                        addItem={addHardSkill}
                        removeItem={removeHardSkill}
                        RenderItem={HardSkillItem}
                    />

                    <DynamicListBlock
                        title="Soft Skills"
                        items={softSkills}
                        addItem={addSoftSkill}
                        removeItem={removeSoftSkill}
                        RenderItem={SoftSkillItem}
                    />
                </SC.SideContainer>
            </SC.Wrapper>
        </ThemeProvider>
    );
};
