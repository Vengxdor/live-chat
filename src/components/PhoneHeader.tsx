import {  Battery, ConnectionBars, Wifi } from '../Icons'

function PhoneHeader() {
  return (
    <header className="w-full rounded-t-3xl bg-gray-400 backdrop-blur-xl">
      <div className="flex items-center justify-between p-1.5 px-3">
        <span className="font-semibold">6:09</span>
        <span className="h-6 w-24 rounded-3xl bg-black"></span>
        <span className="flex gap-1">
          <ConnectionBars />
          <Wifi />
          <Battery />
        </span>
      </div>
    </header>
  )
}

export default PhoneHeader
