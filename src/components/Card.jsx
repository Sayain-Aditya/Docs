import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"


function Card({data, refrence}) {
  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{scale: 1.2}} dragElastic={0.2} dragTransition={{bounceStiffness: 200, bounceDamping: 10}} className=" flex-shrink-0 relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden"> 
    <FaRegFileAlt />
    <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
    <div className="Footer absolute bottom-0 left-0 w-full ">
        <div className="flex items-center justify-between mb-3 py-3 px-8">
            <h5>{data.filesize}</h5>
            <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoIosClose /> : <FaDownload size=".7em" color="#fff"/>}
            </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
          <h3 className="text-sm font-semibold">{data.tag.tagTittle}</h3>
      </div>
        )}
        
    </div>
    </motion.div>
  )
}

export default Card