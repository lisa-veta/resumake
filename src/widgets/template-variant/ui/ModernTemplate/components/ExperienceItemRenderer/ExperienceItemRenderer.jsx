import { useResumeStore } from '@/entities/resume/model/useResumeStore';
import { ExperienceForm } from '@/shared/ui/Forms';

export const ExperienceItemRenderer = ({ item }) => {
    const { setExperience, experience } = useResumeStore();

    const handleChange = (id, key, value) => {
        setExperience(
            experience.map(exp =>
                exp.id === id ? { ...exp, [key]: value } : exp,
            ),
        );
    };

    return (
        <ExperienceForm
            {...item}
            onChange={(key, value) => handleChange(item.id, key, value)}
        />
    );
};