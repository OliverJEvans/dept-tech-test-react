import React from 'react';
import { connect } from 'react-redux';
import Search from '../../components/Search/Search';

const SearchConnected = () => (
  <Search />
);

export default connect()(SearchConnected);