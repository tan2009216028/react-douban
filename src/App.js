import React, { Component } from 'react';

import styled from 'styled-components';
import './App.css';
const Wrapper = styled.section`
  display: flex;
  margin: 0 auto;
  width: 300px;
  text-align: center;
  p {
    background: #3eff26;
    border-radius: 5px;
    &:hover{
      cursor: pointer;
      background: yellow;
    }
  }
`;
const Button = styled.button.attrs({
    className: 'test-btn'
})`
  width: 100px;
  height: 30px;
  color: white;
  background: skyblue;
  cursor: pointer;
`;
class App extends Component {
    render() {
        return (
            <div className="App" style={{ color: 'red', fontSize: '18px' }}>
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Wrapper className="App-wra">
                    <p>你好我们测试</p>
                    <div>
                        <Button>按钮</Button>
                    </div>
                </Wrapper>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload. 你好
                </p>
            </div>
        );
    }
}
export default App;
