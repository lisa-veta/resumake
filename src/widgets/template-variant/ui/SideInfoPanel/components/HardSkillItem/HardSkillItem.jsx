import { useResumeStore } from '@/entities/resume/model/useResumeStore';
import { GradationLine } from '@/shared/ui/GradationLine';

export const HardSkillItem = ({ item }) => {
    const { hardSkills, setHardSkills } = useResumeStore();

    const handleChange = (id, key, value) => {
        setHardSkills(
            hardSkills.map(skill =>
                skill.id === id ? { ...skill, [key]: value } : skill,
            ),
        );
    };

    return (
        <GradationLine
            text={item.skill}
            level={item.level || 0}
            placeholder="Навык"
            onChangeText={value => handleChange(item.id, 'skill', value)}
            onChangeLevel={level => handleChange(item.id, 'level', level)}
        />
    );
};