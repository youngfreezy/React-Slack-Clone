import React, { Component } from 'react';
class User extends Component {
  onClick(e) {
    e.preventDefault();
    const { setUser, user } = this.props;
    setUser(user);
  }
  render() {
    const { user, activeUser} = this.props;
    const active = user === activeUser ? 'active' : '';
    return (
				  <li className={active}>
								<a onClick={this.onClick.bind(this)}>
									{user.name}
								</a>
					</li>
					)
  }
}

//lets you know which props this component accepts and whether required or not.

User.propTypes = {
  user: React.PropTypes.object.isRequired,
  setUser: React.PropTypes.func.isRequired,
  activeUser: React.PropTypes.object.isRequired
}

export default User