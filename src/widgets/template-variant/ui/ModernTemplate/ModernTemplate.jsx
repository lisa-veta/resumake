import {
    DynamicListBlock,
    SideInfoPanel,
} from '@/widgets/template-variant/ui/SideInfoPanel';
import { MainInfo } from '@/shared/ui/MainInfo';
import { useResumeStore } from '@/entities/resume/model/useResumeStore';
import * as SC from './ModernTemplate.styles';
import { SectionWrapper, TextWrapper } from './ModernTemplate.styles';
import { ExperienceItemRenderer, ProjectItemRenderer } from './components';

export const ModernTemplate = () => {
    const {
        experience,
        addExperienceItem,
        removeItemById,
        projects,
        addProjectItem,
        mainInfo,
        setMainInfo,
    } = useResumeStore();

    const removeExperience = id => removeItemById('experience', id);
    const removeProjects = id => removeItemById('projects', id);

    const handleMainInfoChange = (key, value) => {
        setMainInfo({
            ...mainInfo,
            [key]: value,
        });
    };
    return (
        <SC.Container>
            <SideInfoPanel />
            <TextWrapper>
                <MainInfo mainInfo={mainInfo} onChange={handleMainInfoChange} />
                <SectionWrapper>
                    <DynamicListBlock
                        title="Опыт работы"
                        items={experience}
                        addItem={addExperienceItem}
                        removeItem={removeExperience}
                        RenderItem={ExperienceItemRenderer}
                    />
                </SectionWrapper>
                <SectionWrapper>
                    <DynamicListBlock
                        title="Проекты"
                        items={projects}
                        addItem={addProjectItem}
                        removeItem={removeProjects}
                        RenderItem={ProjectItemRenderer}
                    />
                </SectionWrapper>
            </TextWrapper>
        </SC.Container>
    );
};
