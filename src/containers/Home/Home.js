import React, {Component} from 'react';
import styles from './Home.module.css';
import TypeWriter from '../../components/UI/TypeWriter/TypeWriter';
import Cards from '../../components/Cards/Cards';
import CodeText from '../../components/UI/CodeText/CodeText';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';

class Home extends Component {
  state = {
    cards: [
      {id: 1, title: 'Card1', subtitle: 'This is the first card', img: 'background1'},
      {id: 2, title: 'Card2', subtitle: 'This is the second card', img: 'background2'},
      {id: 3, title: 'Card3', subtitle: 'This is the third card', img: 'background3'},
      {id: 4, title: 'Card4', subtitle: 'This is the fourth card', img: 'background4'},
      {id: 5, title: 'Card5', subtitle: 'This is the fifth card', img: 'background5'},
      {id: 6, title: 'Card6', subtitle: 'This is the sixth card', img: 'background6'}
    ]
  }

  render() {
    return (
      <div className={styles.Home}>
        <div className={styles.MainBackground}></div>
        <div className={styles.Main}>
          <h1>showcase</h1>
          <TypeWriter>const welcome = (showcase) => showcase.projects;</TypeWriter>
          <CodeText words={["world!", "coders!", "everyone!"]} />
          <LoadingSpinner />
        </div>
        <Cards cards={this.state.cards} />
      </div>
    )
  }
}

export default Home;