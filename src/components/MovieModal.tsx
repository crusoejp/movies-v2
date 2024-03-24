import { Dispatch, FC, SetStateAction } from "react";
import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import ReviewList from "./ReviewList";
import { MovieType } from "../componentUtils";
import ReviewForm from "./ReviewForm";

interface Props {
  movie: MovieType;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  refetchMovies: () => void;
}

// I created movie modal to allow the user to click on a movie card from movie list and see more details and leave a review without having to create new page.
const MovieModal: FC<Props> = ({ movie, isOpen, setOpen, refetchMovies }) => {
  return (
    <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{movie.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign="center" pb="15px">
          <Image maxH="250px" src={movie.poster} alt={movie.title} m="0 auto" />
          <Text mt="15px">dir. by: {movie.director}</Text>
          <Text>released: {movie.year}</Text>
          {movie.reviews.length === 0 ? (
            <Text my="15px">Be the first to review this movie!</Text>
          ) : (
            <ReviewList reviews={movie.reviews} />
          )}
          <ReviewForm
            movie={movie}
            setOpen={setOpen}
            refetchMovies={refetchMovies}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MovieModal;
