import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home/Home";
import { Careers } from "./pages/Careers/Careers";
import { Notfoundpage } from "./pages/Notfoundpage/Notfoundpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<Notfoundpage />}/>
          <Route index element={<Home />}/>
          <Route path="careers" element={<Careers />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
