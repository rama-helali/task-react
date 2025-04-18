import {Route, Routes } from "react-router-dom";
import "./App.css";
import BaseLayout from "./components/general/layout/base-layout";
import Error404 from "./pages/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}></Route>
      <Route
        path="*"
        element={
          <>
            <Error404 />
          </>
        }
      />
    </Routes>
  );
}
export default App;
