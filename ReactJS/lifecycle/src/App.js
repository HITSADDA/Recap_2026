import{ Component } from 'react'
import Counter from './components/Counter';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
 

  render() {
    return (  
      <Counter />
    )
  }
}
