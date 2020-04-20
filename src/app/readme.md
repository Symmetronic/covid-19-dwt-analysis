# app-root



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute | Description                        | Type         | Default     |
| ------------------ | --------- | ---------------------------------- | ------------ | ----------- |
| `coeffs`           | --        | The wavelet coefficients.          | `number[][]` | `undefined` |
| `interpTimeSeries` | --        | The interpolated time series data. | `Point[]`    | `undefined` |
| `timeSeries`       | --        | The time series data.              | `Point[]`    | `undefined` |


## Dependencies

### Depends on

- [github-corner](../components/github-corner)
- strc-progress-bar
- [page-dashboard](../pages/dashboard)

### Graph
```mermaid
graph TD;
  app-root --> github-corner
  app-root --> strc-progress-bar
  app-root --> page-dashboard
  page-dashboard --> visualization-container
  page-dashboard --> vega-visualization
  style app-root fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
