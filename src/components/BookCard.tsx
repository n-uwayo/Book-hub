import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Book } from "./types";

interface BookCardProps {
  book: Book;
  onClick: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
  return (
    <Card onClick={onClick} style={{ cursor: "pointer" }}>
      <CardContent>
        <Typography variant="h6">{book.title}</Typography>
        <Typography variant="body2">Author: {book.author}</Typography>
        <Typography variant="body2">Year: {book.publishedYear}</Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
