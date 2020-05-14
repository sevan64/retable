import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Form from './Form';
import Poetlist from './Poetlist';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poets: [],
      poetsLength: 0,
      name: "",
      books_title: "",
      author: "",
      bio: "",
      purchased_date: "",
      finished_date: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'name') {
      this.setState({name: event.target.value});
    }
    else if (event.target.name === 'books_title') {
      this.setState({email: event.target.value});
    }
    else if (event.target.name === 'author') {
      this.setState({author: event.target.value});
    }
    else if (event.target.name === 'bio') {
      this.setState({bio: event.target.value});
    }
    else if (event.target.name === 'purchased_date') {
      this.setState({purchased_date: event.target.value});
    }
    else if (event.target.name === 'finished_date') {
      this.setState({finished_date: event.target.value});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, books_title, author, bio, purchased_date, finished_date } = this.state;
    const conf = {
      'name': name,
      'books_title': books_title,
      'author': author,
      'bio': bio,
      'purchased_date': purchased_date,
      'finiched_date':finished_date
    };
    axios.post("http://localhost:8000/poet/?format=json", conf)
    .then(response => {
      this.state.poets.unshift(response.data);
      this.setState({
        poets: this.state.poets,
        poetsLength: this.state.poets.length,
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentDidMount() {
    axios.get('http://localhost:8000/poet/?format=json')
    .then(response => {
      this.setState({
        poets: response.data.reverse(),
        poetsLength: response.data.length,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="column is-12">
        <div className="App">
          <BrowserRouter>
            <Switch>
              <div>
                <Navbar /><hr/>
                <Route exact path='/' component={Home}/>
                <Route path='/About' component={About}/>
              </div>
            </Switch>
          </BrowserRouter>
        </div>
      <div className="columns is-multiline">
        <div className="column is-6">
          <div className="notification">
            リータブ流
          </div>
        </div>
        <div className="column is-6">
          <Form
            name={this.state.name}
            books_title={this.state.books_title}
            author={this.state.author}
            bio={this.state.bio}
            purchased_date={this.state.purchased_date}
            finished_date={this.state.finished_date}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div className="column is-12" id="user-table">
          <p>There are {this.state.poetsLength} poets.</p>
          <Poetlist
            poets={this.state.poets}
          />
        </div>
      </div>
      </div>
    );
  }
}

export default App;
