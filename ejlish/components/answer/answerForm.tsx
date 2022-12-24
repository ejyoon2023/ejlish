import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { theme } from "../../styles/theme";

export default function answerForm(){
  const [question, setQuestion] = useState<string>("1+2?");
  const [answer, setAnswer] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [correctAnswer, setCorrectAnswer] = useState<string>("");
  const [AAnswer, setAAnswer] = useState<string>("");

  useEffect(() => {
    async function getQuestion() {
      console.log(process.env.NEXT_PUBLIC_SERVER, "HIHIHI")
      const response = await axios.get(process.env.NEXT_PUBLIC_SERVER+'/question');
      console.log("res",response.data.data);
      setQuestion(response.data.data.question);
      setId(response.data.data.content_id);
      setCorrectAnswer(response.data.data.answer);
    }
       getQuestion(); 
    },[]);


  const submitAnswer = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const data = { userAnswer: answer, index: id };
    const res = await axios.post(
      process.env.NEXT_PUBLIC_SERVER+'/answer',
      data
    );
    console.log(res.data.data);
    if (res.data.data === "ok") {
        const res = await axios.get(
          process.env.NEXT_PUBLIC_SERVER+'/question'
        );
        setQuestion(res.data.data.question);
        setAnswer("")
        setId(res.data.data.content_id);
        setCorrectAnswer(res.data.data.answer);
    } else {
        alert("틀렸습니다! 다시 입력해주세요 🖍");
    }
  }

  
  const showAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(correctAnswer);
    setAAnswer(correctAnswer);
  }

  return (
    <Question>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label
                style={{
                    marginBottom: `${theme.space_7}`,
                    fontSize: `${theme.fs_10}`,
                    fontWeight: `${theme.fw_500}`,
                    color: `${theme.very_dark_blue_line}`,
                }}
            >
                
            </Form.Label>
          <Form.Text 
                style={{
                    marginBottom: `${theme.space_7}`,
                    fontSize: `${theme.fs_10}`,
                    fontWeight: `${theme.fw_500}`,
                    color: `${theme.very_dark_blue_line}`,
                }}
            >
            {question}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>정답</Form.Label>
          <Form.Control type="text" placeholder="정답을 입력하세요" onChange={(e)=>setAnswer(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitAnswer}>
          Submit
        </Button>
        <Button variant="primary" type="submit" onClick={showAnswer}>
          정답보기
        </Button>
        {AAnswer}
    </Form>
  </Question>
  );
};

const Question = styled.section`
    padding-top: 10%;
    text-align: center;
    padding-left: 25%;
    padding-right: 25%;
`;
