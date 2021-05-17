import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 500px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > * {
    margin-bottom: 20px;
  }

  input {
    font-size: 14px;
  }
`;

const SendButton = styled.button`
  cursor: pointer;
  border: none;
  font-size: large;
  padding: 10px;
  background-color: #5bbf87;
  color: white;
`;

const TextBox = styled.textarea`
  height: 500px;
`;

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  return (
    <Container>
      {isSent ? (
        <h1>Message sent! We'll get back to you soon.</h1>
      ) : (
        <React.Fragment>
          <h1>Any questions or concerns?</h1>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <TextBox />
          <SendButton onClick={() => setIsSent(true)}>Send</SendButton>
        </React.Fragment>
      )}
    </Container>
  );
};

export default Contact;
