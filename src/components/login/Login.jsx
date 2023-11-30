// Write all the code here
//import React from 'react';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn, MDBIcon,
  MDBInput, MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { CiBluetooth } from 'react-icons/ci';
const Login = () => {

  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const users = [
    {
      username: 'admin1@gmail.com',
      password: '12345678'
    },
    {
      username: 'admin2',
      password: '012345678'
    }
  ];
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  const { uname, pass } = data;


  const checkUser = () => {

    const usercheck = users.find(user => (user.username === data.username && user.password === data.password));

    if (usercheck) {
      alert("Login successful");
      window.location.replace("/");
    } else {

      alert('Invalid username/password');
    }

  }

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {

    e.preventDefault();
    checkUser();

  }


  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50 signup">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem >
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} style={{ background: "lightblue" }}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'} >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>


      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>
          <form id="form" >
            <div className="text-center mb-3">
              <p>Sign in with:</p>

              <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm" />
                </MDBBtn>
              </div>
              <p className="text-center mt-3">or:</p>
            </div>


            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' name='username' value={uname} onChange={changeHandler}
              className="Input" />

            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name='password' value={pass}
              onChange={changeHandler} className="Input" />

            <div className="d-flex justify-content-between mx-4 mb-4">

              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div>
            <MDBBtn className="mb-4 w-100" onClick={handleSubmit}>Sign in</MDBBtn>



            <p className="text-center">Not a member? <a href="#!">Register</a></p>
          </form>
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign un with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm" />
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' />
          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' />
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' />
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>

  )
}

export default Login;