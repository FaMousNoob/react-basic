import React, { Component } from 'react';

class DemoListAndKeys extends Component {
  state = {
    listFriends: [
      {
        id: '1',
        name: 'jonah jameson',
        age: 40,
      },
      {
        id: '2',
        name: 'perter parker',
        age: 20,
      },
      {
        id: '3',
        name: 'rick sanchez',
        age: 45,
      },
    ],
  };


  //list and keys
  renderListFriends = () => {
    return this.state.listFriends.map((friend, index) => (
      <tr key={index}>
        <td>{friend.id}</td>
        <td>{friend.name}</td>
        <td>{friend.age}</td>
      </tr>
    ));
  };

  render() {
    return (
      <div>
        <h1>Demo List and Keys</h1>
        <table className='table'>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>{this.renderListFriends()}</tbody>
        </table>
      </div>
    );
  }
}

export default DemoListAndKeys;

