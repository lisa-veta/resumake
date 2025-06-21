import { toPng } from 'html-to-image';

export const exportElementToPng = async (element, fileName = 'resume.png') => {
    try {
        const dataUrl = await toPng(element);
        const link = document.createElement('a');
        link.download = fileName;
        link.href = dataUrl;
        link.click();
    } catch (error) {
        console.error('Failed to export as PNG:', error);
    }
};
