import React from 'react';
import { connect } from 'react-redux';
import { getUsersRequest, createUserRequest, deleteUserRequest } from '../actions/users';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';




class App extends React.Component {
 constructor(props) {
   super(props);
   this.props.getUsersRequest();
 }
  
    handleSubmit = ({firstName, lastName}) => {
      this.props.createUserRequest({firstName, lastName})
    }

handleDeleteUserClick = id => {
  this.props.deleteUserRequest(id);
}

render() {
  const users = this.props.users;
  console.log(users)
    return (
      
    <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}} className="App">
      <NewUserForm onSubmit={this.handleSubmit}/>
      <UsersList onDeleteUser={this.handleDeleteUserClick} users={users} />
    </div>
    )
}
  };

  function mapStateToProps (state) {
    return {
      users: state.users.items

    }
  }

export default connect(mapStateToProps, { deleteUserRequest, getUsersRequest, createUserRequest })(App);
