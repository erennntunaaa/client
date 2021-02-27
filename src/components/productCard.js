import React from "react";
import PropTypes from "prop-types";

const ProductCard = {
  id: PropTypes.number,
  orignalTitle: PropTypes.string,
  genresData: PropTypes.oneOfType([PropTypes.array], [PropTypes.string]),
  releaseYear: PropTypes.string,
  posterPath: PropTypes.string,
  overview: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
