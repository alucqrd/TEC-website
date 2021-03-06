import React from 'react'
import PropTypes from 'prop-types'
import { HomepageTemplate } from 'templates/homepage'
import { StyleSheetManager } from 'styled-components'

const HomepagePreview = ({ entry }) => {
  const iframe = document.querySelector('.nc-previewPane-frame')
  const iframeHeadElem = iframe.contentDocument.head

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <HomepageTemplate {...entry.toJSON().data} />
    </StyleSheetManager>
  )
}

HomepagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default HomepagePreview
