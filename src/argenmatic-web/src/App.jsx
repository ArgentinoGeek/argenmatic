import './App.css';
import FancyNavbar from './components/FancyNavbar/FancyNavbar';
import Header from './components/Header/Header';
import JumboButton from './components/JumboButton/JumboButton';

function App() {
  return (
    <div className="App">
      <FancyNavbar />
      <Header resumesCreated={120587452} />
      <JumboButton
      primaryText="Create a resume"
      secondaryText="For free"
      destinationUrl="https://github.com/ArgentinoGeek/argenmatic"
      isPrimary={false}
       />
       <JumboButton
      primaryText="Log in"
      secondaryText="to save your information"
      destinationUrl="https://github.com/ArgentinoGeek/argenmatic"
      isPrimary={true}
       />
    </div>
  );
}

export default App;
