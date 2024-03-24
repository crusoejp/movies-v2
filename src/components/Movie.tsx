import { Box, Image, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import MovieModal from "./MovieModal";
import { MovieType } from "../componentUtils";

// Here you can see that we preset the props for the component.
interface Props {
  movie: MovieType;
  refetchMovies: () => void;
}

// FC(functional component)<Props> tells the component to expect the props we defined above.
const Movie: FC<Props> = ({ movie, refetchMovies }) => {
  // controls the visibility of the movie modal (details of the movie and reviews)
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Box
      key={movie.id}
      w="200px"
      cursor="pointer"
      padding="15px"
      boxShadow="md"
      mb="10px"
      bgColor="white"
      borderRadius="10px"
      onClick={() => setOpen(true)}
      m="0 auto"
    >
      {/* let's not forget that inline styling is all the rave these days */}
      <Image maxH="250px" src={movie.poster} alt={movie.title} m="0 auto" />
      <Text mt="10px">{movie.title}</Text>
      <Text>dir. by: {movie.director}</Text>
      <Text>released: {movie.year}</Text>
      <MovieModal
        movie={movie}
        isOpen={open}
        setOpen={setOpen}
        refetchMovies={refetchMovies}
      />
    </Box>
  );
};

export default Movie;
