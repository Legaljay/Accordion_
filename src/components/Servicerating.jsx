import PropTypes from 'prop-types'
export default function Servicerating({value,onChange}) {
  return (
    <div>
        <label>How did your friend like the service?</label>
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="0">Dissatisfied (0%)</option>
            <option value="5">it was okay(5%)</option>
            <option value="10">it was good(10%)</option>
            <option value="20">Absolutely amazing!(20%)</option>
        </select>
    </div>
  )
}

Servicerating.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}
