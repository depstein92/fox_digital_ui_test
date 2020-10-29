import './App.scss';
import {
  CheckoutComponent,
  ProfileComponent,
  PriceComponent
} from './components/index';

function App() {
  return (
    <div className="App">
      <div className="layout-wrapper">
      <ProfileComponent />
      <PriceComponent />
        {// <CheckoutComponent />
        }
      </div>
    </div>
  );
}

export default App;
