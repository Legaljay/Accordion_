import { useState } from "react";
import AccordionItem from "../components/AccordionItem"

import PropTypes from 'prop-types'
export default function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null)
  return (
    <div className="accordion">
      {data.map((el, index) => 
      <AccordionItem
        key={el.title}
        title={el.title}
        num={index}
        currOpen={currOpen}
        onOpen={setCurrOpen}
      >
        {el.text}
      </AccordionItem>
      )}
    </div>
  );
}

Accordion.propTypes={
  data: PropTypes.arrayOf(Object)
}