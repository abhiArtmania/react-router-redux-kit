import { homeActionType } from '../Constants'

const initialState = {
  user:{
    name:'Abhishek',
    location:'Varanasi'
  },
  languages:[]
}

const home = (state = initialState, action) => {
  switch (action.type) {
    case homeActionType.FETCH_DATA:
      return {
        ...state,
        user: {
          name:'Abhishek Singh',
          location:'Gurgaon'
        }
      }
    case homeActionType.FETCH_LANGUAGES:
      return {
        ...state,
        languages:action.payload
      }
    default:
      return { ...state }
  }
}

export default home
