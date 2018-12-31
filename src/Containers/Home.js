import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from './Header'
import { fetchData } from '../Actions/home'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return {
    userInfo:state.home.user
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchData
    },
    dispatch
  )
}

class Home extends Component {
  constructor(props){
    super()
    this.state={

    }
  }

  componentWillMount(){
    this.props.fetchData()
  }

  render() {
    return (
      <div className="home">
        <Header/>
        <div className='wrapper'>
          Home
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
