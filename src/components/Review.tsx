import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { ReviewType } from "../componentUtils";
import Stars from "./Stars";

interface Props {
  review: ReviewType;
}

// handing movie.review down to the Review component
const Review: FC<Props> = ({ review }) => {
  return (
    <Flex flexDir="column" gap="10px">
      <Stars rating={review.rating} />
      <Box textAlign="left">{review.comment}</Box>
      <Box textAlign="right">{review.reviewer}</Box>
    </Flex>
  );
};

export default Review;
