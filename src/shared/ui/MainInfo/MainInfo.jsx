import { InfoResource } from '@/shared/ui/InfoResource';
import { MapPointIcon } from '@/shared/icons';
import { useAutoResizeTextarea, useFormState } from '@/shared/hooks';
import { useResumeStore } from '@/entities/resume/model/useResumeStore.js';
import * as SC from './MainInfo.styles';

const placeholdersMainInfo = {
    name: 'Имя Фамилия',
    avocation: 'Должность',
    description: 'Описание',
    place: 'Город, Страна',
};

export const MainInfo = ({
    mainInfo,
    onChange,
    placeholders = placeholdersMainInfo,
}) => {
    const textareaRef = useAutoResizeTextarea(mainInfo.description);

    const handleChange = (key, value) => {
        onChange?.(key, value);
    };

    return (
        <SC.MainInfoContainer>
            <SC.TitleInput
                value={mainInfo.name}
                onChange={e => handleChange('name', e.target.value)}
                placeholder={placeholders.name}
            />
            <SC.DescriptionWrapper>
                <SC.TextInput
                    value={mainInfo.avocation}
                    onChange={e => handleChange('avocation', e.target.value)}
                    placeholder={placeholders.avocation}
                />

                <InfoResource
                    icon={MapPointIcon}
                    resource={mainInfo.place}
                    placeholder={placeholders.place}
                    onChange={value => handleChange('place', value)}
                />
            </SC.DescriptionWrapper>
            <SC.TextSubInput
                ref={textareaRef}
                value={mainInfo.description}
                onChange={e => handleChange('description', e.target.value)}
                placeholder={placeholders.description}
            />
        </SC.MainInfoContainer>
    );
};
