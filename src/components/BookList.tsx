import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, TextField, Button, Grid, Card, CardContent, Typography, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BookBanner from "./Book";
import { Book } from "./types";

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<{ author?: string; title?: string; year?: number }>({});
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("publishedYear"); 


  const [page, setPage] = useState<number>(1); 
  const [totalBooks, setTotalBooks] = useState<number>(0); 
  const booksPerPage = 5; 

  const navigate = useNavigate();

  const handleBookClick = (bookId: string) => {
    navigate(`/books/${bookId}`);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const params: { [key: string]: any } = {
          ...filters,
          search: searchQuery,
          page,
          limit: booksPerPage,
          sortBy, 
        };

        const response = await axios.get("http://localhost:5000/api/books", { params });

        setBooks(response.data.books);
        setTotalBooks(response.data.totalBooks || 0); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    };
    fetchBooks();
  }, [filters, searchQuery, page, sortBy]); 

  return (
    <Container>
      <BookBanner />
      <Typography variant="h4" gutterBottom>
        Listing books
      </Typography>

      
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Author"
            fullWidth
            value={filters.author || ""}
            onChange={(e) => setFilters({ ...filters, author: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Title"
            fullWidth
            value={filters.title || ""}
            onChange={(e) => setFilters({ ...filters, title: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Published Year"
            fullWidth
            value={filters.year || ""}
            onChange={(e) =>
              setFilters({ ...filters, year: e.target.value ? Number(e.target.value) : undefined })
            }
          />
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" onClick={() => setPage(1)}>
        Apply Filters
      </Button>


      <TextField
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search books"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="secondary" onClick={() => setPage(1)}>
        Search
      </Button>

      
      <FormControl fullWidth margin="normal">
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          label="Sort By"
        >
          <MenuItem value="publishedYear">Published Year</MenuItem>
          <MenuItem value="title">Title</MenuItem>
        </Select>
      </FormControl>

     
      {loading ? <p>Loading...</p> : null}

      
      <Grid container spacing={2} marginTop={2}>
        {books.length === 0 ? (
          <Typography variant="h6">No books match your search.</Typography>
        ) : (
          books.map((book) => (
            <Grid item key={book._id} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{book.title}</Typography>
                  <Typography variant="body2">Author: {book.author}</Typography>
                  <Typography variant="body2">Year: {book.publishedYear}</Typography>
                  <Button onClick={() => handleBookClick(book._id)}>View Details</Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>


      <Grid container spacing={2} justifyContent="center" marginTop={2}>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </Button>
        <Typography variant="body1" align="center">
          Page {page} of {Math.ceil(totalBooks / booksPerPage) || 1} 
        </Typography>
        <Button disabled={books.length < booksPerPage} onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </Grid>
    </Container>
  );
};

export default BookList;