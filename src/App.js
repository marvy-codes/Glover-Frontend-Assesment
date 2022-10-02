import './App.css';
import api from './api/api.js'
import Header from './components/Header';
import FeaturedEvents from './components/FeaturedEvents';
import AllSection from './components/AllSection';

function App() {
  console.log(api.getData().then(res => console.log(res.data)).catch(err => console.log(err)))
  return (
    <div className="App">
      <Header />
      <FeaturedEvents />
      <AllSection  />
    </div>
  );
}

export default App;
