import image from './assets/image.png';
import {TextBlock, TitleBlock, ImageBlock, ColumnsBlock} from "./classes/blocks";

export const model = [
    new TitleBlock( 'Конструктор сайтов на чистом JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center',
        }
    }),
    new TextBlock( 'Основная информация', {
        tag: 'p',
        styles: {
            padding: '1rem',
            'text-align': 'center',
            'font-weight': 'bold',
            'font-size': '28px',
        }
    }),
    new ColumnsBlock( [
    'Приложение на чистом JS, без использования библиотек',
    'Узнаешь, как работают принципы SOLID и ООП за один курс',
    'JavaScript - это просто и интересно',
    ], {
        styles: {
            padding: '2rem',
            'font-size': '18px',
        }
    }),
    new ImageBlock( image, {
        styles: {
            display: 'flex',
            'justify-content': 'center',
            padding: 'auto',
        },
        imageStyles: {
            width: '500px',
            height: 'auto',
        },
        alt: 'If you finish this course you will get a project as a gift',
    }),
];