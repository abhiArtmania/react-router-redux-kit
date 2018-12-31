import { homeActionType } from '../Constants'

export function fetchData() {
  return {
    type: homeActionType.FETCH_DATA
  }
}
