import { Select } from "@cliffy/prompt";
import { colors } from "@cliffy/ansi/colors";

type Flavour = "vanilla" | "funfetti" | "choc mint";
type Topping = "sprinkles" | "nuts" | "chocolate";
type Receptacle = "cone" | "cup";

const format = {
  "vanilla": colors.bold.bgBrightBlue(" vanilla "),
  "funfetti": colors.bold.bgBrightBlue(" funfetti "),
  "choc mint": colors.bold.bgBrightBlue(" choc mint "),
  "sprinkles": colors.bold.bgBrightBlue(" sprinkles "),
  "nuts": colors.bold.bgBrightBlue(" nuts "),
  "chocolate": colors.bold.bgBrightBlue(" chocolate "),
  "cup": colors.bold.bgBrightBlue(" cup "),
  "cone": colors.bold.bgBrightBlue(" cone "),
};

let flavour: Flavour | undefined = undefined;
let topping: Topping | undefined = undefined;
let recepacle: Receptacle | undefined = undefined;

function outputIceCream(
  flavour: Flavour,
  recepacle: Receptacle,
  topping: Topping,
) {
  console.log(
    colors.bold(
      `The machine dispenses a ${format[flavour]} ice-cream in an ${
        format[recepacle]
      } with ${format[topping]}!`,
    ),
  );
  Deno.exit(0);
}

flavour = (await Select.prompt({
  message: "Pick a flavour",
  options: [
    { value: "choc mint", name: "Choc mint" },
    { value: "funfetti", name: "Funfetti" },
    { value: "vanilla", name: "Vanilla" },
  ],
})) as Flavour;

if (flavour === "funfetti") {
  topping = "sprinkles";
  recepacle = "cup";
  outputIceCream(flavour, recepacle, topping);
}

topping = (await Select.prompt({
  message: "Pick a topping",
  options: [
    { value: "chocolate", name: "Chocolate" },
    { value: "nuts", name: "Nuts" },
    { value: "sprinkles", name: "Sprinkles" },
  ],
})) as Topping;

if (topping === "sprinkles") {
  if (flavour === "choc mint") {
    topping = "nuts";
  }

  if (flavour === "vanilla" || flavour === "funfetti") {
    topping = "sprinkles";
  }
}

if (topping === "chocolate") {
  if (flavour === "choc mint") {
    topping = "nuts";
  }

  if (flavour === "vanilla") {
    flavour = "funfetti";
    topping = "chocolate";
  }

  if (flavour === "funfetti") {
    topping = "chocolate";
  }
}

recepacle = (await Select.prompt({
  message: "Pick a recepacle",
  options: [
    { value: "cone", name: "Cone" },
    { value: "cup", name: "Cup" },
  ],
})) as Receptacle;

recepacle = "cone";

outputIceCream(flavour, recepacle, topping);
