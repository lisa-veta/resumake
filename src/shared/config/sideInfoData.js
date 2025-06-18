import { InfoResource } from '@/shared/ui/InfoResource';
import {  MailIcon, PhoneIcon, TelegramIcon } from '@/shared/icons';
import { EducationResource } from '@/shared/ui/EducationResource';
import { GradationLine } from '@/shared/ui/GradationLine';

export const sideInfoData = {
    photo: 'null',
    sections: {
        contactInfo: {
            name: 'Контакты',
            items: {
                mail: {
                    component: InfoResource,
                    props: {
                        icon: MailIcon,
                        resource: 'aaaaaa@mail.ru',
                    },
                },
                number: {
                    component: InfoResource,
                    props: {
                        icon: PhoneIcon,
                        resource: '+777777',
                    },
                },
                telegram: {
                    component: InfoResource,
                    props: {
                        icon: TelegramIcon,
                        resource: '@aaaa11',
                    },
                },
            },
        },
        education: {
            name: 'Образование',
            items: {
                item1: {
                    component: EducationResource,
                    props: {
                        startYear: '2022',
                        finishYear: '2026',
                        speciality: 'Программная инженерия',
                        university: 'ЧелГУ',
                        faculty: 'ИИТ',
                    },
                },
            },
        },
        knowledge: {
            name: 'Hard Skills',
            items: {
                item1: {
                    component: GradationLine,
                    props: {
                        title: 'JavaScript',
                    },
                },
                item2: {
                    component: GradationLine,
                    props: {
                        title: 'HTML/CSS',
                    },
                },
            },
        },
        soft: {
            name: 'Soft Skills',
            items: {
                item1: {
                    component: GradationLine,
                    props: {
                        title: 'Коммуникабельность',
                    },
                },
            },
        },
    },
};
