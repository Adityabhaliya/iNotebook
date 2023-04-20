import React from 'react'


export default function About() {

  return (
    <>
      <div className="about-section">
        <h1>  About Us  </h1>
        <p> A iNotebook app is a software application designed to help individuals or teams manage their tasks and to-dos more efficiently.</p>
        <p> The app allows users to create and organize lists of tasks, set deadlines and reminders, prioritize tasks, and mark completed tasks as done.</p>
      </div>

      <h2 className='text-center my-3'  style={{ color: 'green' }}>Our Team</h2>
      <div className="row">

        <div className="column">
          <div className="card">

            <div className="container">
              <h2>xxx xxxx</h2>
              <p className="title">xxx xxxxx</p>
              <p>xxxxxxxxxx xx xxxx xx x xxxx.</p>
              <p>xxxx xxxxxx  x xx x x xxx</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">

            <div className="container">
              <h2>Aditya bhaliya</h2>
              <p className="title">CEO & Founder</p>
              <p>Node.js and react.js developer</p>
              <p>aadi@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>



        <div className="column">
          <div className="card">

            <div className="container">
              <h2>xxx xxxx</h2>
              <p className="title">xxx xxxxx</p>
              <p>xxxxxxxxxx xx xxxx xx x xxxx.</p>
              <p>xxxx xxxxxx  x xx x x xxx</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>

      <h4 className='mx-5 ' style={{ color: 'green' }}> If You Want To Access Home Page than Create an Account and Finish Login Process, Thnak YOu For VISite.....
      </h4>
      <img className='my-3 ' style={{ display: 'block', color: 'red', marginLeft: 'auto', marginRight: 'auto', width: '10%' }} src="https://freepngimg.com/save/141073-face-happy-png-image-high-quality/715x715" alt=''></img>
    </>
  )
}


