import './CardList.css';
import React from 'react';
import {ICardData, ICardsDataState} from '../../interfaces/interfaces';
import Card from '../Card/Card';
import {connect} from 'react-redux';

interface IMyState {
  placesServerData: ICardsDataState;
}

interface IMyProps {
  places: Array<ICardData>;
}

const CardList: React.FC<IMyProps> = ({places} ) => {

  return (
    <div className='places-list root__section'>
      {places.map((card: ICardData) => (
        <Card data={card} key={card.id}/>
      ))}
    </div>
  );
};

const mapStateToProps = (state: IMyState) => {
  return {
    places: state.placesServerData.places,
  };
};

export default connect(mapStateToProps)(CardList);
