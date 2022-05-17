import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Nome da carta:
          <input
            type="text"
            id="name"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="textarea"
            id="description"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attribute1">
          Atributo 1:
          <input
            type="number"
            id="attribute1"
            name="cardAttr1"
            value={ cardAttr1 }
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attribute2">
          Atributo 2:
          <input
            type="number"
            id="attribute2"
            name="cardAttr2"
            value={ cardAttr2 }
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attribute3">
          Atributo 3:
          <input
            type="number"
            id="attribute3"
            name="cardAttr3"
            value={ cardAttr3 }
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image">
          Imagem:
          <input
            type="text"
            id="image"
            name="cardImage"
            value={ cardImage }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade:
          <select
            name="cardRare"
            value={ cardRare }
            data-testid="rare-input"
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        { hasTrunfo ? <h4>Você já tem um Super Trunfo em seu baralho</h4> : (<input
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          type="checkbox"
          id="cbox"
          data-testid="trunfo-input"
        />
        )}
        ;
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Form;
