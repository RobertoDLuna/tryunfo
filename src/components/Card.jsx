import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div>
        <p data-testid="name-card">{ cardName }</p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{ cardDescription }</p>
        <div>
          <p data-testid="attr1-card">
            Ataque:
            { cardAttr1 }
          </p>
          <p data-testid="attr2-card">
            Defesa:
            { cardAttr2 }
          </p>
          <p data-testid="attr3-card">
            Magia:
            { cardAttr3 }
          </p>
        </div>
        <div>
          <h5 data-testid="rare-card">{ cardRare }</h5>
          { cardTrunfo === true
            ? <h5 data-testid="trunfo-card">Super Trunfo</h5> : undefined }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
