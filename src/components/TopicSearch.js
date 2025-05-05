// src/components/TopicSearch.js
import React, { useState } from 'react';
import './TopicSearch.css';

const topics = [
  { id: 1, name: 'Thermodynamics', category: 'Physics' },
  { id: 2, name: 'Algebra', category: 'Mathematics' },
  { id: 3, name: 'Photosynthesis', category: 'Biology' },
  { id: 4, name: 'Electromagnetism', category: 'Physics' },
  { id: 5, name: 'Trigonometry', category: 'Mathematics' }
];

const TopicSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTopics = topics.filter(topic =>
    topic.name.includes(searchTerm)
  );
  

  return (
    <div className="topic-search-container">
      <h2>Topic Catalogue</h2>
      <input
        type="text"
        placeholder="Search by topic name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="topic-list">
        {filteredTopics.length > 0 ? (
          filteredTopics.map(topic => (
            <div key={topic.id} className="topic-card">
              <h3>{topic.name}</h3>
              <p>{topic.category}</p>
            </div>
          ))
        ) : (
          <p className="no-topics">No topics found</p>
        )}
      </div>
    </div>
  );
};

export default TopicSearch;
