import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { ReviewType } from "../componentUtils";
import Review from "./Review";

interface Props {
  reviews: ReviewType[];
}

// ReviewList component is basically just a div with a map of Review components
const ReviewList: FC<Props> = ({ reviews }) => {
  return (
    <Box my="15px">
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </Box>
  );
};

export default ReviewList;
