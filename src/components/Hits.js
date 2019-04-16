import React from 'react';

const Hits = ({ hits, hitComponent: HitComponent }) => (
  <div className="ais-Hits">
    <ul className="ais-Hits-list">
      {hits.map(hit => (
        <li className="ais-Hits-item" key={hit.objectID}>
          <HitComponent hit={hit} />
        </li>
      ))}
    </ul>
  </div>
);

export default Hits;
