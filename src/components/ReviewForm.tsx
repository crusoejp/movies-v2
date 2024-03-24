import { Dispatch, FC, SetStateAction, useState } from "react";
import { MovieType } from "../componentUtils";
import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import Stars from "./Stars";

interface Props {
  movie: MovieType;
  setOpen: Dispatch<SetStateAction<boolean>>;
  refetchMovies: () => void;
}

const ReviewForm: FC<Props> = ({ movie, setOpen, refetchMovies }) => {
  const [newReview, setNewReview] = useState<string>("");
  const [reviewer, setReviewer] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const handleSubmit = async () => {
    // check for reviewer and either a review or rating
    if (reviewer && (newReview.length > 0 || rating > 0)) {
      // make a put request to update the movie with the new review
      const response = await fetch(
        `https://65ff9523df565f1a6145219c.mockapi.io/movies/movie/${movie.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reviews: [
              ...movie.reviews,
              {
                reviewer: reviewer,
                rating,
                comment: newReview,
              },
            ],
          }),
        }
      );

      // if it goes thru, reset and refetch
      if (response.ok) {
        refetchMovies();
        setNewReview("");
        setReviewer("");
        setRating(0);
        setOpen(false);
      }
    }
  };
  return (
    <Box>
      {/* Box and Flex are just divs*/}
      <Flex justifyContent="space-between" mb="10px">
        {/* Text is just a p*/}
        <Text>Seen it? Leave a review:</Text>
        <Stars setRating={setRating} />
      </Flex>
      {/* Input is just an input with chakra styles*/}
      <Input
        placeholder="Your name"
        mb="10px"
        onChange={(e) => setReviewer(e.target.value)}
      />
      <Flex gap="10px" alignItems="center">
        {/* Textarea is just a textarea with chakra styles*/}
        <Textarea
          placeholder="Your review..."
          id={`${movie.id}-review-form`}
          onChange={(e) => setNewReview(e.target.value)}
        />
        {/* Button is just a button with chakra styles*/}
        <Button onClick={handleSubmit}>Submit</Button>
      </Flex>
    </Box>
  );
};

export default ReviewForm;
