import './App.css';
import { Component } from 'react';


class App extends Component {
  state = {
    posts: [
    ]
  }; 

  componentDidMount() {
   this.loadPosts();
  }

  // Função assíncrona para consumir a API de posts e de fotos
  loadPosts = async () => {
    // Realiza a requisição para obter os dados dos posts
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    // Aguarda ambas as requisições terminarem ao mesmo tempo
    // Desestrutura os resultados em 'posts' e 'photos'
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

     // Converte a resposta da requisição para JSON
    const postsJson = await posts.json();
    const photosJson = await photos.json();


    // Mapeia os posts, combinando cada um com uma foto correspondente pelo índice
    // Retorna um novo objeto com os dados do post e a URL da imagem como 'cover'
    const postsAndPhotos = postsJson.map((post,index) => {
      return { 
        ...post, // inclui todas as propriedades originais do post
        cover: photosJson[index].url // adiciona a URL da imagem como 'cover'
      };
    });

    // Atualiza o estado do componente (em um componente React)
    this.setState({ posts: postsAndPhotos });
  }


  render() {
    const { posts } = this.state;
     
    return (
      <section className='container'>
        <div className="posts">
  
          {posts.map(post =>
          (
            <div className='post'>
              <img src={post.cover} alt={post.title} />
                <div key={post.id} className='post-content'>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
            
          )
          )}

        </div>
      </section>

    );
  }
}


export default App;
