import { Typography } from '@/shared/ui/Typography';
import { defaultVariantStyle } from '@/shared/ui/Typography/helpers/constant';
import { useAutoResizeTextarea, useFormState } from '@/shared/hooks';
import * as SC from './ExperienceForm.styles';

const placeholdersExperienceForm = {
    startTime: '2022',
    endTime: '2023',
    description: 'Описание',
    company: 'Компания',
    jobPosition: 'Должность',
};

export const ExperienceForm = ({
    jobPosition,
    company,
    startTime,
    endTime,
    description,
    placeholders = placeholdersExperienceForm,
}) => {
    const { form, handleChange } = useFormState({
        jobPosition,
        company,
        startTime,
        endTime,
        description,
    });
    const textareaRef = useAutoResizeTextarea(form.description);

    return (
        <SC.ExperienceFormContainer>
            <SC.TitleInput
                value={form.jobPosition}
                placeholder={placeholders.jobPosition}
                onChange={handleChange('jobPosition')}
            />
            <SC.TextWrapper>
                <SC.TextInput
                    value={form.company}
                    placeholder={placeholders.company}
                    onChange={handleChange('company')}
                />
                <SC.DateWrapper>
                    <SC.TextInput
                        value={form.startTime}
                        placeholder={placeholders.startTime}
                        onChange={handleChange('startTime')}
                        width="25px"
                    />
                    <Typography variant={defaultVariantStyle.subtitle4}>
                        -
                    </Typography>
                    <SC.TextInput
                        value={form.endTime}
                        placeholder={placeholders.endTime}
                        onChange={handleChange('endTime')}
                        width="25px"
                    />
                </SC.DateWrapper>
            </SC.TextWrapper>
            <SC.TextSubInput
                ref={textareaRef}
                value={form.description}
                placeholder={placeholders.description}
                onChange={handleChange('description')}
            />
        </SC.ExperienceFormContainer>
    );
};
