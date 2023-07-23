'use client';
import React, { useState, FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const [searchResult, setSearchResult] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(searchResult);
  };

  console.log();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Cari Surah"
        className="py-2 px-4 rounded-xl border-0 mr-1"
        onChange={(e) => {
          setSearchResult(e.target.value);
        }}
      />
      <button type="button">
        <FiSearch />
      </button>
    </form>
  );
};

export default SearchBar;
