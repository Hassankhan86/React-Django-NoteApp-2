import { Layout } from 'antd';
import LayoutRoutes from '../components/LayoutRoutes';
import Register from "./../pages/Register";
import Logout from "./../pages/Logout";
import FormIdData from "./../pages/FormIdData";
import FormList from "./../pages/FormList";
import Login from "./../pages/Login";
import AppHeader from '../components/AppHeader';
import UserHeader from '../components/UserHeader';

const { Content, Footer } = Layout;

const AppLayout = () => {

  const routes = [
    {
      exact: true,
      path: '/',
      component: FormList
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/notes/:id',
      component: FormIdData
    },
    {
      path: '/register',
      component: Register
    },
    // {
    //   path: '/logout',
    //   component: Logout
    // },
  ];

  return (
    <Layout className="mainLayout">
      <AppHeader />
      <Content style={{ marginTop: '100px' }}>
        <LayoutRoutes routes={routes} />
        {/* <FormList /> */}
      </Content>
      {/* <Footer> */}
      {/* <NoteFooter /> */}
      {/* </Footer> */}
    </Layout>
  )
}

export default AppLayout;
