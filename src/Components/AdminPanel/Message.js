import React from 'react'

const Message = () => {
  return (
    <div>
      <div>
          <form>
              <label>message</label>
              <input
              
              name='message'
              id='message'
              placeholder='message'/>
              <label>number</label>
              <input
              name='number'
              id='number'
              placeholder='number'/>
              <label>subject</label>
              <input
              name='subject'
              id='subject'
              placeholder='subject'/>
              <button>send</button>
          </form>
      </div>
    </div>
  )
}

export default Message
