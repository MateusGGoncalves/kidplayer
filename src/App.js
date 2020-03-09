import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <div><ReactTwitchEmbedVideo channel="kidplayerr"/></div>
      
      </header>
        <div className="App-Historia">
            <p className="text-xs-center">
             Sobre Mim  
             </p>
             <br/>
             <div className="Sobremim">
             Olá pessoal! Pra quem não me conhece sou o Leandro tenho "7 anos" e sou streamer e jogador profissional de fortnite.
             Faço lives todos os dias no canal do meu pai(Weverton) na twitch. Resumindo sou um garoto normal, eu gosto de brincar na rua, vou pra escola, e tenho varios amigos.
             Comecei a jogar jogos online(CSGO e LOL) com 3 anos, e vendo minha evolução o meu pai começou a fazer streams junto comigo. Atualmente jogo mais Fortnite,
             comecei desde a season 3. E hoje vivo o sonho meu e do meu pai de se tornar um grande streamer. Claro que tudo isso eu não consegui sozinho, e
             graças a Deus tive a ajuda de vários amigos do cenário, mas especialmente a minha familia,
              só sou o que sou por conta da minha familia, resumindo a Palavra é "Gratidão" obrigado Pessoal!
             </div>
             <br/>
             <br/>
            
             <div className="App-link">
             <a
          className="App-link fa fa-twitch"
          href="https://www.twitch.tv/kidplayerr"
          target="_blank"
          rel="noopener noreferrer"
          >
          Twitch
        </a>
        
        <a
          className="App-link fa fa-youtube"
          href="https://www.youtube.com/channel/UC3kX1YPxVjVuJPaeZ2mSLCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube
        </a>
        
        <a
          className="App-link fa fa-instagram"
          href="https://www.instagram.com/kidplayerr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        
        <a
          className="App-link fa fa-twitter"
          href="https://twitter.com/Kidplayer14"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        
        <a
          className="App-link fa fa-paypal"
          href="https://streamelements.com/kidplayerr/tip"
          target="_blank"
          rel="noopener noreferrer"
        >
          Doação
          </a>
          </div>
          </div>
        <Footer/>
    </div>
  );
}

export default App;
