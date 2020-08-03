import React,{useState} from 'react';
function Contact() {
  const [data, setData] = useState({
    fullname:'',
    mobile:'',
    email:'',
    message:'',
  })
  const Handle=(e)=>{
    const {name,value}=e.target;
    setData((Old)=>{
     return {
       ...Old,
       [name]:value
     }
    })
  }
  const SubmitMe=(e)=>{
    e.preventDefault();
    alert(`Your Name ${data.fullname} Contact Number is ${data.mobile} and email is ${data.email}`);
  }
  return (
    <>
    <div className="my-">
      <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={SubmitMe}>
          <div className="mb-3">
            <label className="form-label">FullName</label>
            <input type="text" className="form-control"
            name="fullname"
            value={data.fullname}
            onChange={Handle}
             placeholder="Enter Your Name..."/>
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="text" className="form-control"
            name="mobile"
            value={data.mobile}
            onChange={Handle}
             placeholder="Mobile Number..."/>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control"
            name="email"
            value={data.email}
            onChange={Handle}
             placeholder="Enter Your Email Address..."/>
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control"
            name="message"
            value={data.message}
            onChange={Handle}
             rows="3"></textarea>
          </div>
          <div className="col-12">
          <button className="btn btn-primary" type="submit">Submit form</button>
        </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
