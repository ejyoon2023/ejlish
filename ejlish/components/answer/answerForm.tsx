import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";

export default function answerForm(){
  const [question, setQuestion] = useState<string>("1+2?");
  const [answer, setAnswer] = useState<string>("0");

  const submitAnswer = (answer: string) => {
    if (answer === "3") alert("OKKK")
    else alert("WRONNNGG")
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
