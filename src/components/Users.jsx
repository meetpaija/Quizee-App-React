import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUsers } from "../actions/userActions";

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const userList =
      this.props.users.length === 0 ? (
        ""
      ) : (
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>EmailID</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.type}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      );

    return <div>{userList}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchUsers: fetchUsers,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
