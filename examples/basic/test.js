import React from 'react'
import ReactRenderRouter from 'react-render-router'

import Header from './Header'
import Carousel from './Carousel'
import PriceBar from './PriceBar'
import Description from './Description'
import Promotion from './Promotion'

export default () => {
  return (
    <ReactRenderRouter>
      <Render renderComponent={Header} />
      <Render renderComponent={Carousel} />
      <ReactRenderRouter>
        <Render renderComponent={PriceBar} />
        <Render renderComponent={Description} />
        <Render renderComponent={Promotion} />
      </ReactRenderRouter>
    </ReactRenderRouter>
  )
}