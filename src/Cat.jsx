import React from 'react';
import PropTypes from 'prop-types';
import cat from './cat.png';

const Cat = ({ mouse }) => <img src={cat} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />;

Cat.propTypes = {
  mouse: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }).isRequired
};

export default Cat;
