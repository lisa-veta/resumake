import { InfoResource } from '@/shared/ui/InfoResource';
import { MapPointIcon } from '@/shared/icons';
import { useEffect, useRef, useState } from 'react';
import * as SC from './MainInfo.styles';
import { useAutoResizeTextarea, useFormState } from '@/shared/hooks/index.js';

const placeholdersMainInfo = {
    name: 'Имя Фамилия',
    avocation: 'Должность',
    description: 'Описание',
    place: 'Город, Страна',
};

export const MainInfo = ({
    name,
    avocation,
    place,
    description,
    placeholders = placeholdersMainInfo,
}) => {
    const { form, handleChange } = useFormState({
        title: name,
        avocation,
        description,
    });
    const textareaRef = useAutoResizeTextarea(form.description);

    return (
        <SC.MainInfoContainer>
            <SC.TitleInput
                value={form.title}
                onChange={handleChange('title')}
                placeholder={placeholders.name}
            />
            <SC.DescriptionWrapper>
                <SC.TextInput
                    value={form.avocation}
                    onChange={handleChange('avocation')}
                    placeholder={placeholders.avocation}
                />

                <InfoResource
                    icon={MapPointIcon}
                    resource={place}
                    placeholder={placeholders.place}
                />
            </SC.DescriptionWrapper>
            <SC.TextSubInput
                ref={textareaRef}
                value={form.description}
                onChange={handleChange('description')}
                placeholder={placeholders.description}
            />
        </SC.MainInfoContainer>
    );
};
