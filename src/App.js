import './App.css';
import Counter from './Components/Counter';
import Form from './Components/Form';

function App() {
  return (
    <>
      <div className="container">
        <div className="row bg-dark">
          <div className="col-md-6 mx-auto text-center py-3 my-4 text-white bg-warning counter">
            <h3>Increment - Decrement</h3>
            <Counter />
          </div>
          <div className="col-md-8 mx-auto py-3 px-5 my-4 text-white bg-danger form">
            <h3 className="text-center">Form</h3>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
