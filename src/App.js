import React, { Component } from 'react';
import './App.css';

import DiveList from './components/diveList';
//import AddButton from './components/addButton';
import Button from 'react-toolbox/lib/button/Button';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import DiveForm from './components/diveForm';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {active: false};
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ active: !this.state.active });
  }

  actions = [
    { label: "Add", onClick: this.handleToggle }
  ];


  render() {
    return (
      <div className="App">
        <h1>Divebook Application</h1>
        <Button icon="add" label="New Dive" raised primary onClick = {this.handleToggle} />
        <Dialog
          actions = {this.actions}
          active = {this.state.active}
          onEscKeyDown = {this.handleToggle}
          onOverlayClick = {this.handleToggle}
          type = "normal"
          title = 'Enter details of your dive!'
        >
          <DiveForm />
        </Dialog>
        <DiveList />
      </div>
    );
  }
}

export default App;
