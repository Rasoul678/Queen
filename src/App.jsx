import * as Styled from "./App.styled";
import Sidebar from "./layouts/sidebar/Sidebar";
import Header from "./layouts/header/Header";
import Setting from "./layouts/setting/Setting";

const App = () => {
  return (
    <Styled.AppWrapper>
      <Sidebar />
      <Header />
      <Setting />
    </Styled.AppWrapper>
  );
};

export default App;
