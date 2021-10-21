import './App.scss';
import Nav from './components/Nav'
import FormContainer from './components/FormContainer'

function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="w-screen app-header h-auto text-white pl-10 pt-20  text-left flex flex-col ">
        <h1 className={'py-10 text-6xl'} style={{textShadow:'0 0 2rem black'}}>Azella Financial Services</h1>
        <h3 className={'text-4xl'}>SEO ROI Calculator</h3>
      </header>
      <FormContainer/>
    </div>
  );
}

export default App;
