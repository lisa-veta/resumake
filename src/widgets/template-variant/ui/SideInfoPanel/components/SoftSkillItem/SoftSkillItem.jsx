import { useResumeStore } from '@/entities/resume/model/useResumeStore';
import { Paragraph } from '@/shared/ui/Paragraph';

export const SoftSkillItem = ({ item }) => {
    const { softSkills, setSoftSkills } = useResumeStore();

    const handleChange = (id, key, value) => {
        setSoftSkills(
            softSkills.map(skill =>
                skill.id === id ? { ...skill, [key]: value } : skill,
            ),
        );
    };

    return (
        <Paragraph
            text={item.skill}
            placeholder="Навык"
            onChangeText={value => handleChange(item.id, 'skill', value)}
        />
    );
};