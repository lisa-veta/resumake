import {
    DynamicListBlock,
    SideInfoPanel,
} from '@/widgets/template-variant/ui/SideInfoPanel';
import { MainInfo } from '@/shared/ui/MainInfo';
import { ExperienceForm, ProjectsForm } from '@/shared/ui/Forms';
import { useState } from 'react';
import * as SC from './ModernTemplate.styles';
import { SectionWrapper, TextWrapper } from './ModernTemplate.styles';

const ExperienceFormItem = () => <ExperienceForm />;
const ProjectsFormItem = () => <ProjectsForm />;

export const ModernTemplate = () => {
    const [experience, setExperience] = useState([{ id: Date.now() }]);
    const [projects, setProjects] = useState([{ id: Date.now() }]);

    const addItem = setter => () =>
        setter(prev => [...prev, { id: Date.now() }]);
    const removeItem = setter => id =>
        setter(prev =>
            prev.length > 1 ? prev.filter(item => item.id !== id) : prev,
        );
    const addExperience = addItem(setExperience);
    const removeExperience = removeItem(setExperience);
    const addProjects = addItem(setProjects);
    const removeProjects = removeItem(setProjects);
    return (
        <SC.Container>
            <SideInfoPanel />
            <TextWrapper>
                <MainInfo />
                <SectionWrapper>
                    <DynamicListBlock
                        title="Опыт работы"
                        items={experience}
                        addItem={addExperience}
                        removeItem={removeExperience}
                        RenderItem={ExperienceFormItem}
                    />
                </SectionWrapper>
                <SectionWrapper>
                    <DynamicListBlock
                        title="Проекты"
                        items={projects}
                        addItem={addProjects}
                        removeItem={removeProjects}
                        RenderItem={ProjectsFormItem}
                    />
                </SectionWrapper>
            </TextWrapper>
        </SC.Container>
    );
};
