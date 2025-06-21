import { Typography } from '@/shared/ui/Typography';
import { defaultVariantStyle } from '@/shared/ui/Typography/helpers/constant';
import { useAutoResizeTextarea } from '@/shared/hooks';
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
    onChange,
}) => {
    const textareaRef = useAutoResizeTextarea(description);

    return (
        <SC.ExperienceFormContainer>
            <SC.TitleInput
                value={jobPosition}
                placeholder={placeholders.jobPosition}
                onChange={e => onChange('jobPosition', e.target.value)}
            />
            <SC.TextWrapper>
                <SC.TextInput
                    value={company}
                    placeholder={placeholders.company}
                    onChange={e => onChange('company', e.target.value)}
                />
                <SC.DateWrapper>
                    <SC.TextInput
                        value={startTime}
                        placeholder={placeholders.startTime}
                        onChange={e => onChange('startTime', e.target.value)}
                        width="25px"
                    />
                    <Typography variant={defaultVariantStyle.subtitle4}>
                        -
                    </Typography>
                    <SC.TextInput
                        value={endTime}
                        placeholder={placeholders.endTime}
                        onChange={e => onChange('endTime', e.target.value)}
                        width="25px"
                    />
                </SC.DateWrapper>
            </SC.TextWrapper>
            <SC.TextSubInput
                ref={textareaRef}
                value={description}
                placeholder={placeholders.description}
                onChange={e => onChange('description', e.target.value)}
            />
        </SC.ExperienceFormContainer>
    );
};
