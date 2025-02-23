import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Button, Rating,Card, CardContent } from "@mui/material";

interface Book {
  _id: string;
  title: string;
  author: string;
  publishedYear: number;
  description: string;
  genre: string;
  isbn: string;
}

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [book, setBook] = useState<Book | null>(null);
  const [rating, setRating] = useState<number | null>(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/books/${id}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h4">{book.title}</Typography>
          <Typography variant="h6">By {book.author}</Typography>
          <Typography>Published Year: {book.publishedYear}</Typography>
          <Typography>Genre: {book.genre}</Typography>
          <Typography>ISBN: {book.isbn}</Typography>
          <Typography>Description: {book.description}</Typography>
          <Button variant="contained" color="primary" onClick={() => navigate("/")}>
            Back to List
          </Button>
        </CardContent>
      </Card>
      <Typography variant="h6">Rate this book:</Typography>
      <Rating value={rating} onChange={(event, newValue) => setRating(newValue)} />
      {rating && <Typography>You rated this book: {rating} stars</Typography>}
      
    </Container>

    
  );
};

export default BookDetails;
