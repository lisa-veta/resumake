import { sideInfoData } from '@/shared/config';
import { Typography } from '@/shared/ui/Typography';
import { defaultVariantStyle } from '@/shared/ui/Typography/helpers/constant';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/app/Themes';
import { useResumeStore } from '@/entities/resume/model/useResumeStore';
import * as SC from './SideInfoPanel.styles';
import {
    EducationItem,
    HardSkillItem,
    SoftSkillItem,
    DynamicListBlock,
} from './components';

export const SideInfoPanel = () => {
    const {
        photo,
        setPhoto,
        hardSkills,
        setHardSkills,
        softSkills,
        setSoftSkills,
        education,
        setEducation,
        contacts,
        setContacts,
    } = useResumeStore();

    const handlePhotoUpload = e => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPhoto(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const addHardSkill = () => {
        setHardSkills([...hardSkills, { id: Date.now(), skill: '' }]);
    };
    const removeHardSkill = id => {
        if (hardSkills.length > 1) {
            setHardSkills(hardSkills.filter(item => item.id !== id));
        }
    };

    const addSoftSkill = () => {
        setSoftSkills([...softSkills, { id: Date.now(), skill: '' }]);
    };
    const removeSoftSkill = id => {
        if (softSkills.length > 1) {
            setSoftSkills(softSkills.filter(item => item.id !== id));
        }
    };

    const addEducationItem = () => {
        setEducation([
            ...education,
            {
                id: Date.now(),
                startYear: '',
                finishYear: '',
                speciality: '',
                university: '',
                faculty: '',
            },
        ]);
    };
    const removeEducationItem = id => {
        if (education.length > 1) {
            setEducation(education.filter(item => item.id !== id));
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
                        <Typography variant={defaultVariantStyle.subtitle2}>
                            +
                        </Typography>
                    )}
                </SC.UploadContainer>

                <SC.SideContainer>
                    <SC.BlockWrapper>
                        {Object.entries(
                            sideInfoData.sections.contactInfo.items,
                        ).map(([key, { component: Component, props }]) => (
                            <Component
                                key={key}
                                {...props}
                                resource={contacts[key] || ''}
                                onChange={value => setContacts(key, value)}
                            />
                        ))}
                    </SC.BlockWrapper>
                    <DynamicListBlock
                        title="Образование"
                        items={education}
                        addItem={addEducationItem}
                        removeItem={removeEducationItem}
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
