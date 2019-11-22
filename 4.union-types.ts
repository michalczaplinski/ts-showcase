// 4. Union types

interface RegularProgrammer {
  name: string;
  editor: "emacs";
}

// Pssst... Chill, there's no such thing as a 10X Programmer 😂
interface Programmer10X {
  name: string;
  editor: "vim";
}

type Programmer = RegularProgrammer | Programmer10X;

function chooseProgrammer(programmer: Programmer) {
  if (programmer.editor === "vim") {
    programmer.name;
  } else {
    programmer;
  }
}
