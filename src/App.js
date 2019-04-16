import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';

import {
  createInstantSearch,
  connectRefinementList,
  connectSearchBox,
  connectHits,
} from 'react-instantsearch-core';

import RefinementList from './components/RefinementList';
import SearchBox from './components/SearchBox';
import Hits from './components/Hits';

const InstantSearch = createInstantSearch(algoliasearch, {
  Root: 'div',
});

const CustomRefinementList = connectRefinementList(RefinementList);
const CustomSearchBox = connectSearchBox(SearchBox);
const CustomHits = connectHits(Hits);

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
);

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="header-title">
            <a href="/">react-instantsearch-app</a>
          </h1>
          <p className="header-subtitle">
            using{' '}
            <a href="https://github.com/algolia/react-instantsearch">
              React InstantSearch
            </a>
          </p>
        </header>

        <div className="container">
          <InstantSearch searchClient={searchClient} indexName="instant_search">
            <div className="search-panel">
              <div className="search-panel__filters">
                <CustomRefinementList attribute="brand" />
              </div>

              <div className="search-panel__results">
                <CustomSearchBox />
                <CustomHits hitComponent={Hit} />
              </div>
            </div>
          </InstantSearch>
        </div>
      </div>
    );
  }
}

function Hit(props) {
  return (
    <article>
      <h1>{props.hit.name}</h1>
      <p>{props.hit.description}</p>
    </article>
  );
}

export default App;
