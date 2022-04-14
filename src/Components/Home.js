import React, { useEffect } from 'react';

const Home = () => {
    var [questions, setQuestions] = React.useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                var qs = [];
                data.forEach((item, index) => {
                    qs.push({
                        id: index,
                        question: item.name,
                        answer: item.capital,
                        options: [
                            item.capital,
                            item.name,
                            item.population,
                            item.region,
                        ],
                    });
                });
                setQuestions(qs);
            });
    }, []);
    return (
        <div>
            <h1>Countries</h1>
            <ul>
                {questions &&
                    questions.map((question) => {
                        return (
                            <li key={question.id}>
                                <h2>{question.question}</h2>
                                <ul>
                                    {question.options.map((option) => {
                                        return <li key={option}>{option}</li>;
                                    })}
                                </ul>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};
export default Home;
// /import React, { useEffect } from 'react';
// import arrayShuffle from 'array-shuffle';
// import { useParams, Link, useHistory } from 'react-router-dom';

// const Question = (props) => {
//     const { id } = useParams();
//     // var id = window.location.pathname.split('/')[2];
//     var history = useHistory();
//     var [question, setQuestion] = React.useState();
//     var [correctAns, setCorrectAns] = React.useState('');

//     var [score, setScore] = React.useState([0, 0, 1]);

//     useEffect(() => {
//         setCorrectAns('');
//         fetch('https://restcountries.com/v2/all')
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data.length);
//                 var options = [
//                     data[id].capital,
//                     data[
//                         Math.floor(Math.random() * (data.length - id + 1) + id)
//                     ].capital,
//                     data[
//                         Math.floor(Math.random() * (data.length - id + 1) + id)
//                     ].capital,
//                     data[
//                         Math.floor(Math.random() * (data.length - id + 1) + id)
//                     ].capital,
//                 ];
//                 setQuestion({
//                     id: id,
//                     g: false,
//                     question: data[id].name,
//                     answer: data[id].capital,
//                     options: arrayShuffle(options),
//                 });
//             });
//     }, [id]);
//     return (
//         <div>
//             <h1>Question : {props.score[2]}</h1>
//             <h1>Player 1 score : {props.score[0]}</h1>
//             <h1>Player 2 score : {props.score[1]}</h1>
//             <h2>Player : {props.score[2] % 2 === 0 ? 2 : 1}</h2>
//             {question && <h1>What is the Capital of {question.question} ?</h1>}
//             {question &&
//                 question.options.map((option, index) => {
//                     return (
//                         <>
//                             <input
//                                 type='button'
//                                 key={index}
//                                 value={option}
//                                 name={id}
//                                 onClick={(e) => {
//                                     if (e.target.value === question.answer) {
//                                         if (props.score[2] % 2 === 0) {
//                                             props.setScore([
//                                                 props.score[0],
//                                                 props.score[1] + 1,
//                                                 props.score[2] + 1,
//                                             ]);
//                                         } else {
//                                             props.setScore([
//                                                 props.score[0] + 1,
//                                                 props.score[1],
//                                                 props.score[2] + 1,
//                                             ]);
//                                         }
//                                         setCorrectAns(question.answer);
//                                     } else {
//                                         setCorrectAns(question.answer);
//                                     }
//                                     setTimeout(() => {
//                                         history.push(
//                                             `/question/${
//                                                 parseInt(
//                                                     Math.floor(
//                                                         Math.random() *
//                                                             (245 - 1 + 1) +
//                                                             1
//                                                     )
//                                                 ) + 1
//                                             }`
//                                         );
//                                     }, 1000);
//                                 }}
//                             />{' '}
//                             &nbsp;
//                         </>
//                     );
//                 })}
//             <br />
//             {correctAns && <h1>Correct Answer is {correctAns}</h1>}
//             {/* <Link to={`/question/${parseInt(id) - 1}`}>Back</Link>
//             <br />
//             <Link to={`/question/${parseInt(id) + 1}`}>Next</Link> */}
//         </div>
//     );
// };

// export default Question;
