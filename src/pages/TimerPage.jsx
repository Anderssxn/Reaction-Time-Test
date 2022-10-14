import React from 'react';
import TimeButton from '../components/TimeButton';
import { useState,} from 'react';


var startTime

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const TimerPage = () => {
    // get element by id btn


    const [color, setColor] = useState('bg-azul');
    //make random number between 2 and 7
    const [time, setTime] = useState(0)
    const [message, setMessage] = useState('Empezar')
    const [intervalID, setIntervalID] = useState(0);
    const [step, setStep] = useState(0);

    function timestart(){
        startTime = Date.now();

        setIntervalID(setInterval(function(){
            setTime(Date.now() - startTime);
        })
        );

    }
    
    function timestop(){
        clearInterval(intervalID);
    }
    
    const handleClick = () => {      
        if (step === 0) {
            timestop();
            let randomNumber = getRandomInt(2,7);
            setColor('bg-slate-300 color-black');
            setMessage('Esperar');
            setTimeout(() => {
                setMessage('¡Listo!');
                setColor("bg-green")
                setStep(1);
                timestart();
            }, randomNumber * 1000);    
        } else if (step === 1) {
            timestop();
            setTime(Date.now() - startTime);
            setStep(2);
            timestop();
        } else if (step === 2) {
            timestop();
            setStep(0);
            setTime(0);
            setColor('bg-azul');
            setMessage('Empezar');
            timestop();
        }
    }
    return (
        <div className="flex gap-3 flex-col items-center p-10 justify-center h-full">
            <div className='flex flex-col items-center'>
                <h1 className='font-bold text-3xl'>Prueba de tiempo de reacción</h1>
                <p>Hecho por Andersson Hadad</p>
                <h2>Presiona el boton azul para empezar. Cuando cambie a rojo vuelve a dar click.</h2>
                <p>tiempo de reacción:</p>
                <p className='text-2xl' id='timer'>{time} ms</p>
            </div>

            <div>

            </div>
            <TimeButton onClick={handleClick} text={message} color={color}/>
            <div>
            </div>
        </div>
    );
};

export default TimerPage;