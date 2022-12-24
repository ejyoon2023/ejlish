import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function answerForm(){
  const [question, setQuestion] = useState<string>("1+2?");
  const [answer, setAnswer] = useState<string>("");
  const [id, setId] = useState<number>(0);

  useEffect(() => {
    async function getQuestion() {
      console.log(process.env.NEXT_PUBLIC_SERVER, "HIHIHI")
      const response = await axios.get(process.env.NEXT_PUBLIC_SERVER+'/question');
      console.log("res",response.data.data.question);
      setQuestion(response.data.data.question);
      setId(response.data.data.content_id)
    }
       getQuestion(); 
    },[]);


  const submitAnswer = async (answer: string) => {
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
        setId(res.data.data.content_id);
    } else {
        alert("틀렸습니다! 다시 입력해주세요 🖍");
    }
  }
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>문제</Form.Label>
      <Form.Text className="text-muted">
        {question}
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>정답</Form.Label>
      <Form.Control type="email" placeholder="정답을 입력하세요" onChange={(e)=>setAnswer(e.target.value)} />
    </Form.Group>
    <Button variant="primary" type="submit" onClick={() => submitAnswer(answer)}>
      Submit
    </Button>
  </Form>
  );
};
