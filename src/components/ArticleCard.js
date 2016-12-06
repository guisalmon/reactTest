import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    card: {
        width: '840px',
        marginLeft: '352px',
        marginBottom: '56px'
    },
    media: {
      height: '168px',
      overflow: 'hidden',
      textAlign: 'center'
    },
    text: {
      height: '56px',
      overflow: 'hidden',
      textAlign: 'left'
    },
    action: {
      height: '56px',
      overflow: 'hidden',
      textAlign: 'left'
    },
    header: {
      overflow: 'hidden',
      textAlign: 'left'
    }
}

class ArticleCard extends Component {

  render() {
    var actionDisplay = {
        height: '56px',
        overflow: 'hidden',
        backgroundColor: '#d91e18',
        textAlign: 'left'};

    return (
      <Card 
        style={styles.card}>
        <CardMedia style={styles.media}>
          <img src="https://rob.kriissss.fr/GER/photos/3%20-%2026.png" />
        </CardMedia>
        <CardHeader 
          title="Card title" 
          subtitle="6/12/2016"
          style={styles.header}
          actAsExpander={true}
          showExpandableButton={true}/>
        <CardText 
          style={styles.text}
          expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions id='actions'
          style={styles.action}>
          <FlatButton label="Commenter" />
          <FlatButton label="Lire l'article" />
        </CardActions>
      </Card>
    );
  }
}

export default ArticleCard;