import React from 'react';

const SearchBox = ({ currentRefinement, refine }) => (
  <div className="ais-SearchBox">
    <form
      noValidate
      onSubmit={() => event.preventDefault()}
      className="ais-SearchBox-form"
      action=""
      role="search"
    >
      <input
        type="search"
        placeholder="Search for Apple, iPhone, ..."
        required
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
        className="ais-SearchBox-input"
      />
    </form>
  </div>
);

export default SearchBox;
