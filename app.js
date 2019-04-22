    let list = ["Banana", "Swordfish", "Avocado", "Kimchee", "Corn"];
    class GroceryList extends React.Component{
      constructor(props){
          super(props)
          this.state = {
            actualList: list, 
            done: false
          }
          this.onListItemClick = this.onListItemClick.bind(this);
    }

      onListItemClick(){
          let newList = this.state.actualList.slice();
          newList.shift();
          this.setState({
            actualList: newList
          });
        }

      render(){
        return(<ul>
            <li onClick={this.onListItemClick}>{this.state.actualList[0]}</li>
            <li>{this.state.actualList[1]}</li>
            <li>{this.state.actualList[2]}</li>
        </ul>
        )
      }
    }
ReactDOM.render(<GroceryList />, document.getElementById('app'));