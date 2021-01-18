import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IFormState } from '../../interfaces/interfaces';
import { changeNameInputAC, changeLinkInputAC } from '../../store/actionCreators/actionCreators';

type TFormState = {
  popupData: IFormState
}

const CardForm: React.FC = (props: any) => {

  const { placeName, placePhotoLink, changePlaceName, changePlacePhotoLink } = props;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.target.id === 'name' && changePlaceName(event.target.value)
    event.target.id === 'link' && changePlacePhotoLink(event.target.value)
  }

  return (
    <>
      <h3 className='popup__title'>Новая карточка</h3>
      <form id='addImageForm' className='popup__form' name='new' noValidate>
        <div className='popup__input-container'>
          <input
            onChange={handleInputChange}
            value={placeName}
            type='text'
            id='name'
            className='popup__input'
            placeholder='Название'
          />
          <span id='error-name' className='alert-message'></span>
        </div>
        <div className='popup__input-container'>
          <input
            onChange={handleInputChange}
            value={placePhotoLink}
            type='url'
            id='link'
            className='popup__input'
            placeholder='Ссылка на картинку'
          />
          <span id='error-link' className='alert-message'></span>
        </div>
        <button
          // onClick={handleButtonClick}
          id='submit-addImageForm'
          type='submit'
          name='popupButton'
          className='button popup__button'>
          +
        </button>
      </form>
    </>
  );
};

const mapStateToProps = (state: TFormState) => {
  return {
    placeName: state.popupData.placeName,
    placePhotoLink: state.popupData.placePhotoLink,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    changePlaceName: bindActionCreators(changeNameInputAC, dispatch),
    changePlacePhotoLink: bindActionCreators(changeLinkInputAC, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);