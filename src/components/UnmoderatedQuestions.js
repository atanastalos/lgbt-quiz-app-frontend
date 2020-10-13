import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function UnmoderatedQuestions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.backendUrl}/questions/unmoderated`)
      .then(res => {
        setQuestions(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return questions.map((quest, index) => (
    <div className="list" key={index}>
      <h3>{quest.description}</h3>
      <p>{quest.alternatives[0].text}, {quest.alternatives[0].isCorrect}</p>
      <p>{quest.alternatives[1].text}, {quest.alternatives[0].isCorrect}</p>
      <p>{quest.alternatives[2].text}, {quest.alternatives[0].isCorrect}</p>
      <p>{quest.alternatives[3].text}, {quest.alternatives[0].isCorrect}</p>
      <p>{quest.category}</p>
      <p>{quest.extendedAnswer}</p>
    </div>
  ));
}
