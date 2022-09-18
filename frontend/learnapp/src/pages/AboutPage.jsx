import React from 'react'
import styled from 'styled-components'


const Article = styled.div`
    padding: 0 4rem;
    font-family: 'Montserrat', sans-serif;
    text-align: justify;
    line-height: 2rem;
    color: rgb(94, 94, 94);
`;

const Title = styled.h2`
    color: rgb(67, 67, 67);
    font-family: inherit;
    font-size: xx-large;
    font-style: italic;
    font-weight: 800;
    padding: 2rem 0 1rem 0;
`;

const Code = styled.code`
    font-family:'Courier New', Courier, monospace, sans-serif;
    font-size: medium;
`;



export const About = () => {
    return (
        <Article>
            <Title>Описание проекта</Title>

            Тема проекта: Самопроверка английских слов.<br/><br/>

            Приложение загружает карточки с англ. словами, где пользователь нажимает на одну из трёх кнопок-ссылок: «Знаю» - в случае, если слово знакомо, «Повторить» - если слово забыл или не знает и «Подсказка» - загружается изображение соответствующего слова. Каждое из слов после нажатия на соотв. ссылку попадает в соотв. список: «Изучено», «На повторение».

            Проект состоит из двух частей: Back-end и Front-end. Использован свой API c бека, а так же был задействован API с flickr.com

            <Title>Back-End</Title>
            Я решил использовать свой API. Это не сложное приложение на DRF, т.к. весь упор сделан на фронт. Back по запросу с фронта возвращает JSON вида:<br/>
                <Code>
                    &#123;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 1,<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"en": "advance",<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ru": "продвижение",<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"learned": false,<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"repeat": false,<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"show_translate": false<br/>
                    &#125;<br/>
                </Code> 

            
            <Title>Front-end</Title>
            При реализации фронта были использованы: React-router-dom, ReduxToolKit и Redux-thunk, Axios, Styled-components, медиа-запросы. При нажатии на «Подсказка» открывается модальное окно с изображением. 
            Задействован API с flick.com. Поиск картинки происходит через API-ссылку, формируется переменная из значения “en” и вставляется динамически в ссылку. Axios делает get-запрос и возвращает JSON. Затем объект парсится и формирует URL картинки, которая встраивается в модальное окно. 
            Поле «поиск» в хедере ищет слова как в английской раскладке, так и в русской, если ничего не найдено - возвращается null (путая страница). Так же в приложении реализована пагинация.
            Макет SPA стилизован посредством styled-components, вёрстка адаптивная.<br/><br/>

            <Code>ПРИМЕЧАНИЕ: ссылка для api.flickr.com формируется правильно, в самой ссылке нужно передать два параметра:
            &tag=tag и &text=text, но почему-то в ответ иногда приходит несуразица... Моей целью было показать работу модального окна
            </Code>

        </Article>
    )
}