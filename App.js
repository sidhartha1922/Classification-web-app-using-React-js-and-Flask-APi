import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      formData: {
        select1: 1,
        select2: 1,
        select3: 1,
        select4: 1,
        select5: 1,
        select6: 1,
        select11: 1,
        select21: 1,
        select31: 1,
        select41: 1,
        select51: 1,
        select61: 1,
        select12: 1,
        select22: 1,
        select32: 1,
        select42: 1,
        select52: 1,
        select62: 1,
        select13: 1,
        select23: 1,
        select33: 1,
        select43: 1,
        select53: 1,
        select63: 1,
        select14: 1,
        select24: 1,
        select34: 1,
        select44: 1,
        select54: 1,
        select64: 1,
      },
      result: ""
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    var formData = this.state.formData;
    formData[name] = value;
    this.setState({
      formData
    });
  }

  handlePredictClick = (event) => {
    const formData = this.state.formData;
    this.setState({ isLoading: true });
    fetch('http://127.0.0.1:5000/prediction/', 
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          result: response.result,
          isLoading: false
        });
      });
  }

  handleCancelClick = (event) => {
    this.setState({ result: "" });
  }

  handleUpdateClick=(event) => {
    const min =1;
    const max =5;
    const my_names=["select1","select2","select3","select4","select5","select6",
    "select11","select21","select31","select41","select51","select61","select12","select22","select32","select42","select52","select62","select13","select23","select33","select43","select53","select63","select14","select24","select34","select44","select54","select64"]
    var formData = this.state.formData;
    let arr=[],i=0,j=0;
    for (i = 0; i <30; i++) {
    var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
    arr.push(randomnumber);
        }

    for(j=0;j<30;j++){
      formData[my_names[j]]=arr[j]
                  }
    
    this.setState({
    formData
    });
  }

  render() {
    const isLoading = this.state.isLoading;
    const formData = this.state.formData;
    const result = this.state.result;

    return (
      <Container>
        <div>
          <h1 className="title">Wellness Classifier</h1>
        </div>
        <div className="content">
          <Form>
           <Form.Label><b>Day 1</b></Form.Label>
            <Form.Row>
            
              <Form.Group as={Col}>
                <Form.Label>Energy</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.select1}
                  name="select1"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Mind State</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.select2}
                  name="select2"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Muscle Condition</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.select3}
                  name="select3"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                 </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Nutritional Quality</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.select4}
                  name="select4"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Sleep Amount</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.select5}
                  name="select5"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Sleep Quality</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.select6}
                  name="select6"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
            </Form.Row>
               
            <Form.Label><b>Day 2</b></Form.Label>
            <Form.Row>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select11}
                  name="select11"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select21}
                  name="select21"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select31}
                  name="select31"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                 </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select41}
                  name="select41"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select51}
                  name="select51"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select61}
                  name="select61"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
            </Form.Row>
          
            <Form.Label><b>Day 3</b></Form.Label>
            <Form.Row>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select12}
                  name="select12"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select22}
                  name="select22"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select32}
                  name="select32"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                 </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select42}
                  name="select42"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select52}
                  name="select52"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select62}
                  name="select62"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
            </Form.Row>
          
            <Form.Label><b>Day 4</b></Form.Label>
            <Form.Row>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select13}
                  name="select13"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select23}
                  name="select23"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select33}
                  name="select33"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                 </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select43}
                  name="select43"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select53}
                  name="select53"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select63}
                  name="select63"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
            </Form.Row>
            
            <Form.Label><b>Day 5</b></Form.Label>
            <Form.Row>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select14}
                  name="select14"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select24}
                  name="select24"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select34}
                  name="select34"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                 </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select44}
                  name="select44"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select54}
                  name="select54"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                
                <Form.Control 
                  as="select"
                  value={formData.select64}
                  name="select64"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Row>
              <Col>
                <Button
                  block
                  variant="success"
                  disabled={isLoading}
                  onClick={!isLoading ? this.handlePredictClick : null}>
                  { isLoading ? 'Making prediction' : 'Predict' }
                </Button>
              </Col>
              <Col>
                <Button
                  block
                  variant="danger"
                  disabled={isLoading}
                  onClick={this.handleCancelClick}>
                  Reset prediction
                </Button>
              </Col>
              <Col>
                <Button
                  block
                  variant="warning"
                  disabled={isLoading}
                  onClick={this.handleUpdateClick}>
                  Randomise inputs
                </Button>
              </Col>
            </Row>
          </Form>
          {result === "" ? null :
            (<Row>
              <Col className="result-container">
                <h4 id="result">{result}</h4>
              </Col>
            </Row>)
          }
        </div>
      </Container>
    );
  }
}

export default App;