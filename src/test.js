import React from 'react'
import ReactRenderRouter from 'react-render-router'

import Header from './react'
import Carousel from './Carousel'
import PriceBar from './PriceBar'
import Description from './Description'
import Promotion from './Promotion'

export default () => {
  return (
    <ReactRenderRouter>
      <Render component={Header} />
      <Render component={Carousel} />
      <ReactRenderRouter>
        <Render component={PriceBar} />
        <Render component={Description} />
        <Render component={Promotion} />
      </ReactRenderRouter>
    </ReactRenderRouter>
  )
}