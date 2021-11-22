/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react/cjs/react.development'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDown({options, selected, setSelected}) {

  const [show, setShow] = useState(false);

  console.log(options, selected);

  if (options) {
    return (
      <div as="div" className="relative inline-block text-left w-full">
        <div>
          <div onClick={e => (setShow(true))} className="cursor-pointer inline-flex justify-between items-center w-full h-12 rounded border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium hover:bg-gray-50 focus:outline-none">
            <div >{selected ? selected : ""}</div>
            <FontAwesomeIcon icon={faChevronDown} className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </div>
        </div>
  
        <Transition
          as={Fragment}
          enter="transition ease-linear duration-50"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-linear duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          show={show}
        >
          <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {options.map(option => {
                return (
                
                  <div key={option.name}
                    onClick={e => (setSelected(option.name, setShow(false)))}  className={"cursor-pointer pl-5"}>
                    {option.name}
                   
                  </div>
                )
              })}
            </div>
          </div>
        </Transition>
      </div>
    )
  } else {
    return (<></>)
  }
  
}