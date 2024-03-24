import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Movie from "./Movie";
import { MovieType } from "../componentUtils";
import NewMovieModal from "./NewMovieModal";

const MovieList = () => {
  // controls the movies shown in movielist
  const [movieList, setMovieList] = useState<MovieType[]>([]);
  // controls the visibility of the new movie modal
  const [open, setOpen] = useState<boolean>(false);

  // fetch movies from the mock api
  const getMovies = async () => {
    const response = await fetch(
      "https://65ff9523df565f1a6145219c.mockapi.io/movies/movie"
    );
    const movies = await response.json();
    if (movies) {
      setMovieList(movies);
    }
  };

  return (
    <Box>
      <Text fontSize="36px" mb="25px">
        Movies4U
      </Text>
      <Flex pb="20px" justifyContent="center" width="75%" m="0 auto" gap="10px">
        <Button
          onClick={getMovies}
          bgColor="white"
          color="blue"
          border="2px solid blue"
          _hover={{
            bgColor: "blue",
            color: "white",
          }}
        >
          Get Movies
        </Button>
        <Button
          bgColor="white"
          color="blue"
          border="2px solid blue"
          _hover={{
            bgColor: "blue",
            color: "white",
          }}
          onClick={() => setOpen(true)}
        >
          +
        </Button>
      </Flex>
      <Flex wrap="wrap" w="75%" m="0 auto" gap="10px">
        {movieList.map((movie: MovieType) => {
          return (
            <Movie movie={movie} key={movie.id} refetchMovies={getMovies} />
          );
        })}
      </Flex>
      <NewMovieModal open={open} setOpen={setOpen} refetchMovies={getMovies} />
    </Box>
  );
};

export default MovieList;
