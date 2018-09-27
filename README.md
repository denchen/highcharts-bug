Project created with [Create React App](https://github.com/facebook/create-react-app)

For Highcharts, using [`react-highcharts`](https://github.com/kirjs/react-highcharts)

Testing is used with [Enzyme](https://github.com/airbnb/enzyme)

To replicate the bug, simply run `yarn test`

You _should_ see something like the following:

```
FAIL  src/App.test.js
 ● renders without crashing

   TypeError: z.getSpanWidth is not a function

     at w (node_modules/highcharts/highcharts.js:67:132)
     at a.SVGRenderer.truncate (node_modules/highcharts/highcharts.js:67:182)
     at node_modules/highcharts/highcharts.js:72:252
     at Array.forEach (<anonymous>)
     at a.each (node_modules/highcharts/highcharts.js:28:379)
     at node_modules/highcharts/highcharts.js:70:327
     at Array.forEach (<anonymous>)
```
