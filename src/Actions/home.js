import { get } from "../http";
import { homeActionType } from '../Constants'

export function fetchData() {
  return {
    type: homeActionType.FETCH_DATA
  }
}

export function fetchLanguages(cb) {
  return (dispatch) => get(`app/respondent/languages`, null)
    .then(res => {
      if (res && res.statusCode == 200) {
        dispatch({
          type: homeActionType.FETCH_LANGUAGES,
          payload: res.data
        })
        if (cb)
          cb()
      } else if (res.statusCode === 401 && res.expired) {
        dispatch(fetchLanguages(cb))
      } else {
        // dispatch(toast.error(res.message))
      }
    })
    .catch(err => {
      // dispatch(hideLoader())
    })
}
