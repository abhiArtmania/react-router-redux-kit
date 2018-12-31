import { homeActionType } from '../Constants'

const initialState = {
  user:{}
}

const home = (state = initialState, action) => {
  switch (action.type) {
    case homeActionType.FETCH_DATA:
      return {
        ...state,
        user: {
          name:'ABC'
        }
      }
    default:
      return { ...state }
  }
}

export default home
