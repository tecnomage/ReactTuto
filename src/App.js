import React, { Component } from 'react';

// first we will make a new context
const MyContext = React.createContext();

// Then create a provider Component
class MyProvider extends Component {
  
  constructor(props) {
    super(props);
    this.state = {name: 'Wes',
                  age: 100,
                  cool: true};
  }  


  componentDidMount(){
    this.setState({
      name: 'Wes',
      age: 100,
      cool: true
    })
    
  }

  componentWillUnmount() {
    this.setState({name: '',
                  age: 0,
                  cool: false
    });
  }


  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 10
        }),
        changeName: () => this.setState({
          name: this.state.name = 'Seu nome Mudou'
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = (props) => (
  <div className="family">
    <Person />
  </div>
)

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Age: {context.state.age}</p>
              <p>Name: {context.state.name}</p>
              <button onClick={context.growAYearOlder}>🍰🍥🎂</button><br></br>
              <button onClick={context.changeName}>Mude de nome</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>I am the app</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}


export default App;
