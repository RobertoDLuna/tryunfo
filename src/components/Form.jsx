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
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="cardName">
            Nome da carta:
            <input
              type="text"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
            />
          </label>
          <label htmlFor="cardDescription">
            Descrição:
            <input
              type="textarea"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>
          <label htmlFor="cardAttr1">
            Atributo 1:
            <input
              type="number"
              name="cardAttr1"
              value={ cardAttr1 }
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="cardAttr2">
            Atributo 2:
            <input
              type="number"
              name="cardAttr2"
              value={ cardAttr2 }
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="cardAttr3">
            Atributo 3:
            <input
              type="number"
              name="cardAttr3"
              value={ cardAttr3 }
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="cardImage">
            Imagem:
            <input
              type="text"
              name="cardImage"
              value={ cardImage }
              data-testid="image-input"
            />
          </label>
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
          Super Trunfo:
          <label htmlFor="cardTrunfo">
            <input
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              type="checkbox"
              id="cbox"
              data-testid="trunfo-input"
            />
          </label>

          { hasTrunfo ? <h4>Você já tem um Super Trunfo em seu baralho</h4> : ('')}
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
      </div>
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
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Form;
