import React,{Component} from 'react';
import CardList from '../components/CardList';
// import { friends } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import  './App.css';
class App extends Component {
    constructor(){
        super()
        this.state = {
            friends: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users =>{this.setState({friends: users})})
        // this.setState({friends:friends})
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})      
    }

    render() {
        const {friends, searchfield} = this.state;
        const filterfriend = friends.filter(friend => {
        return friend.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return !friends.length ?
            <h1>Loading</h1>
        :
            (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <Scroll>
                    <CardList friends = {filterfriend}/>
                </Scroll>
            </div>
        )
        
    }
}

export default App;