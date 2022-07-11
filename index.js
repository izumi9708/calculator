import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';





class Calculation extends React.Component {

      constructor(props){
            super(props);
            this.state = {symbol:'＋'}
      }

      addition(){
            const firstInput = Number(document.querySelector('.first-input').value);
            const lastInput = Number(document.querySelector('.last-input').value);
            const addPlace = document.querySelector('.result');
            const selectValue = document.querySelector('select').value;
            let result;

            switch(selectValue){
                  case '1':
                        result = firstInput + lastInput;
                  break;

                  case '2':
                        result = firstInput - lastInput;
                  break;

                  case '3':
                        result = firstInput * lastInput;
                  break;

                  case '4':
                        result = firstInput / lastInput;
                  break;
            }
            addPlace.textContent = result;
      }

      getValue(e){
            const value = e;
            const symbol = document.querySelector('.symbol');
            
            switch(value){
                  case '1':
                        this.setState({symbol:'＋'});
                  break;

                  case '2':
                        this.setState({symbol:'ー'});
                  break;

                  case '3':
                        this.setState({symbol:'X'});
                  break;

                  case '4':
                        this.setState({symbol:'÷'});
                  break;
            }

      }
      
      render(){     
            return (
                  <div className="input-wrapper">
                        <p>半角数字で入力してください</p>
                        <input className="first-input" type='text'></input>
                        <span className="symbol">{this.state.symbol}</span>
                        <input className="last-input" type='text'></input>
                        <button 
                              className="btn"
                              onClick={()=>{this.addition()}}>
                        計算</button>
                        <select 
                              className="select"
                              onChange={(e)=>{
                                    this.getValue(e.target.value);
                              }}
                        >
                              <option value="1">足し算</option>
                              <option value="2">引き算</option>
                              <option value="3">掛け算</option>
                              <option value="4">割り算</option>
                        </select>
                        <div className="result-wrapper">=<span className="result"></span></div>
                  </div>
            );
      }
}






const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<Calculation/>);
