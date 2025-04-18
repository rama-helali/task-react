import ScreenSize from "../../utils/ui/screen-size"
import { IInternalState, AppLoading, Themes } from "./context"

type Action =
  | { type: "SET_SCREEN_SIZE"; payload: { screenSize: ScreenSize } }
  | { type: "SET_LOCALE"; payload: { locale: any } }
  | { type: "SET_THEME"; payload: { theme: Themes } }
  | { type: "LOADING"; payload: { loading: AppLoading[] | AppLoading } }


const reducer = (state: IInternalState, action: Action): IInternalState => {
  switch (action.type) {
    case "SET_SCREEN_SIZE":
      return { ...state, screenSize: action.payload.screenSize }

    case "LOADING":
      return {
        ...state,
      }

    default:
      return state
  }
}

export default reducer
