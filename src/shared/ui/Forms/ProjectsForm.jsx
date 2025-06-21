import { useAutoResizeTextarea, useFormState } from '@/shared/hooks';
import * as SC from './ExperienceForm.styles';

const placeholdersProjectsForm = {
    name: 'Проект',
    description: 'Описание',
};

export const ProjectsForm = ({
    name,
    description,
    placeholders = placeholdersProjectsForm,
    onChange,
}) => {
    const textareaRef = useAutoResizeTextarea(description);

    return (
        <SC.ExperienceFormContainer>
            <SC.TitleInput
                value={name}
                placeholder={placeholders.name}
                onChange={e => onChange('name', e.target.value)}
            />
            <SC.TextSubInput
                ref={textareaRef}
                value={description}
                placeholder={placeholders.description}
                onChange={e => onChange('description', e.target.value)}
            />
        </SC.ExperienceFormContainer>
    );
};
