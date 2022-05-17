import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {

    state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCard: [],
    };
  }

  onInputChange() {}

  onSaveButtonClick() {}

  validateFunction() {
    const attributesMaxLimit = 210;
    const maxAttribute = 90;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    if (cardName !== ''
      && cardDescription !== ''
      && cardAttr1 !== ''
      && cardAttr2 !== ''
      && cardAttr3 !== ''
      && cardImage !== ''
      && cardRare !== ''
      && (Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxAttribute)
      && (Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxAttribute)
      && (Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxAttribute)
      && (Number(cardAttr1)
      + Number(cardAttr2)) + Number(cardAttr3) <= attributesMaxLimit) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  validateTrunfo() {}

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
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <section>
        <div>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
        </div>
        <div>
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
      </section>
    );
  }

export default App;
