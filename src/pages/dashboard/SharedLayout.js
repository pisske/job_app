import { Outlet } from "react-router-dom";
import { BigSidebar, SmallSidebar, NavBar } from "../../components/Index";
import Wrapper from "../../assets/wrappers/SharedLayout";
const SharedLayout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <NavBar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
