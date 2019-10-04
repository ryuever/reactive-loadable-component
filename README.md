# reactive-loadable-component

## feature

1. lazy load file component
2. lazy load component

```js
<ObservableComponent
  trigger="image-loaded"
  emit="finish"
  component={Component}
>
```

```js
const Component = () => require('./Component').default

<ObservableComponent
  trigger="image-loaded"
  emit="finish"
  component={Component}
>
```

```js
// Component.js

export default () => {
  const { notify } = props

  notify()

  return null
}
```