import React from 'react';

const RefinementList = ({ items, refine }) => (
  <div className="ais-RefinementList">
    <ul className="ais-RefinementList-list">
      {items.map(item => (
        <li key={item.key || item.label} className="ais-RefinementList-item">
          <label className="ais-RefinementList-label">
            <input
              className="ais-RefinementList-checkbox"
              type="checkbox"
              checked={item.isRefined}
              onChange={() => refine(item.value)}
            />
            <span className="ais-RefinementList-labelText">{item.label}</span>{' '}
            <span className="ais-RefinementList-count">
              {item.count.toLocaleString()}
            </span>
          </label>
        </li>
      ))}
    </ul>
  </div>
);

export default RefinementList;
