# InstaJarl

InstaJarl is a personal web application containing bookmarks and minor utilities, such as the current temperature and weather at the user's location, the time and date, and a searchbar. Its functionality and name is partly inspired by [InstaBart](https://instabart.no), made by [Morten Vaale Noddeland](https://mvn.no).

![A screenshot of the web application](/public/exampleImage.png)

### How to run locally

1. Clone the repo by using this link:

```
https://github.com/javanster/instaJarl-v2.git
```

2. Run:

```
npm i
```

3. Run:

```
npm run dev
```

### Technologies, libraries and utilities used

- [Vite with React and Typescript](https://vitejs.dev) as framework and build tool
- [Material UI](https://mui.com/material-ui/) for React components and icons
- [TanStack](https://tanstack.com) for fetching data
- [Jotai](https://jotai.org) for global state management
- [MET Weather API icons](https://github.com/metno/weathericons) for weather icons

### API services used

- [Locationforecast from MET Weather API](https://api.met.no/weatherapi/locationforecast/2.0/documentation) for current weather and temperature
