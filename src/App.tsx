import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { Root } from "./Root";

export function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} />
        <Root />
      </Provider>
    </>
  );
}
