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
    if (reviewer && (newReview.length > 0 || rating > 0)) {
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
      <Flex justifyContent="space-between" mb="10px">
        <Text>Seen it? Leave a review:</Text>
        <Stars setRating={setRating} />
      </Flex>
      <Input
        placeholder="Your name"
        mb="10px"
        onChange={(e) => setReviewer(e.target.value)}
      />
      <Flex gap="10px" alignItems="center">
        <Textarea
          placeholder="Your review..."
          id={`${movie.id}-review-form`}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Flex>
    </Box>
  );
};

export default ReviewForm;
