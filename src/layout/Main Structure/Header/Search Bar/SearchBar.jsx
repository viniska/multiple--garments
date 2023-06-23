import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchBar = ({ handleSearch }) => {
    
  return (
    <Search
      placeholder="Enter your search query"
      allowClear
      enterButton="Search"
      onSearch={handleSearch}
      style={{
        width: 400,
      }}
    />
  );
};

export default SearchBar;
