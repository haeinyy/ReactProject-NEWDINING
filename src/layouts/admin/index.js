import React, { useCallback, useState } from 'react';
import { useNavigate } from "react-router-dom";
import MyModal from './components/MyModal';

function Admin() {
    const [message, setMessage] = useState("");

    const showPrompt = useCallback(async () => {
        const inputted = await prompt("What's your name?");

        setMessage(`Your name is ${inputted}`);
    }, []);

    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClickSubmit = (input) => {
        console.log(input.input);
        if (input.input === '1234') {
            navigate('/dietMonth');
        } else {
            setOpen(false);
        }
    }
    const handleClickCancel = () => setOpen(false);

    return (
        <div>
            <div onClick={showPrompt}>관리자 페이지 이동</div>
            <h1>{message}</h1>
            <div>
            {     
                {message} === "admin1234"
                ? <p>참이면 보여줄 HTML</p>
                : null
            }
            </div>
            <br></br>
            <div onClick={handleClick}>관리자 페이지 이동22222</div>
            <MyModal isOpen={isOpen} onSubmit={handleClickSubmit} onCancel={handleClickCancel}/>
        </div>
    );
}

export default Admin;