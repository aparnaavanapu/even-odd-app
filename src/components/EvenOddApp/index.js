import { Component } from 'react'
import './index.css'

class EvenOddApp extends Component{

    state={
        count:0,
        text:'Even'
    }


    randomNumber=()=>{
        


        const randNumber=Math.floor(Math.random()*100);
        const newText=randNumber%2===0?'Even':'Odd'
        this.setState({
            count:randNumber,
            text:newText
        })
        

    }

    render(){
        const {count,text}=this.state
        
        return(
            <div className="bg-container">
            <div className="card-container">
                <h1 className="heading">Count {count}</h1>
                <p className="description">Count is {text}</p>
                <button onClick={this.randomNumber} className="btn">Increment</button>
                <p  className="message">*Increase By Random Number Between 0 to 100</p>
            </div>
        </div>
        )
    }

}


export default EvenOddApp