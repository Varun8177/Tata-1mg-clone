import { Button, useColorMode } from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      aria-label="Toggle Color Mode"
      onClick={toggleColorMode}
      _focus={{ boxShadow: "none" }}
      w="fit-content"
    >
      {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
    </Button>
  );
}
