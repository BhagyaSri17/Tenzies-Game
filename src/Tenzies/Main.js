import React, { useEffect, useState } from 'react'
import Die from './Die'
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'

const Main = () => {

    function generate() {
        return {
            value: Math.floor((Math.random() * 6) + 1),
            isHeld: false,
            id: nanoid()
        }
    }
    function allNewDice() {
        let array = [];
        for (let i = 1; i < 11; i++) {
            array.push(
                generate());
        }

        return array
    }
    function rollDice() {
        if (!tenzies) {
            setdice(
                oldDice => oldDice.map(olddie => {
                    return olddie.isHeld ? olddie : generate()
                })
            );
        }
        else {
            settenzies(false);
            setdice(allNewDice());
            setTimer(0);
        }
    }
    function HoldDice(id) {
        setdice(oldDice => oldDice.map(olddie => {
            return olddie.id === id ? {
                ...olddie, isHeld: !olddie.isHeld
            } :
                olddie
        }))
    }
    const [dice, setdice] = useState(allNewDice());
    const mapdice = dice.map(die => <Die key={die.id} id={die} onhold={() => HoldDice(die.id)} />)
    const [tenzies, settenzies] = useState(false);
    React.useEffect(() => {
        const allheld = dice.every(die => die.isHeld);
        const firstvalue = dice[0].value;
        const samevalue = dice.every(die => die.value == firstvalue);
        if (allheld && samevalue)
            settenzies(true);
    }, [dice])
    const [time, setTimer] = useState(0);
    useEffect(() => {
        let timer;
        const StartTime = Date.now();
        const updatedTime = () => {
            if(!tenzies ){
            const currentTime = Date.now();
            const elapsedTime = Math.floor((currentTime - StartTime) / 1000);
            setTimer(elapsedTime);
            }
        }
        timer = setInterval(updatedTime, 1000);
        return () => clearInterval(timer);
    }, [tenzies]);
    const formattedTime = `${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`;
    return (
        <div className="box">

            <div className="boxinner">
                <div className='confetti' >{tenzies && <Confetti
                    width="500"
                    height="500"
                />}
                </div>
                <h1 className="title">Tenzies</h1>
                <h3 className='timer'>Timer</h3>
                <span className='time'> {formattedTime}</span>
                <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className='gridcontainer'>
                    {mapdice}
                </div>

                <button onClick={rollDice}>{tenzies ? "New Game" : "Roll"} </button>
            </div>
        </div>
    )
}
export default Main