import React, { useState } from "react";

interface FilterProps {
  onFilter: (filters: { author?: string; title?: string; year?: number }) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilter }) => {

  const [author, setAuthor] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    onFilter({
      author,
      title,
      year: year ? parseInt(year) : undefined, 
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Year</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <button type="submit">Apply Filters</button>
    </form>
  );
};

export default Filter;
