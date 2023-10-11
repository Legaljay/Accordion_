import PropTypes from 'prop-types'
export default function TipCalculator({bill, selectPercent, selectPercent2}) {
    const Avg = (selectPercent + selectPercent2) / 2;
  return (
    <div>
        <p>You pay ${bill + Avg} (${bill} + ${Avg})</p>
    </div>
  )
}

TipCalculator.propTypes = {
    bill : PropTypes.number,
    selectPercent: PropTypes.number,
    selectPercent2: PropTypes.number
}