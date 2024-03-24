import { StarIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction, useState } from "react";

// TypeScript is essentially JavaScript with some extra features, so you can use the same types as JavaScript, such as string, number, and boolean.
// TypeScript also allows you to define custom types, such as interfaces and enums, which can be used to describe the shape of objects.
// CoPilot wrote that last line.
// Basically I can define props here and the Stars component will know what to expect when it's used.
interface Props {
  rating?: number;
  setRating?: Dispatch<SetStateAction<number>>;
}

const Stars: FC<Props> = ({ rating, setRating }) => {
  // not the best way to do this I know, but it was the first way I thought of.
  // initializing 5 states for each star, and setting the color of each star based on the rating (if its present)
  const [color1, setColor1] = useState(rating && rating > 0 ? "green" : "gray");
  const [color2, setColor2] = useState(rating && rating > 1 ? "green" : "gray");
  const [color3, setColor3] = useState(rating && rating > 2 ? "green" : "gray");
  const [color4, setColor4] = useState(rating && rating > 3 ? "green" : "gray");
  const [color5, setColor5] = useState(rating && rating > 4 ? "green" : "gray");

  const handleSelection = (rating: number) => {
    // each star icon has been set to a rating value, so when a star is clicked, the rating is set to that value
    // and the colors of the stars are set accordingly
    if (setRating) {
      if (rating === 1) {
        setColor1("green");
        setColor2("gray");
        setColor3("gray");
        setColor4("gray");
        setColor5("gray");
      }
      if (rating === 2) {
        setColor1("green");
        setColor2("green");
        setColor3("gray");
        setColor4("gray");
        setColor5("gray");
      }
      if (rating === 3) {
        setColor1("green");
        setColor2("green");
        setColor3("green");
        setColor4("gray");
        setColor5("gray");
      }
      if (rating === 4) {
        setColor1("green");
        setColor2("green");
        setColor3("green");
        setColor4("green");
        setColor5("gray");
      }
      if (rating === 5) {
        setColor1("green");
        setColor2("green");
        setColor3("green");
        setColor4("green");
        setColor5("green");
      }

      setRating(rating);
    }
    return;
  };
  return (
    <Flex>
      {/* i could iterate over an array of stars, but I've already written this and I'm in a rush */}
      {/* I could also dynamically set the color inline, but we were asked to use useState so I did */}
      <StarIcon
        boxSize={6}
        color={color1}
        cursor="pointer"
        onClick={() => handleSelection(1)}
      />
      <StarIcon
        boxSize={6}
        color={color2}
        cursor="pointer"
        onClick={() => handleSelection(2)}
      />
      <StarIcon
        boxSize={6}
        color={color3}
        cursor="pointer"
        onClick={() => handleSelection(3)}
      />
      <StarIcon
        boxSize={6}
        color={color4}
        cursor="pointer"
        onClick={() => handleSelection(4)}
      />
      <StarIcon
        boxSize={6}
        color={color5}
        cursor="pointer"
        onClick={() => handleSelection(5)}
      />
    </Flex>
  );
};

export default Stars;
