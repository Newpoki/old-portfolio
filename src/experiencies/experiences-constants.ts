import { Experience } from "./experiences-types";

export const EXPERIENCES: Array<Experience> = [
  {
    type: "work",
    place: {
      city: "Lattes",
      country: "FR",
    },
    startedAt: "2020-10-15",
    content:
      "In an **open-ended contract** at [Mediakeys](https://www.mediakeys.com/) as Front-End web developer.\nI'm working on few projects, the two mains being a platform allowing companies / media trader to handle their advertising campaigns around the worl on various media as Facebook, Instagram, website, native applications, Youtube, etc, and an app to create AD usable for these AD campaigns.\nIn order to create new applications and continue the existings, I have to:\n\n- Create wireframes mockups\n- Create components and ducks\n- Writing a lot of unit tests\n- Advise new functionality nor evolution\n- Write documentation\n- Take part to SCRUM ceremonies\n\n**Used libraries :** React, Redux, Redux Sagas, Moment, Moment JS, Material-UI, Jest, etc ...\n",
    title: "Mediakeys",
  },
  {
    type: "work",
    place: {
      city: "Vitrolles",
      country: "FR",
    },
    startedAt: "2019-05-09",
    endedAt: "2020-09-15",
    title: "HCube - Française des Jeux",
    content:
      "In an **open-ended contract** at [HCube Conseil](https://www.hcube-conseil.fr/) for **one year and half**, I've worked for the **Française des Jeux** as Front-End Developer.\nThe goal was to refactor the actual signup, sign in and account management forms. In order to do this, I had to:\n\n- Reverse engineering the existant apps\n- Try some POCs\n- Create components from Zeplin mockups\n- Train new developer to React\n- Take part in SCRUM ceremonies\n- Create various ducks for our components\n- Writing unit tests and a lot of documentation\n\n**Used librairies :** React, Redux, Redux Sagas, Redux toolkit, Dayjs, Jest, Material UI, Styled-components, etc...",
  },

  {
    type: "work",
    place: {
      city: "Marseille",
      country: "FR",
    },
    startedAt: "2018-02-19",
    endedAt: "2018-08-18",
    title: "BuyCo",
    content:
      "**First professional experience**  of 6 months in an **open-ended** contract as **web developper**, I had to start a POC from scratch of a brand new application using **React**.\nThe next 4 months, I worked with another developper and the tech-lead on the main application realizing various missions as:\n\n- Writting unit tests\n- Creating mockups\n- Creating re-usable components\n- Creating sagas, reducer, actions, and more\n- Debugging existing functionality\n- Acting in agile ceremony\n\n**Used libraries :** React, Redux, Redux Sagas, Moment, Jest, Enzyme, Semantic-UI, etc ...",
  },
  {
    type: "diploma",
    place: {
      city: "Monteux",
      country: "FR",
    },
    startedAt: "2017-12-17",
    endedAt: "2017-12-20",
    title: "Opquast - Web good practices",
    content:
      "[Opquast](https://www.opquast.com/) is a professional certification for every stakeholders in a web project. We learn more about essentials like SEO, a11y, HTML semantic, responsive and a lot of other things. After this autonomous training, we can take an exam to get a certification valid for 5 years.\n\nI've score **885 / 1000** and so, got my [certificate](https://directory.opquast.com/en/certificat/PFE9IM/).\n\n> This score means: Excellent knowledge of web quality rules and associated vocabulary. \nReal and appreciable skills to participate in projects with other professionals.",
  },
  {
    type: "diploma",
    place: {
      city: "Monteux",
      country: "FR",
    },
    startedAt: "2017-06-19",
    endedAt: "2017-11-22",
    title: "O'Clock",
    content:
      "[O'Clock](https://oclock.io) is a remote school cursus where I deepened my knowledge and love in web development.\nIn first place, there is 3 months where we learn from scratch **HTML 5**, **CSS 3**, **PhP** and **Javascript**, and in the same time some classics like **Git**, **Node**, **NPM**, **Composer**, **Webpack**, etc, etc ...\nAt the end of these 3 months, 1 month of specialization on one library (**React** in my case ❤️), followed by another moth where we focused on the creation of a React / Redux application.\n\nAfter the end of the cursus, I decided to take an exam, which I passed, obtaining a **Bac + 2** (titre de développeur logiciel de rang III) \n\n",
  },

  {
    type: "work",
    place: {
      city: "Avignon",
      country: "FR",
    },
    startedAt: "2015-03-01",
    endedAt: "2015-10-01",
    title: "Adequat",
    content:
      "From March to October 2015, I've work as **temp worker** for [Adequat](https://www.lejobadequat.com/). First professional experience, I've done various missions as:\n- Peddler\n- Deliverer helper\n- Order picker\n- Data entry operator\n- Inventorist\n- Conditioner",
  },
  {
    type: "diploma",
    place: {
      city: "Avignon",
      country: "FR",
    },
    startedAt: "2014-09-04",
    endedAt: "2016-12-06",
    title: "Computing bachelor degree - CERI",
    content:
      "After validating the first year of this bachelor at [CERI](http://ceri.univ-avignon.fr/) (Centre d'Enseignement et de Recherche en Informatique) in Avignon, I've quit in December at the beginning of the second year to find a less theoric, generic and more focused on the web development.",
  },
  {
    type: "diploma",
    place: {
      city: "Carpentras",
      country: "FR",
    },
    startedAt: "2011-09-05",
    endedAt: "2014-07-04",
    title: "Baccalauréat scientifique, option ISN",
    content:
      "Passed my **Scientific Baccalaureat with an INS option** (Informatic and Numeric Science) at Victor Hugo high school in Carpentras, during which I found myself a passion for computing.",
  },
  {
    type: "birth",
    place: {
      city: "Marignane",
      country: "FR",
    },
    startedAt: "1996-12-24",
    title: "Birth",
    content:
      "I was born on December 24th, 1996 in Marignane.\n\n(It's not that bad actually, I'd even say that this is nice to celebrate Christmas and my birthday the same night ! 🙄)",
  },
];
