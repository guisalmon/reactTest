import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';

const styles = {
    drawer: {
        paddingTop: '56px',
        textAlign: "left",
    },
    drawerHeader: {
      width: '100%', 
      height: '56px', 
      backgroundColor: '#222222',
    },
    drawerHeaderH1: {
      textColor: '#d91e18'
    },
    appBar: {
      height: '56px',
      backgroundColor: '#36454f',
    },
    item: {
        paddingLeft: '56px'
    }
};

export default class DrawerMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <AppBar 
          style={styles.appBar}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}/>
        <Drawer 
          style={styles.drawer}
          open={this.state.open}>
          <div style={styles.drawerHeader} ><h1 style={styles.drawerHeaderH1} fontFamily='BebasNeueBold'>GLD Articles</h1></div>
          <MenuItem style={styles.item}>#HashTag</MenuItem>
          <Divider />
          <MenuItem style={styles.item}>#TaMère</MenuItem>
          <Divider />
          <MenuItem style={styles.item}>#TonFrère</MenuItem>
          <Divider />
          <MenuItem style={styles.item}>#TaSoeur</MenuItem>
          <Divider />
          <MenuItem style={styles.item}>#TonChat</MenuItem>
          <Divider />
          <MenuItem style={styles.item}>#TesMorpions</MenuItem>
          <Divider />
          <MenuItem style={styles.item}>#TaGueule</MenuItem>
          <Divider />
          <MenuItem style={styles.item}>#OkJarrete</MenuItem>
          <Divider />
          <MenuItem style={styles.item}>#Taboulé</MenuItem>
          <Divider />
          <MenuItem style={styles.item}>#Tardis</MenuItem>
          <Divider />
          <MenuItem style={styles.item}>#Tartempion</MenuItem>
          <Divider />
          <MenuItem style={styles.item}>#Tarabiscoté</MenuItem>
          <Divider />
          <MenuItem style={styles.item}>#TantVaLaCrucheALEauQuALaFinElleSeCasse</MenuItem>
        </Drawer>
      </div>
    );
  }
}