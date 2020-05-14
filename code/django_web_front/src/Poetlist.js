import React from 'react';

class Poetlist extends React.Component {
  renderRow() {
    const listItems = this.props.poets.map((u) =>
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


export default Poetlist;
