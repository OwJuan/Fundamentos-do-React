import React from 'react';
import Post from '../Post/Post';
import Header from '../Header/Header';

function App() {
  return (
    <div>
      <Header>
        <h2>Posts da semana</h2>
      </Header>
      <hr />

      <Post
        likes={20}
        post={{
          title: "Titulo da notícia 01",
          subtitle: "Subtítulo da notícia 01"
        }}  
      />
      <Post
        likes={30}
        post={{
          title: "Titulo da notícia 02",
          subtitle: "Subtítulo da notícia 02"
        }}  
      />
      <Post
        likes={50}
        post={{
          title: "Titulo da notícia 03",
          subtitle: "Subtítulo da notícia 03"
        }}  
      />
    </div>
  );
}

export default App;
