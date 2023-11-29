import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <h1>Hoyas in August Event Attendees</h1>
      <FilterSidebar filters={filters} setFilters={setFilters} />
      <List attendees={filteredAttendees} />
      <Footer />
    </div>
  );
}

export default App;
