import React from 'react';

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

export default Form;
