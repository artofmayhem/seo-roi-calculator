import './App.scss';
import Nav from './components/Nav'
import FormContainer from './components/FormContainer'

function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="w-screen app-header h-auto text-white  text-center flex flex-col justify-center align-center">
        <h1 className={'py-10 text-6xl'} style={{textShadow:'0 0 2rem black'}}>Azella Financial Services</h1>
        <h3 className={'text-4xl'}>SEO ROI Calculator</h3>
      </header>
      <FormContainer/>
    </div>
  );
}

export default App;
