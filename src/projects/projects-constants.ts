import PokedexImg from "./projects-images/pokedex.png";
import ConsumptionCalculatorImg from "./projects-images/consumption-calculator.png";

export const PROJECTS_LIST = [
  {
    title: "Pokédex",
    description: "Based on a Figma project and an open API, I've built a minimalist pokedex",
    websiteUrl: "https://pokedex-newpoki.vercel.app/",
    githubUrl: "https://github.com/Newpoki/pokedex",
    imgUrl: PokedexImg,
  },
  {
    title: "Consumption calculator",
    description:
      "A really simple (and old) tool to get a car fuel consumption per 100km and get a journey cost",
    websiteUrl: "https://brave-snyder-8bb959.netlify.app/",
    githubUrl: "https://github.com/Newpoki/calcul-conso",
    imgUrl: ConsumptionCalculatorImg,
  },
];
