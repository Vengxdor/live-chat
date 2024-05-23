import { useState } from 'react'
import SignOut from './SignOut'
import { addDoc, collection, limit, orderBy, query } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { ArrowUp, Battery, ConnectionBars, Wifi } from '../Icons'

function LiveChat() {
  const [user] = useAuthState(auth)

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
      uid: user?.uid
    })
    setNewMessage('')
  }
  return (
    <section className="flex h-[700px] min-w-96 flex-col rounded-3xl bg-black ">
      <header className="w-full rounded-t-3xl bg-gray-400 backdrop-blur-xl">
        <div className="flex items-center justify-between p-1.5 px-3">
          <span className="font-semibold">6:09</span>
          <span className="h-6 w-24 rounded-3xl bg-black "></span>
          <span className="flex gap-1">
            <ConnectionBars />
            <Wifi />
            <Battery />
          </span>
        </div>
        <div>
          <SignOut />
        </div>
      </header>
      <main className="relative h-full p-6">
        <ul>
          {messages &&
            messages.map((message) => (
              <li
                className={`${user?.uid === message.uid ? 'text-green-400' : 'text-blue-500'}`}
                key={message.createdAt}
              >
                {message.text}
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
              type="text"
            />

            {newMessage.length !== 0 && (
              <button className="m-1.5 rounded-full bg-blue-600 p-1.5 transition-colors duration-300 hover:bg-blue-500">
                <ArrowUp />
              </button>
            )}
          </form>
        </div>
        {/* phone buttons */}
        <div className="absolute -left-1 top-32 z-10 flex flex-col gap-0.5">
          <span className="h-8 w-1 rounded-l-xl bg-zinc-700"></span>
          <span className="h-8 w-1 rounded-l-xl bg-zinc-700"></span>
        </div>
        <div className="absolute -right-1 top-32 z-10 flex h-14 w-1 flex-col gap-0.5 rounded-r-xl bg-zinc-700"></div>
        <div className="pointer-events-none absolute inset-0 flex size-full items-end justify-center pb-3">
          <span className="h-1 w-32 rounded-xl bg-white "></span>
        </div>
      </main>
    </section>
  )
}

export default LiveChat
