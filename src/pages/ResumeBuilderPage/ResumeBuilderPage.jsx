import { getTemplateById } from '@/features/select-template/model';
import { useRef } from 'react';
import { exportElementToPng } from '@/shared/lib/export-to-image';
import { Typography } from '@/shared/ui/Typography';
import { defaultVariantStyle } from '@/shared/ui/Typography/helpers/constant';
import * as SC from './ResumeBuilderPage.styles';

export const ResumeBuilderPage = () => {
    const Template = getTemplateById();
    const resumeRef = useRef(null);

    const handleExport = () => {
        if (resumeRef.current) {
            exportElementToPng(resumeRef.current, 'my-resume.png');
        }
    };
    return (
        <SC.ResumeContainer>
            <Typography variant={defaultVariantStyle.h3}>
                Создай свое резюме
            </Typography>
            <SC.ExportWrapper ref={resumeRef}>
                <Template />
            </SC.ExportWrapper>
            <SC.ExportButton onClick={handleExport}>
                <Typography variant={defaultVariantStyle.subtitle2}>
                    Сохранить
                </Typography>
            </SC.ExportButton>
        </SC.ResumeContainer>
    );
};
