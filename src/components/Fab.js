import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: '56px',
  width: '56px',
  position: 'fixed',
  bottom: '32px',
  right: '56px',
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#d91e18'
};

const Fab = () => (
    <Paper style={style} zDepth={3} circle={true} />
);

export default Fab;