import React from 'react';
import TimeButton from '../components/TimeButton';
import { useState,} from 'react';



const TimerPage = () => {
    // get element by id btn


    const [color, setColor] = useState('bg-azul');
    //make random number between 2 and 7
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 6) + 2);
    const [time, setTime] = useState(0)
    const [message, setMessage] = useState('Empezar')
    const [intervalID, setIntervalID] = useState();
    const [step, setStep] = useState(0);

    var startTime

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
            setColor('bg-slate-300 color-black');
            setMessage('Esperar');
            setStep(1);
            setTimeout(() => {
                timestart();
                setMessage('¡Listo!');
                setColor("bg-green")
            }, randomNumber * 1000);    
        } else if (step === 1) {
            timestop();
            setStep(2);
        } else if (step === 2) {
            setTime(0);
            setColor('bg-azul');
            setStep(0);
            setMessage('Empezar');
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