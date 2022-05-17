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
      savedCard: [],
    };

  onInputChange= ({ target }) => {
    const { name, value, checked, type } = target;
    const valueIpunt = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valueIpunt,
    }, this.validateFunction);
  }

  onSaveButtonClick= () => {
    const { cardName, cardDescription, cardImage, cardAttr1,
      cardAttr2, cardAttr3, cardRare, cardTrunfo } = this.state;
    const newCard = {
      newCardName: cardName,
      newCardDescription: cardDescription,
      newCardImage: cardImage,
      newCardAttr1: cardAttr1,
      newCardAttr2: cardAttr2,
      newCardAttr3: cardAttr3,
      newCardRare: cardRare,
      newCardTrunfo: cardTrunfo,
    };
    this.setState((prevState) => ({
      savedCard: [...prevState.savedCard, newCard],
    }));

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      isSaveButtonDisabled: true,
    });
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    } else {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  // validateAttr = (attr) => {
  //   const minValueAttribute = 0;
  //   const maxValueAttribute = 90;
  //   if (attr <= minValueAttribute || attr > maxValueAttribute) return false;
  //   return true;
  // }

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
    const minValue = 0;
    const maxValue = 90;
    const totalMax = 210;
    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);

    if (
      cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0
      && attr1 >= minValue
      && attr1 <= maxValue
      && attr2 >= minValue
      && attr2 <= maxValue
      && attr3 >= minValue
      && attr3 <= maxValue
      && attr1 + attr2 + attr3 <= totalMax
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
      savedCard,
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
          {savedCard.map((card) => (<Card
            key={ card.newCardName }
            cardName={ card.newCardName }
            cardDescription={ card.newCardDescription }
            cardAttr1={ card.newCardAttr1 }
            cardAttr2={ card.newCardAttr2 }
            cardAttr3={ card.newCardAttr3 }
            cardImage={ card.newCardImage }
            cardRare={ card.newCardRare }
            cardTrunfo={ card.newCardTrunfo }
          />))}
        </div>
      </div>
    );
  }
}

export default App;
