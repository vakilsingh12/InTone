import React from 'react'
import { NavLink } from 'react-router-dom';
function Card(props) {
  const style1={
  position: "absolute",
  bottom: "0",
  height: "60px",
  }
  return (
    <>
    <div className="col-md-4 col-10 mx-auto">
     <div class="card card1">
            <img src={props.img} style={{height:"200px"}} class="card-img-top" alt="Hello"/>
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">{props.content}</p>
              <div style={style1}>
              <NavLink exact to="/" class="btn btn-primary">Learn More</NavLink>
              </div>
            </div>
          </div>
    </div>
    </>
  )
}

export default Card
