import React from 'react';

class Customer extends React.Component{
    render(){
        return(
           <div>
               <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.gender}</td>
                    <td><img src={this.props.image}/></td>
              </tr>
            </div>  
        )
    }
}

export default Customer
