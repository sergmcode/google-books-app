export interface appState {
  darkTheme: boolean;
}

const initalState: appState = {
  darkTheme: false
}

export const appReducer = (state: appState = initalState, action: any): appState => {
  switch(action.type){
    case "SET_DARKMODE":
      return { ...state, darkTheme: action.payload }
    default:
      return state;
  }
}