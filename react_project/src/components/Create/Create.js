import React from 'react';
import { useState } from 'react';
import env from '../../env.json'
import './Create.css';
function Create() {

    const [url, setUrl] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('');


    let sendData = (obj) => {

        setFormClass('hide')

        setLineClass('')
        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj),
        })
            .then(data => data.json())
            .then(data => {
                if (data.result) {
                    setUrl(env.url + '/' + data.url);
                }
            });
    }


    let loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('Заполните поля');
            return false;
        }

        sendData({ "note": note });
    }

    return (
        <div className="create">
            <form action="" onSubmit={loadDataFromForm} className={formClass}>
                <label htmlFor="note">Введите заметку</label>
                <textarea name="note" defaultValue="Test" id="note"></textarea>
                <button type="submit">Создать</button>
            </form>

            <div className={lineClass}>
                <div className="link">{url}</div>
                <div><button onClick={function () { window.location.reload() }}>Создать новую заметку</button></div>
            </div>
        </div>
    );
}

export default Create;