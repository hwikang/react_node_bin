import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

class App extends Component {
  state ={
    customer:""
  }

  //생명주기 -mount 완료될때 실행
  componentDidMount(){
    this.callApi().then(res =>this.setState({customer:res}))
    .catch(err=>console.log(err))
  }
  callApi = async () =>{
    const response = await fetch('/api/customer');
    console.log("res",response);
    const body = await response.json();
    console.log(body)
    return body
  }
  render() {
    return (
      <div className="App">
        <table>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>GENDER</td>
            <td>IMAGE</td>
          </tr>
          {this.state.customer ? 
            this.state.customer.map(c=>{
                return <Customer id={c.id} name={c.name} gender={c.gender} image={c.image}/>
            }) : ""
          }
          
          </table>
      </div>
    );
  }
}

export default App;
