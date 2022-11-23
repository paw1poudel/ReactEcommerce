import React from 'react'
import { useRef } from 'react'
import { forwardRef } from 'react'
import { AiOutlineClose } from "react-icons/ai"
import { toast, ToastContainer } from 'react-toastify'

const Report = forwardRef((props, ref) => {
  const textref = useRef()

  function closeModel(e) {
    e.preventDefault()
    textref.current.value = ""
    toast.success("Reported Succesfully!", {
      autoClose: 1000
    })
    props.close()

  }
  return (
    <>
      <dialog ref={ref}>
        <AiOutlineClose className="close-model" onClick={props.close} />
        <h3>Report Product</h3>
        <form onSubmit={closeModel}>
          <textarea ref={textref} name="report-message" required id="" cols="30" rows="10" placeholder='Write Your Report' spellCheck="false" autoComplete='off' autoCapitalize='true' />
          <br />
          <button>SUBMIT</button>
        </form>
      </dialog>
      <ToastContainer />

    </>

  )
})



export default Report