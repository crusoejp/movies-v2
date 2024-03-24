import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction, useState } from "react";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  refetchMovies: () => void;
}

const NewMovieModal: FC<Props> = ({ open, setOpen, refetchMovies }) => {
  const [title, setTitle] = useState<string>("");
  const [director, setDirector] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [poster, setPoster] = useState<string>("");

  const handleSubmit = async () => {
    if (title.length > 0 && director.length > 0 && year.length > 0) {
      const response = await fetch(
        "https://65ff9523df565f1a6145219c.mockapi.io/movies/movie",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            director,
            year,
            poster,
          }),
        }
      );

      if (response.ok) {
        refetchMovies();
        setTitle("");
        setDirector("");
        setYear("");
        setPoster("");
        setOpen(false);
      }
    } else {
      alert("Please fill out all fields.");
    }
  };
  return (
    <Modal isOpen={open} onClose={() => setOpen(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Movie</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb="15px">
          <Flex flexDir="column" gap="10px">
            <Input
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Director"
              onChange={(e) => setDirector(e.target.value)}
            />
            <Input
              placeholder="Year"
              onChange={(e) => setYear(e.target.value)}
            />
            <Input
              placeholder="Poster URL (optional)"
              onChange={(e) => setPoster(e.target.value)}
            />
            <Button mt="15px" onClick={handleSubmit}>
              Add Movie
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NewMovieModal;
