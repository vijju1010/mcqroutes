import React, { useEffect } from 'react';
import arrayShuffle from 'array-shuffle';
import { useParams, Link, useHistory } from 'react-router-dom';

const Question = () => {
    const { id } = useParams();
    // var id = window.location.pathname.split('/')[2];
    var history = useHistory();
    var [question, setQuestion] = React.useState();
    var [correctAns, setCorrectAns] = React.useState('');
    var [score, setScore] = React.useState(0);
    useEffect(() => {
        setCorrectAns('');
        fetch('https://restcountries.com/v2/all')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.length);
                var options = [
                    data[id].capital,
                    data[
                        Math.floor(Math.random() * (data.length - id + 1) + id)
                    ].capital,
                    data[
                        Math.floor(Math.random() * (data.length - id + 1) + id)
                    ].capital,
                    data[
                        Math.floor(Math.random() * (data.length - id + 1) + id)
                    ].capital,
                ];
                setQuestion({
                    id: id,
                    g: false,
                    question: data[id].name,
                    answer: data[id].capital,
                    options: arrayShuffle(options),
                });
            });
    }, [id]);
    return (
        <div>
            <h1>score : {score}</h1>
            {question && <h1>What is the Capital of {question.question} ?</h1>}
            {question &&
                question.options.map((option, index) => {
                    return (
                        <>
                            <input
                                type='button'
                                key={index}
                                value={option}
                                name={id}
                                onClick={(e) => {
                                    if (e.target.value === question.answer) {
                                        setScore(score + 1);
                                        setCorrectAns(question.answer);
                                    } else {
                                        setCorrectAns(question.answer);
                                    }
                                    setTimeout(() => {
                                        history.push(
                                            `/question/${
                                                parseInt(
                                                    Math.floor(
                                                        Math.random() *
                                                            (245 - 1 + 1) +
                                                            1
                                                    )
                                                ) + 1
                                            }`
                                        );
                                    }, 1000);
                                }}
                            />{' '}
                            &nbsp;
                        </>
                    );
                })}
            <br />
            {correctAns && <h1>Correct Answer is {correctAns}</h1>}
            {/* <Link to={`/question/${parseInt(id) - 1}`}>Back</Link>
            <br />
            <Link to={`/question/${parseInt(id) + 1}`}>Next</Link> */}
        </div>
    );
};

export default Question;
