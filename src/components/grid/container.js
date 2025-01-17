import PropTypes from 'prop-types'
import styled, {
  css
} from 'styled-components'

import config, {
  DIMENSIONS
} from '../../config'

const Container = styled.div`
  margin-inline-start: auto;
  margin-inline-end: auto;
  max-width: 100%;
  box-sizing: border-box;

  ${p => css`
    ${DIMENSIONS.map(d =>
    config(p).container[ d ] && config(p).media[ d ]`
      padding-inline-start: ${config(p).paddingWidth[ d ]}rem;
      padding-inline-end: ${config(p).paddingWidth[ d ]}rem;
    `)}
  `}


  ${p => !p.fluid && css`
    ${DIMENSIONS.map(d =>
    config(p).container[ d ] && config(p).media[ d ]`
      ${typeof config(p).container[d] === 'number' ? `width: ${config(p).container[ d ]}rem;` : `width: 100%;`}
    `)}
  `}

  ${({ debug }) => debug && css`
    background-color: #5901ad40;
    outline: #fff solid 1px;
  `}
`

Container.displayName = 'Container'

Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node,
  debug: PropTypes.bool
}

export default Container
