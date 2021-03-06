import React, { Component } from 'react';

// first we will make a new context
const MyContext = React.createContext();

// Then create a provider Component
class MyProvider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Wes',
      age: 100,
      cool: true
    };

    this.compara = this.compara.bind(this)
  }

  componentDidMount() {
    this.setState({
      name: 'Wes',
      age: 100,
      cool: true
    })

  }

  componentWillUnmount() {
    this.setState({
      name: '',
      age: 0,
      cool: false,
      controler: false
    });
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 10
        }),
        changeName: (name) => {
          if (this.compara(name)) {
            this.setState({
              name: this.state.name = 'vini lindo'
            })
          } else {
            this.setState({
              name: this.state.name = 'vini lindo'
            }  
            }
        },

        teste: (e, o) => console.log(e + o)

      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }

  compara = (value) => {
    if (value === 'vini') return true;
    else if (value !== 'vini') return false;
  }



}

const Family = (props) => (
  <div className="family">
    {console.log(props)}
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
              <button onClick={context.growAYearOlder}><span>🍰🍥🎂</span></button><br></br>
              <button onClick={() => context.changeName('vini')}>Mude de nome</button>
              <a onMouseOver={context.teste('oiiii', ' viniiiii')}> teste de funcao</a>
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
