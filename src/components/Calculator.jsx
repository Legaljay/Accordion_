import PropTypes from 'prop-types'
export default function TipCalculator({val}) {
  return (
    <div>
        <p>You pay ${val} ($X + $tip)</p>
    </div>
  )
}

TipCalculator.propTypes = {
    val : PropTypes.number
}