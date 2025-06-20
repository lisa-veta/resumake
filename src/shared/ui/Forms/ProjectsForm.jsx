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
}) => {
    const { form, handleChange } = useFormState({ name, description });
    const textareaRef = useAutoResizeTextarea(form.description);

    return (
        <SC.ExperienceFormContainer>
            <SC.TitleInput
                value={form.name}
                placeholder={placeholders.name}
                onChange={handleChange('name')}
            />
            <SC.TextSubInput
                ref={textareaRef}
                value={form.description}
                placeholder={placeholders.description}
                onChange={handleChange('description')}
            />
        </SC.ExperienceFormContainer>
    );
};
