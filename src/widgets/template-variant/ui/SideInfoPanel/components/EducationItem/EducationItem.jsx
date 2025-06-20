import { useResumeStore } from '@/entities/resume/model/useResumeStore';
import { EducationResource } from '@/shared/ui/EducationResource';

const placeholders = {
    startYear: '2024',
    finishYear: '2027',
    speciality: 'Специальность',
    university: 'Универ',
    faculty: 'Факультет',
};

export const EducationItem = ({ item }) => {
    const { education, setEducation } = useResumeStore();

    const handleChange = (id, key, value) => {
        setEducation(
            education.map(edu =>
                edu.id === id ? { ...edu, [key]: value } : edu,
            ),
        );
    };

    return (
        <EducationResource
            {...item}
            placeholders={placeholders}
            onChange={(key, value) => handleChange(item.id, key, value)}
        />
    );
};