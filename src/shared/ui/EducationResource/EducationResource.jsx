import { Typography } from '@/shared/ui/Typography';
import { defaultVariantStyle } from '@/shared/ui/Typography/helpers/constant';
import * as SC from './EducationResource.styles';

export const EducationResource = ({
    startYear,
    finishYear,
    speciality,
    university,
    faculty,
    placeholders,
    onChange,
}) => {
    const handleStartYearChange = e => {
        onChange('startYear', e.target.value);
    };
    const handleFinishYearChange = e => {
        onChange('finishYear', e.target.value);
    };
    const handleSpecialityChange = e => {
        onChange('speciality', e.target.value);
    };
    const handleUniversityChange = e => {
        onChange('university', e.target.value);
    };
    const handleFacultyChange = e => {
        onChange('faculty', e.target.value);
    };
    return (
        <SC.EducationResource>
            <SC.LineWrapper>
                <SC.TextInput
                    width="25px"
                    value={startYear}
                    placeholder={placeholders.startYear}
                    onChange={handleStartYearChange}
                />
                <Typography variant={defaultVariantStyle.subtitle4}>
                    -
                </Typography>
                <SC.TextInput
                    width="25px"
                    value={finishYear}
                    placeholder={placeholders.finishYear}
                    onChange={handleFinishYearChange}
                />
            </SC.LineWrapper>
            <SC.TitleInput
                value={speciality}
                placeholder={placeholders.speciality}
                onChange={handleSpecialityChange}
            />

            <SC.LineWrapper>
                <SC.TextInput
                    width="40px"
                    value={university}
                    placeholder={placeholders.university}
                    onChange={handleUniversityChange}
                />
                <Typography variant={defaultVariantStyle.subtitle4}>
                    /
                </Typography>
                <SC.TextInput
                    value={faculty}
                    placeholder={placeholders.faculty}
                    onChange={handleFacultyChange}
                />
            </SC.LineWrapper>
        </SC.EducationResource>
    );
};
