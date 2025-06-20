import { Typography } from '@/shared/ui/Typography';
import { defaultVariantStyle } from '@/shared/ui/Typography/helpers/constant';
import { useState } from 'react';
import * as SC from './EducationResource.styles';

export const EducationResource = ({
    startYear,
    finishYear,
    speciality,
    university,
    faculty,
    placeholders,
}) => {
    const [startYearText, setStartYear] = useState(startYear);
    const [finishYearText, setFinishYear] = useState(finishYear);
    const [specialityText, setSpeciality] = useState(speciality);
    const [universityText, setUniversity] = useState(university);
    const [facultyText, setFaculty] = useState(faculty);

    const handleStartYearChange = e => {
        const { value } = e.target;
        setStartYear(value);
    };
    const handleFinishYearChange = e => {
        const { value } = e.target;
        setFinishYear(value);
    };
    const handleSpecialityChange = e => {
        const { value } = e.target;
        setSpeciality(value);
    };
    const handleUniversityChange = e => {
        const { value } = e.target;
        setUniversity(value);
    };
    const handleFacultyChange = e => {
        const { value } = e.target;
        setFaculty(value);
    };
    return (
        <SC.EducationResource>
            <SC.LineWrapper>
                <SC.TextInput
                    width="25px"
                    value={startYearText}
                    placeholder={placeholders.startYear}
                    onChange={handleStartYearChange}
                />
                <Typography variant={defaultVariantStyle.subtitle4}>
                    -
                </Typography>
                <SC.TextInput
                    width="25px"
                    value={finishYearText}
                    placeholder={placeholders.finishYear}
                    onChange={handleFinishYearChange}
                />
            </SC.LineWrapper>
            <SC.TitleInput
                value={specialityText}
                placeholder={placeholders.speciality}
                onChange={handleSpecialityChange}
            />

            <SC.LineWrapper>
                <SC.TextInput
                    width="40px"
                    value={universityText}
                    placeholder={placeholders.university}
                    onChange={handleUniversityChange}
                />
                <Typography variant={defaultVariantStyle.subtitle4}>
                    /
                </Typography>
                <SC.TextInput
                    value={facultyText}
                    placeholder={placeholders.faculty}
                    onChange={handleFacultyChange}
                />
            </SC.LineWrapper>
        </SC.EducationResource>
    );
};
