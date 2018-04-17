import React, { Component } from 'react'


class Coursesales extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0
    }
  }

  sumPrice = (price) => {
    this.setState({ total: this.state.total + price } )
  }

  render() {
    var courses = this.props.items.map((item, i) => {
      return <Course name={item.name} price={item.price} key={i} sumPrice={this.sumPrice} active={item.active} />
    })
    return(
      <div>
        <h1>You can buy courses: </h1>
        <div id="courses">
          {courses}
          <p id="total"> Total <b>{this.state.total}</b></p>
        </div>
 
      </div>
    )
  }
}



class Course extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }
  }

  clicker = () => {
    var active = !this.state.active;
    this.setState({ active: active });
    this.props.sumPrice(active ? this.props.price : -this.props.price)
  }

  render() {
    return(
      <div>
        <p onClick={this.clicker}>{this.props.name} <b>{this.props.price}</b></p>
      </div>
    )
  }
}


export default Coursesales;