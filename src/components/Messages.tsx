import { addDoc, collection, limit, orderBy, query } from 'firebase/firestore'
import { useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { ArrowUp } from '../Icons'
import { db } from '../firebase'
import { User } from 'firebase/auth'
import SignOut from './SignOut'

type Props = {
  user: User
}

function Messages({ user }: Props) {
  const [newMessage, setNewMessage] = useState('')

  const messageRef = collection(db, 'messages')
  const q = query(messageRef, orderBy('createdAt'), limit(25))

  const [messages] = useCollectionData(q)

  const handleCreateMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(newMessage)
    await addDoc(messageRef, {
      text: newMessage,
      createdAt: new Date(),
      uid: user?.uid,
      photo: user?.photoURL
    })
    setNewMessage('')
  }
  return (
    <>
      <SignOut />
      <ul className="grid gap-2">
        {messages &&
          messages.map((message) => (
            <li
              className={`flex items-center gap-2 ${user?.uid === message.uid ? 'sent' : 'received'}`}
              key={message.createdAt}
            >
              <img className="size-7 rounded-full" src={message.photo} alt="" />
              <p className="rounded-3xl p-2 px-3">{message.text}</p>
            </li>
          ))}
      </ul>
      <div className="absolute inset-0 flex size-full items-end justify-center pb-10">
        <form
          className="flex items-center rounded-2xl border border-white/10"
          onSubmit={handleCreateMessage}
        >
          <input
            className="ml-2 bg-transparent p-2 px-3.5 outline-none"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="eMessage..."
            type="text"
          />

          <button
            className={`m-1.5 rounded-full bg-blue-600 p-1.5 transition duration-300 hover:bg-blue-500  ${newMessage.length !== 0 ? 'visible opacity-100' : 'invisible opacity-0'}`}
          >
            <ArrowUp />
          </button>
        </form>
      </div>
    </>
  )
}

export default Messages
