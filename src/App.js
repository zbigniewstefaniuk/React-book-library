
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Book />
      </header>
    </div>
  );
}

function Book() {

  return (
    <div>
      <article className='book'>
        <Image />
        <Title />
        <Author />
      </article>

    </div>)
}

function Image() {

  return (
    <img src='https://images-na.ssl-images-amazon.com/images/I/41aM4xOZxaL._SX277_BO1,204,203,200_.jpg' />
  )
}



function Title() {
  return (
    <div>

    </div>
  )
}

function Author() {
  return (<div>

  </div>)
}


export default App;
