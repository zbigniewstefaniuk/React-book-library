
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="book-list">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
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
    <img src='https://images-na.ssl-images-amazon.com/images/I/41aM4xOZxaL._SX277_BO1,204,203,200_.jpg' alt='book cover' />
  )
}



function Title() {
  return (
    <div>
      <h1>1984</h1>
    </div>
  )
}

function Author() {
  return (
    <div>
      <h4>George Orwell</h4>
    </div>)
}


export default App;
