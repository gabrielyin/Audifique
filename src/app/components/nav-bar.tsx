export default function NavBar() {
  return (
    <div className="h-[70px] flex items-center justify-between max-w-[800px] mx-auto">
      <h1 className="text-3xl font-bold">TTS<span className="text-xs font-light">Audificando</span></h1>
    
      <nav>
        <button className="bg-black rounded-full text-white px-4 py-1">Login</button>
      </nav>
    </div>
  )
}