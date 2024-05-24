function PhoneButtons() {
  return (
    <>
      <div className="absolute -left-1 top-32 z-10 flex flex-col gap-0.5">
        <span className="h-8 w-1 rounded-l-xl bg-zinc-700"></span>
        <span className="h-8 w-1 rounded-l-xl bg-zinc-700"></span>
      </div>
      <div className="absolute -right-1 top-32 z-10 flex h-14 w-1 flex-col gap-0.5 rounded-r-xl bg-zinc-700"></div>
      <div className="pointer-events-none absolute inset-0 flex size-full items-end justify-center pb-3">
        <span className="h-1 w-32 rounded-xl bg-white "></span>
      </div>
    </>
  )
}

export default PhoneButtons
