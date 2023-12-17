import './App.css';

//Layout App 
import AppLayout from './Layout/app';
import UserLayout from './Layout/user';
import { useSelector } from 'react-redux'

function App() {

  const localStorageToken = localStorage.getItem('myToken');
  const token = useSelector(state => state.userReducer.loginToken)

  return (
    <div>
      {localStorageToken <= null ?
        <AppLayout />
        :
        <UserLayout />
      }
    </div>
  );
}
export default App;

