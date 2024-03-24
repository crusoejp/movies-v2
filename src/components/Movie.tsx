import { Box, Image, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import MovieModal from "./MovieModal";
import { MovieType } from "../componentUtils";

interface MovieComponentProps {
  movie: MovieType;
  refetchMovies: () => void;
}

const Movie: FC<MovieComponentProps> = ({ movie, refetchMovies }) => {
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
