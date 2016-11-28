import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer.jsx';
import Cell from './Notification/Cell.jsx';

const info0 = {
    name: 'news',
    typeUrl: 'https://www.google.com',
    pic: {
        name: 'newsPic',
        picUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Notification-icon-Incubator-logo.svg'
    },
    text: 'News',
}

const info1 = {
    name: 'tasks',
    typeUrl: 'https://www.google.com',
    pic: {
        name: 'tasksPic',
        picUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Notification-icon-Wikibooks-logo.svg'
    },
    text: 'Tasks',
}

const info2 = {
    name: 'emails',
    typeUrl: 'https://www.google.com',
    pic: {
        name: 'emailsPic',
        picUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/AWS_Simple_Icons_Messaging_Amazon_SNS_Email_Notification.svg'
    },
    text: 'Emails',
}

const ulStyle = {
    margin: 'auto',
    padding: 0,
    width:800,
    listStyleType: 'none',
    display: 'block',
    maxWidth: 1200,
}
ReactDOM.render(<ul style={ulStyle}> <Cell text='Hello there'
                        info={info0}/><Cell text='Hello there'info={info1}/><Cell text='Hello there'
                        info={info2}/>
                        </ul>
                        , document.getElementById('root'));

