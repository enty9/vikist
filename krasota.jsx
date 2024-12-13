import React, { useState } from 'react';
export default QuizGame;


const QuizGame = () => {
  const questions = [
    {
      question: 'Как назывался новый столицу России, основанный Петром I?',
      answers: ['Екатеринбург', 'Новгород', 'Санкт-Петербург', 'Москва'],
      correctAnswer: 'Санкт-Питербург'
    },
    {
      question: 'Как назывался первый корабль, построенный Петром I?',
      answers: ['Орёл', 'Аврора', 'Петропавловск', 'Петр и Павел'],
      correctAnswer: 'Орёл'
    },
      {
        question: 'В каком году Петр I провел первую морскую реформу?',
        answers: ['1689', '1698', '1707', '1716'],
        correctAnswer: '1707'
      },
      {
        question: 'Какое прозвище было у Петра I?',
        answers: ['Бессмертный', 'Железный', 'Великий', 'Стрелецкий'],
        correctAnswer: 'Великий'
      },
      {
        question: 'В каком году родился Пётр I?',
        answers: ['1672', '1682', '1692', '1702'],
        correctAnswer: '1692'
      },
      {
        question: 'Как звалась первая война Петра I?',
        answers: ['Северная', 'Крымская', 'Азовская', 'Полтавская'],
        correctAnswer: 'Азовская'
      },
      {
        question: 'Как звали жена Петра I?',
        answers: ['Елизавета Петровна', 'Анна Иоанновна', 'Екатерина I', 'Мария Фёдоровна'],
        correctAnswer: 'Екатирина I'
      },
      {
        question: 'В каком году Пётр I провел первую реформу военного дела?',
        answers: ['1690', '1701', '1712', '1725'],
        correctAnswer: '1701'
      },
      {
        question: 'Когда умер Петр I?',
        answers: ['1721', '1725', '1735', '1742'],
        correctAnswer: '1725'
      },
      {
        question: 'Какая должность была последней у Петра I?',
        answers: ['Царь', 'Император', 'Генерал', 'Премьер-министр'],
        correctAnswer: 'Император'
      },
    
    ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 10);
    }
    if (currentQuestion < questions.length - 5) {
      setCurrentQuestion(currentQuestion + 10);
    } else {
      alert(`VikIst первый этап окончен со счётом: ${score}/${questions.length}`);
    }
  };

  return (
    <div>
      <h1>{questions[currentQuestion].question}</h1>
      <ul>
        {questions[currentQuestion].answers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => handleAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const questions = [
  {
    question: "Когда родился Владимир Ленин?",
    answers: [
      { text: "22 апреля 1870 года", correct: true },
      { text: "9 октября 1967 года", correct: false },
      { text: "1 мая 1956 года", correct: false },
      { text: "7 ноября 1944 года", correct: false }
    ]
  },
  {
    question: "В каком городе Ленин умер?",
    answers: [
      { text: "Москва", correct: false },
      { text: "Горки", correct: false },
      { text: "Красноярск", correct: false },
      { text: "Горки Ленинские", correct: true }
    ]
  },
  
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (correct) => {
    if (correct) {
      setScore(score + 10);
    } else {
      setScore(score - 5);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`VikIst второй этап окончен со счётом: ${score}`);
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return(
    <div>
      <h1>{questions[currentQuestion].question}</h1>
      {questions[currentQuestion].answers.map((answer, index) => (
        <button key={index} onClick={() => handleAnswer(answer.correct)}>
          {answer.text}
        </button>
      )
    </div>
  );
};


const StalinQuiz = () => {
  const questions = [{question: 'Какое настоящее имя у Сталина?',      
    options: ['Иосиф Виссарионович Джугашвили', 'Владимир Ильич Ульянов', 'Николай II Романов', 'Александр Сергеевич Пушкин'],
    correctAnswer: 'Иосиф Виссарионович Джугашвили'
    },
    {
      question: 'В каком году Сталин стал Генеральным секретарем ЦК ВКП(б)?',
      options: ['1917', '1922', '1928', '1934'],
      correctAnswer: '1922'
    },
    {
      question: 'Какое было реальное отчество Сталина?',
      options: ['Иосифович', 'Давидович', 'Виссарионович', 'Сержантович'],
      correctAnswer: 'Виссарионович'
    },
    {
      question: 'Где родился Сталин?',
      options: ['Грузия', 'Украина', 'Россия', 'Польша'],
      correctAnswer: 'Грузия'
    },
    {
      question: 'В каком году Сталин умер?',
      options: ['1953', '1960', '1970', '1980'],
      correctAnswer: '1953'
    },
    {
      question: 'Какое из прозвищ не принадлежало Сталину?',
      options: ['Вождь народов', 'Отче наш', 'Бардак', 'Вождь всесоветский'],
      correctAnswer: 'Бардак'
    },
    {
      question: 'Какой город был переименован в Сталинград во время Второй мировой войны?',
      options: ['Москва', 'Курск', 'Волгоград', 'Смоленск'],
      correctAnswer: 'Волгоград'
    },
    {
      question: 'Какое из лозунгов не ассоциируется с политикой Сталина?',
      options: ['Мир, труд, май', 'Всё для фронта, всё для победы', 'Каналы - дело народное', 'Да здравствует Сталин - гений мудрец!'],
      correctAnswer: 'Да здравствует Сталин - гений мудрец!'
    },
    {
      question: 'Каков полный текст русских инициалов Й.В. Сталина?',
      options: ['Иди В добрый час', 'Иосиф Виссарионович', 'Искрамедведь Верёвочная подача', 'Индивидуальность важна'],
      correctAnswer: 'Иосиф Виссарионович'
    },
    {
      question: 'Какая книга была издана под псевдонимом Сталина?',
      options: ['"Марксизм и проблемы языкознания"', '"Мятное желание"', '"О чём молчат дети"', '"Зимняя вишня"'],
      correctAnswer: '"Марксизм и проблемы языкознания"'
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 10);
    } else {
      setScore(score - 5);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }