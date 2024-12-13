import React, { useState } from 'react';

// Объект с вопросами и ответами
const questions = [
  {
    question: 'Как назывался новый столицу России, основанный Петром I?',
    answers: ['Екатеринбург', 'Новгород', 'Санкт-Петербург', 'Москва'],
    correctAnswer: 'Санкт-Петербург'
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
    correctAnswer: 'Екатерина I'
  },
  {
    question: 'В каком году Пётр I провел первую реформу военного дела?',
    answers: ['1690', '1701', '1712', '1725'],
    correctAnswer: '1701'
  },
  {
    question: 'Когда умер Пётр I?',
    answers: ['1721', '1725', '1735', '1742'],
    correctAnswer: '1725'
  },
  {
    question: 'Какая должность была последней у Петра I?',
    answers: ['Царь', 'Император', 'Генерал', 'Премьер-министр'],
    correctAnswer: 'Император'
  },
];

const StalinQuestions = [
  {
    question: 'Какое настоящее имя у Сталина?',
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

const LeninQuestions = [
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

// Функция для рендера вопросов
const renderQuestions = (questions, score, setScore, currentQuestion, setCurrentQuestion) => {
  return (
    <div>
      <h1>{questions[currentQuestion].question}</h1>
      {questions[currentQuestion].answers.map((answer, index) => (
        <button key={index} onClick={() => handleAnswer(answer, questions[currentQuestion].correctAnswer, score, setScore, currentQuestion, setCurrentQuestion, questions)}>
          {answer}
        </button>
      ))}
    </div>
  );
};

// Функция для рендера вопросов с вариантами ответов
const renderQuestionsWithOptions = (questions, score, setScore, currentQuestion, setCurrentQuestion) => {
  return (
    <div>
      <h1>{questions[currentQuestion].question}</h1>
      {questions[currentQuestion].answers.map((answer, index) => (
        <button key={index} onClick={() => handleAnswerWithOptions(answer, questions[currentQuestion].correctAnswer, score, setScore, currentQuestion, setCurrentQuestion, questions)}>
          {answer.text}
        </button>
      ))}
    </div>
  );
};

// Функция для рендера вопросов с вариантами ответов для Сталина
const renderStalinQuestions = (questions, score, setScore, currentQuestion, setCurrentQuestion) => {
  return (
    <div>
      <h1>{questions[currentQuestion].question}</h1>
      {questions[currentQuestion].options.map((option, index) => (
        <button key={index} onClick={() => handleAnswerStalin(option, questions[currentQuestion].correctAnswer, score, setScore, currentQuestion, setCurrentQuestion, questions)}>
          {option}
        </button>
      ))}
    </div>
  );
};

// Функция для обработки ответов
const handleAnswer = (selectedAnswer, correctAnswer, score, setScore, currentQuestion, setCurrentQuestion, questions) => {
  if (selectedAnswer === correctAnswer) {
    setScore(score + 10);
  }
  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion);
  } else {
    alert(`Викторина окончена со счётом: ${score}/${questions.length}`);
  }
};

// Функция для обработки ответов с вариантами
const handleAnswerWithOptions = (selectedAnswer, correctAnswer, score, setScore, currentQuestion, setCurrentQuestion, questions) => {
  if (selectedAnswer.correct) {
    setScore(score + 10);
  } else {
    setScore(score - 5);
  }
  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion);
  } else {
    alert(`Викторина окончена со счётом: ${score}`);
    setCurrentQuestion(0);
    setScore(0);
  }
};

// Функция для обработки ответов Сталина
const handleAnswerStalin = (selectedAnswer, correctAnswer, score, setScore, currentQuestion, setCurrentQuestion, questions) => {
  if (selectedAnswer === correctAnswer) {
    setScore(score + 10);
  } else {
    setScore(score - 5);
  }
  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion);
  } else {
    alert(`Викторина окончена со счётом: ${score}`);
  }
};

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div>
      {renderQuestions(questions, score, setScore, currentQuestion, setCurrentQuestion)}
    </div>
  );
};

const LeninQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div>
      {renderQuestionsWithOptions(LeninQuestions, score, setScore, currentQuestion, setCurrentQuestion)}
    </div>
  );
};

const StalinQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div>
      {renderStalinQuestions(StalinQuestions, score, setScore, currentQuestion, setCurrentQuestion)}
    </div>
  );
};

export default QuizGame;
export { LeninQuiz, StalinQuiz };
