import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
    state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      // savedCard: [],
    };

  onInputChange= () => {}

  onSaveButtonClick= () => {}

  validateFunction = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const attributesMaxLimit = 210;
    const minValueAttribute = 0;
    const maxValueAttribute = 90;
    if (
      cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0
      && cardAttr1 >= minValueAttribute
      && cardAttr1 <= maxValueAttribute
      && cardAttr2 >= minValueAttribute
      && cardAttr2 <= maxValueAttribute
      && cardAttr3 >= minValueAttribute
      && cardAttr3 <= maxValueAttribute
      && cardAttr1 + cardAttr2 + cardAttr3 <= attributesMaxLimit
    ) {
      return this.setState({ isSaveButtonDisabled: false });
    } return this.setState({ isSaveButtonDisabled: true });
  }

  validateTrunfo = () => {}

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
      // savedCard,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
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
      </div>
    );
  }
}

export default App;
