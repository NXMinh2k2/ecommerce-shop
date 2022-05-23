import React from 'react'
import PropTypes from 'prop-types'

const Grid = (props) => {

    const style = {
        gap: props.gap ? `${props.gap}px` : '0'
    }

    const col = props.col ? `grid-col-${props.col}` : ''
    const mdcol = props.mdCol ? `grid-col-${props.mdcol}` : ''
    const smcol = props.smCol ? `grid-col-${props.smcol}` : ''

  return (
    <div className={`grid ${col} ${mdcol} ${smcol}`} style={style}>
        {props.children}
    </div>
  )
}

Grid.propTypes = {
    col: PropTypes.number.isRequired,
    mdCol: PropTypes.number,
    smCol: PropTypes.number,
    gap: PropTypes.number
}

export default Grid