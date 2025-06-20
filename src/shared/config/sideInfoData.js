import { InfoResource } from '@/shared/ui/InfoResource';
import { MailIcon, PhoneIcon, TelegramIcon } from '@/shared/icons';

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
                        placeholder: 'вашапочта@mail.ru',
                    },
                },
                number: {
                    component: InfoResource,
                    props: {
                        icon: PhoneIcon,
                        placeholder: 'Номер телефона',
                    },
                },
                telegram: {
                    component: InfoResource,
                    props: {
                        icon: TelegramIcon,
                        placeholder: 'Ник в тг',
                    },
                },
            },
        },
    },
};
