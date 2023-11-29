import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AttendeesList from './Components/AttendeeList';
import FilterSidebar from './Components/FilteredSidebar';

const App = () => {
  return (
    <div className="App">
      <Header />
      <h1>Hoyas in August Event Attendees</h1>
      <FilterSidebar  />
      <AttendeesList  />
      <Footer />
    </div>
  );
}

export default App;
