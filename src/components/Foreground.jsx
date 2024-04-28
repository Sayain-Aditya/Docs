import React, { useRef, useState } from 'react'
import Card from './Card'


function Foreground() {
  const ref = useRef(null);
    const data = [
        {
          desc: "This is the Background.", 
          filesize:".9mb", 
          close: true, 
          tag: {isOpen: true, tagTittle: "Download Now",tagColor: "green"},
        },
        {
          desc: "This is the Background.", 
          filesize:".9mb", 
          close: true, 
          tag: {isOpen: false, tagTittle: "Download Now",tagColor: "green"},
        },
        {
          desc: "This is the Background.", 
          filesize:".9mb", 
          close: false, 
          tag: {isOpen: true, tagTittle: "Upload",tagColor: "green"},
        },
      ];
    useState() 
  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item, index)=>(
          <Card data={item} refrence = {ref} />
))}

    </div>
  )
}

export default Foreground