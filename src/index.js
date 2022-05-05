import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Test from './tests/test'
// import App from './components/app/app';
// import Counter from "./tests/Counter/Counter";
import styled from "styled-components";
import {Button} from "./tests/test";
import 'bootstrap/dist/css/bootstrap.min.css';
import Bootstrap from "./tests/bootstrap";

const BigButton = styled(Button)`
  color: red;
  width: 245px;
  margin: 20px auto 0;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        {/*<App/>*/}
        {/*<Test/>*/}
        {/*<BigButton as={"a"}>*/}
        {/*    CLICK*/}
        {/*</BigButton>*/}
        {/*<Counter counter={0}/>*/}
        <Bootstrap/>
    </StrictMode>
);
