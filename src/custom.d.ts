declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof import('redux-devtools-extension').composeWithDevTools;
  }
}