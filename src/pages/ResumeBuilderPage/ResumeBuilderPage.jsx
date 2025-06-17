import { getTemplateById } from '@/features/select-template/model';
import * as SC from './ResumeBuilderPage.styles';

export const ResumeBuilderPage = () => {
    const Template = getTemplateById();
    return (
        <SC.ResumeContainer>
            <Template />
        </SC.ResumeContainer>
    );
};
