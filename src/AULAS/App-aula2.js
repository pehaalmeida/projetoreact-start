import './App.css';
import { Component } from 'react';


class App extends Component {
  //Criando um Arrey
  state = {
    counter: 0,
    posts: [
      {
       id: 1,
       title: 'o titulo 1',
       body: 'o corpo 1' 
      },
      {
        id: 2,
        title: 'o titulo 2',
        body: 'o corpo 2' 
       },
       {
        id: 3,
        title: 'o titulo 3',
        body: 'o corpo 3' 
       },
    ]
  };
  timeoutUpdate = null;

 

  componentDidMount() {
   this.handleTimeout();
  }

  componentDidUpdate() {
    clearTimeout(this.timeoutUpdate);
    this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate); 
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'O Titulo mudou';

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 1000);
  }

  render() {
    
    const { posts, counter } = this.state;
     
    // criando as linhas do Arrey na tela
    return (
      <div className="App">
        {/* {posts.map(post => <h1 key={post.id}>{post.title}</h1>)} [FORMA DE FAZER PASSANDO APENAS UM TAG] */}
      
        <h1>{counter}</h1>
        {posts.map(post =>
        //crinado bloco dos dados do arrey os mais de um dado na tela
        (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        )
        )}

      </div>
    );
  }
}


export default App;
