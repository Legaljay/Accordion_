import PropTypes from 'prop-types'

export const Bill = ({bill,onSetBill}) => {
  return (
    <div>
        <label>How much was the bill?</label>
        <input 
            type="text" 
            placeholder="Bill value" 
            value={bill} 
            onChange={(e) => onSetBill(Number(e.target.value))}/>
    </div>
  )
}

Bill.propTypes = {
    bill: PropTypes.string,
    onSetBill: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(Object)
}