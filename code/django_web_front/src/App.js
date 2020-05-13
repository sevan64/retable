import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import './App.css';
import axios from 'axios';

class Form extends React.Component {
  render() {
    return (
      <form id="post-data" onSubmit={this.props.handleSubmit}>
        <div className="field">
          <div className="control">
          <label for="name">Name
          </label>
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={this.props.name}
              onChange={this.props.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
          <label for="books_title">Book title
          </label>
            <input
              className="input"
              type="text"
              name="books_titele"
              id="books_titele"
              placeholder="Book title"
              value={this.props.books_titele}
              onChange={this.props.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
          <label for="author">Author
          </label>
            <input
              className="input"
              type="text"
              name="author"
              id="author"
              placeholder="Author"
              value={this.props.author}
              onChange={this.props.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
          <label for="bio">Bio
          </label>
            <textarea
              className="textarea"
              name="bio"
              id="body"
              placeholder="Bio"
              value={this.props.bio}
              onChange={this.props.handleChange}>
            </textarea>
          </div>
        </div>
        <div className="field">
          <div className="control">
          <label for="purchased_date">Purchased
          </label>
            <input
              className="input"
              type="date"
              name="purchased_date"
              id="purchased_date"
              value={this.props.purchased_date}
              onChange={this.props.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
          <label for="finished_date">Finished
          </label>
            <input
              className="input"
              type="date"
              name="finished_date"
              id="finished_date"
              placeholder="Finished"
              value={this.props.finished_date}
              onChange={this.props.handleChange}
            />
          </div>
        </div>
        <input
          className="button is-fullwidth is-primary is-outlined"
          type="submit"
          value="SEND POST"
        />
      </form>
    );
  }
}

class UserList extends React.Component {
  renderRow() {
    const listItems = this.props.users.map((u) =>
      <tr key={u.id}>
        <td>{u.id}</td>
        <td>{u.name}</td>
        <td>{u.books_title}</td>
        <td>{u.author}</td>
        <td>{u.bio}</td>
        <td>{u.purchased_date}</td>
        <td>{u.finished_date}</td>
        <td>{u.created_at}</td>
      </tr>
    );
    return(
      listItems
    );
  }
  render() {
    return (
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Books_title</th>
            <th>Author</th>
            <th>Bio</th>
            <th>Purchased</th>
            <th>Finished</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRow()}
        </tbody>
      </table>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      usersLength: 0,
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
      this.state.users.unshift(response.data);
      this.setState({
        users: this.state.users,
        usersLength: this.state.users.length,
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
        users: response.data.reverse(),
        usersLength: response.data.length,
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
          <p>There are {this.state.usersLength} users.</p>
          <UserList
            users={this.state.users}
          />
        </div>
      </div>
      </div>
    );
  }
}

export default App;
