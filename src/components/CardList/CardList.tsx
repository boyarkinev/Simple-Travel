import './CardList.css';
import React from 'react';
import { ICardData, ICardsDataState } from '../../interfaces/interfaces';
import Card from '../Card/Card';
import { bindActionCreators } from 'redux';
import { fetchDataAC } from '../../store/actionCreators/actionCreators';
import { connect } from 'react-redux';

interface IMyState {
  placesData: ICardsDataState;
}

interface IMyProps {
  places: Array<ICardData>;
  placesAction: object;
}

const CardList: React.FC<IMyProps> = (props: IMyProps) => {

  const { places } = props;

  return (
    <div className='places-list root__section'>
      {places.map((card: ICardData) => (
        <Card data={card} key={card.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: IMyState) => {
  return {
    places: state.placesData.places,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    placesAction: bindActionCreators(fetchDataAC, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
