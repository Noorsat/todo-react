import React from "react"

export class Main extends React.Component {
  state = {
    counter:1
  }

  render(){
    const {info, descr} = this.props;

    const nameHandler = (e) => {
      this.setState({
        ...this.state,
        user: e.target.value
      })
    }

    const passwordHandler = (e) => {
      this.setState({
        ...this.state,
        password:e.target.value
      })
    }

    const loginHandler = (e) => {
      e.preventDefault();
      if (this.state.user === "Nursat" && this.state.password === "qwerty"){
        this.setState({
          ...this.state,
          isLoggin:true
        })
      }else{
        alert("Login or password is not correct!")
      }
    }

    return (
      <div style={{display:"flex"}}>
        <div onClick={() => this.setState({...this.state, counter: this.state.counter - 1})}>
          -
        </div>
        <div>
          {this.state.counter}
        </div>
        <div onClick={() => this.setState({...this.state, counter: this.state.counter + 1})}>
          +
        </div>
      </div>
    )
  }
}
