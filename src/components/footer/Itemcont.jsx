import React, { useId } from 'react'
import Item from './Item'
import { support,Company,Icons,blogers } from './Menu'

function Itemcont() {
  return (
    <div className='grid grid-col-1 sm:grid-cols-3 md:grid-cols-4  w-full   md:ml-32'>
      
        <Item title="Top bloggers" paths={blogers} id={5} /> 
     <Item title="Support" paths={support}  id={4}/> 
     <Item title="Company" paths={Company}  id={3} />
     <Item title="Socials" paths={Icons}  id={2} /> 
       

    </div>
  )
}

export default Itemcont
