import PropTypes from 'prop-types'
export default function AccordionItem({ num, title, currOpen, onOpen, children }) {
  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = num === currOpen;
  //onClick={() => setIsOpen(currentValue => !currentValue)}

  function handleToggle(){
    onOpen(isOpen ? null : num);
  }
  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle} >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

AccordionItem.propTypes={
  num: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  currOpen: PropTypes.bool,
  onOpen: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(Object)
}