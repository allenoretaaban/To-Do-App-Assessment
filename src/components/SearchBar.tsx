import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from '../helpers/styles';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (text) => {
    setQuery(text);
    onSearch(text);
  };

  return (
    <View style={styles.searchContainer}>
      <Text style={styles.searchLabel}>Search:</Text>
      <View style={styles.searchInputContainer}>
        <TextInput
          placeholder="Search by title..."
          value={query}
          onChangeText={handleSearch}
          style={styles.searchInput}
          placeholderTextColor="#A9A9A9"
        />
      </View>
    </View>
  );
};

export default SearchBar;
