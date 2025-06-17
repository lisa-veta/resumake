import { templates } from '@/shared/config/templates';

export const getTemplateById = id => {
    return templates[id] || templates.modern;
};
