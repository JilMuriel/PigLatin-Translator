import React from "react";
import "./translator.styles.scss";
import PigLatin from "piglatin";
import Button from "../../components/buttons/button.component";
class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: "",
      phraseTranslated: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    let userInput = this.state.phrase;
    this.setState({
      phrase: userInput,
      phraseTranslated: PigLatin(userInput)
    });
    const plData = JSON.parse(localStorage.getItem("Data")) || [];
    plData.push(this.state.phrase);
    localStorage.setItem("Data", JSON.stringify(plData));
    this.setState({ phrase: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <>
        <div className="p-container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="text-orange mb-2">PIGLATIN TRANSLATOR</h2>
            <div className="card">
              <textarea
                type="text"
                name="phrase"
                value={this.state.phrase}
                onChange={this.handleChange}
                placeholder="Type here.."
              />
            </div>
            <div className="card">
              <h3>RESULTS:</h3>
              <h2>{this.state.phraseTranslated}</h2>
            </div>
            <Button onClick={this.handleSubmit}>TRANSLATE</Button>
          </form>
        </div>
      </>
    );
  }
}

export default Translator;
