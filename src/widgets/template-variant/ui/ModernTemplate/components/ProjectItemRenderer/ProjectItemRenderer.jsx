import { useResumeStore } from '@/entities/resume/model/useResumeStore';
import { ProjectsForm } from '@/shared/ui/Forms';

export const ProjectItemRenderer = ({ item }) => {
    const { setProjects, projects } = useResumeStore();

    const handleChange = (id, key, value) => {
        setProjects(
            projects.map(exp =>
                exp.id === id ? { ...exp, [key]: value } : exp,
            ),
        );
    };

    return (
        <ProjectsForm
            {...item}
            onChange={(key, value) => handleChange(item.id, key, value)}
        />
    );
};
