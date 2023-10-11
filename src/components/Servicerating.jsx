import PropTypes from 'prop-types'
export default function Servicerating({children,selectPercent2,onSelect}) {
  return (
    <div>
        <label>{children}</label>
        <select value={selectPercent2} onChange={(e) => onSelect(Number(e.target.value))}>
            <option value="0">Dissatisfied (0%)</option>
            <option value="5">it was okay(5%)</option>
            <option value="10">it was good(10%)</option>
            <option value="20">Absolutely amazing!(20%)</option>
        </select>
    </div>
  )
}

Servicerating.propTypes = {
    selectPercent2: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(Object)
}
