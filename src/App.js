import './App.scss';
import {
  CheckoutComponent,
  ProfileComponent,
  PriceComponent
} from './components/index';

function App() {
  return (
    <div className="App">
      <ProfileComponent />
      <PriceComponent />
      <CheckoutComponent />
    </div>
  );
}

export default App;
