import { Dialog, Transition } from '@headlessui/react'
import React from 'react'

const Modal = (props) => {
  
    const {isOpen, onClose, children, className} = props

    return (
    <>
        <Transition show={isOpen} className='overflow-hidden'>
            <Dialog as="div" className='fixed inset-0 z-10' onClose={onClose}>
                <div className='flex bg-black bg-opacity-50 fixed inset-0 w-full h-full justify-center items-center'>
                    <Transition.Child
                        as={React.Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'
                    >
                        <Dialog.Panel className={`bg-white rounded-lg shadow-lg flex flex-col p-5 z-20 ${className}`}>
                            {children}
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    </>
  )
}

export default Modal