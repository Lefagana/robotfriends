import React,{ useState,useEffect} from 'react';
import CardList from '../components/CardList';
// import { friends } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import  './App.css';


function App () {
    // constructor(){
    //     super()
    //     this.state = {
    //         friends: [],
    //         searchfield: ''
    //     }
    // }

    const [friends,setFriends] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0)

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json())
    //     .then(users =>{this.setState({friends: users})})
    //     // this.setState({friends:friends})
    // }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users =>{setFriends(users)})
        
    },[count]);//this empty array only run when the something changes
    const onSearchChange = (event) => {
        setSearchfield(event.target.value);      
    }
    
    const filterfriend = friends.filter(friend => {
    return friend.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !friends.length ?
        <h1>Loading</h1>
    :
        (
        <div className='tc'>
            <h1 className='f2'>RoboFriends</h1>
            <button onClick={()=> setCount(count+1)}>Click Me</button>
            <SearchBox searchChange = {onSearchChange} />
            <Scroll>
                <CardList friends = {filterfriend}/>
            </Scroll>
        </div>
    )
    

}

export default App;