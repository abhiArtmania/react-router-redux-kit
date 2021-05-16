import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux'
import Header from './Header'
import { fetchData, fetchLanguages } from '../Actions/home'
import { bindActionCreators } from 'redux'
import { regex } from '../Constants'

const mapStateToProps = (state) => {
  return {
    homeInfo:state.home
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchData,
      fetchLanguages
    },
    dispatch
  )
}


const Home = (props) => {
  const {history = {}} = props;
  const[state,setState] = useState({
    email:''
  })
  const[errors,setErrors]= useState({error:false})
  const { homeInfo, fetchData, fetchLanguages } = props
  const userInfo = homeInfo.user
  useEffect(() => {
    fetchData()
  }, [])

  const submitEmail = () => {
    if (!state.email || !regex.email.test(state.email)){
      setErrors( {error:'Please enter a valid email!'} );
    } else {
      fetchLanguages(()=>{
        setErrors( {error:false} );
      });
    }
  }
  return (
    <div className="home">
      <Header/>
      <div className='wrapper'>
        <div><h3 data-testid="home-txt">Home Page</h3></div>
        <p>
          <span>
          <div>{`Name: ${userInfo.name}`}</div>
          <div>{`Location: ${userInfo.location}`}</div>
          <div>{`Email: ${state.email}`}</div>
          </span>
        </p>
        <span>
          <input
            data-testid='email-input'
            name='email'
            type='text'
            value={state.email}
            onChange={(e)=>{
              setState({...state,['email']:e.target.value})
            }}
          />
          <button data-testid='button' onClick={submitEmail}>Get language list</button>
          {errors.error && <div data-testid='error-message' style={{color:'red'}}>{errors.error}</div>}
        </span>
        <div>
          <p>
            <span data-testid='about-us-link' style={{cursor:'pointer'}} onClick={()=>{
              history.push('/about')
            }}>About Us</span>
          </p>
        </div>
      </div>
      {homeInfo && homeInfo.languages && homeInfo.languages.length ? <div data-testid="languages-list">
        <h3>Available Language</h3>
        <ul>
          {homeInfo.languages.map((l,i)=>{
            return <li key={i}>{l.name}</li>
          })}
        </ul>
      </div> : ''}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
