import React from "react";
import PropTypes from "prop-types";

function NpmLink(props) {
  const { pkg } = props;
  return (
    <a
      href={`https://www.npmjs.com/package/${pkg}`}
      title="pkg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="no-medium-zoom"
        src={`https://img.shields.io/npm/v/${pkg}.svg?style=flat-square`}
        alt="npm"
      />
    </a>
  );
}

NpmLink.propTypes = {
  pkg: PropTypes.string,
};
export default NpmLink;
