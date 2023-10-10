import PropTypes from 'prop-types'
export default function ResetButton({handleReset,children}) {
  return (
    <div>
        <button onClick={handleReset}>{children}</button>
    </div>
  )
}

ResetButton.propTypes = {
    handleReset: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(Object)
}