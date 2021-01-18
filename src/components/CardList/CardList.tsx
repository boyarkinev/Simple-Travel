import './CardList.css';
import React, { useEffect } from 'react';
import { IPlace, IPlacesState } from '../../interfaces/interfaces';
import Card from '../Card/Card';
import { bindActionCreators } from 'redux';
import { placesFetchDataAC, placesLoadDataAC } from '../../store/actionCreators/actionCreators';
import { connect } from 'react-redux';
import store from '../../store/store';

interface IMyState {
  placesData: IPlacesState;
}

interface IMyProps {
  places: Array<IPlace>;
  placesAction: object;
}

const dispatch = (action: any) => store.dispatch(action)

const CardList: React.FC<any> = (props: IMyProps) => {

  useEffect(() => { dispatch(placesLoadDataAC()) },[])

  const { places } = props;

  return (
    <div className='places-list root__section'>
      {places.map((card: IPlace) => (
        <Card data={card} key={card.placeName} />
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
    placesAction: bindActionCreators(placesFetchDataAC, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
