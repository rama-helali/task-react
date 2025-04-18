import { createContext } from "react"
import ScreenSize from "../../utils/ui/screen-size"

export type AppLoading = "languages" | "roles" | "permissions"

export type AppData = "languages" | "roles" | "permissions"

export type Themes = "dark" | "light"
export interface IInternalState {
  loading: AppLoading[]
  screenSize: ScreenSize
}

export const internalState: IInternalState = {
  loading: [],
  screenSize: "laptopOrDesktop",
}

export interface IExternalState extends IInternalState {
  actions: {}
}

export const externalState: IExternalState = {
  ...internalState,
  actions: {},
}

const AppContext = createContext(externalState)

export default AppContext
