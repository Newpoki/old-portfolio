# **Portfolio Front**

![the-home-screen](./public/documentation/home.png)

## **About**

This repositery host my personal website code. The site itself show my CV, custom projects, and it's a good way to show my React guidelines. Also, I can try new feature that I'm not used to, like `translation management (i18n)` or theme choice.

## **Project setup**

- `git@github.com:Newpoki/old-portfolio.git`
- `npm i && npm run start` or `yarn && yarn start`

## **Stack technique**

The whole app is written in `Typescript`, using `React` to render the view, and `Jotai` to store data that is common accross the app.
The app uses [vitejs](https://vitejs.dev/)
As this is a really tiny and simple website, there is no need for any backend here.

### **Dependencies**

- <a href="https://material-ui.com/">Material UI </a>from a complete component library
- <a href="https://jotai.org/docs/introduction">Jotai </a>for a centralised data management
- <a href="https://github.com/rexxars/react-markdown">React markdown </a>to convert markdown to React components
- <a href="https://reacttraining.com/react-router/web/guides/quick-start">React router </a> as the router
- <a href="https://react.i18next.com/t">React i18next </a>to handle i18n in the app
- <a href="https://github.com/nfl/react-helmet">React helmet </a>to change router page's metadata

## **Component guideline**

All the components are written the same way.

```javascript
import thirdPartyLib from '@third-party-lib';

import { CommonComponent } from '~common';
import { ComponentSkeleton } from './commonComponent';

// Prefixed with an I, Sufixed with Props
interface IMonComposantProps {
  param: string;
}

export const MonComposant = ({ param }: IMonComposantProps) => {
  /* Store */

  // All data that comes from Jotai
  const [data, setData] = useAtom(dataAtom);


  /* Vars */

  // All data that comes from hooks (useAtom excluded), utils, etc
  const { t } = useTranslation("namespace");
  const dispatch = useDispatch();

  /* Derived Vars */

  // All data that is obtained from props, redux hooks, or any other sources
  const color = myUtils(param1, localState)

  /* Callbacks */

  // Most of the callbacks are wrapped in useCallback,
  // But it's not mandatory.
  const myCallback = useCallback((value: string) => {
    setData({key: value}));
  }, [dispatch]);

/* Effects */

  // Effects just in top of the render because this is what impact
  // the more the render. They should be use with a lot of attention
  // and avoided if possible in order to have less undersired side effects
  useEffect(() => {
    console.log("I'm an useEffect !")
  }, [dispatch, localeCode]);

  /* Render */*

  return (
    <Page sx={{ p: 5, justifyContent: { xs: "center" } }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: 40, md: 60 },
          textAlign: { xs: "center", md: "left" },
          color,
        }}
      >
        {param}
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: 20, sm: 25, md: 50 },
          textAlign: { xs: "center", md: "left" },
          color,
        }}
      >
        {data}
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: 20, sm: 25, md: 50 },
          textAlign: { xs: "center", md: "left" },
          color,
        }}
      >
        {data.job_libraries}
      </Typography>
    </Page>
  )
}
```

## Deploy

The app is hosted on <a href="https://www.netlify.com/">https://www.netlify.com/</a>. To deploy, just need to push or merge a merge request on master, and, as the github project is linked to netlify, the app will automatically be deployed.
