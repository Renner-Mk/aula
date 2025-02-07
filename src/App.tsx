import { PersistGate } from "redux-persist/integration/react";
import { persistConfig } from "./store/rootReducer";
import { Provider } from "react-redux";
import { store } from "./store";
import { Root } from "./Root";

export function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistConfig} />
        <Root />
      </Provider>
    </>
  );
}
