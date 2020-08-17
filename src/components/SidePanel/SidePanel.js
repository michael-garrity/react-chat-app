import React from 'react';
import { Menu, Responsive, Icon, Button } from 'semantic-ui-react';
import { Animated } from 'react-animated-css';

import UserPanel from './UserPanel';
import Channels from './Channels';
import DirectMessages from './DirectMessages';
import Starred from './Starred';
import ColorPanel from '../ColorPanel/ColorPanel';

class SidePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.handleUpdate();
  }

  handleUpdate() {
    console.log('updated');
    if (window.innerWidth < 900 && this.state.active === false) {
      this.toggleClass();
      console.log('switch');
    }
  }

  toggleClass() {
    console.log('clicked');
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  render() {
    const { currentUser, primaryColor } = this.props;

    return (
      <Responsive onUpdate={this.handleUpdate}>
        <Menu
          size='large'
          inverted
          fixed='left'
          vertical
          className={this.state.active ? 'hide-sidebar' : 'show-sidebar'}
          style={{
            background: primaryColor,
            fontSize: '1.2rem',
          }}
        >
          <div
            className={'mobile-bars'}
            style={{
              marginBottom: '20px',
              float: 'right',
              marginRight: '-50px',
              backgroundColor: '#302F2F',
              height: '50px',
              width: '50px',
              top: '0',
              textAlign: 'center',
              verticalAlign: 'center',
            }}
          >
            <Icon
              name='bars'
              size={'large'}
              onClick={this.toggleClass}
              style={{
                marginTop: '15px',
              }}
            />
          </div>
          <UserPanel
            onClick={this.toggleClass}
            primaryColor={primaryColor}
            currentUser={currentUser}
          />
          <Starred currentUser={currentUser} />
          <Channels currentUser={currentUser} />
          <DirectMessages currentUser={currentUser} />
        </Menu>
      </Responsive>
    );
  }
}

export default SidePanel;
