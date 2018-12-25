import React from 'react';
import Card from './Card/Card';
import styles from './Cards.module.css';

const cards = (props) => {
  return (
    <div className={styles.Cards}>
      {props.cards.map((card, index) => {
        return <Card
          key={card.id}
          title={card.title}
          subtitle={card.subtitle}
          img={card.img} />
      })}
    </div>
  )
}

export default cards;