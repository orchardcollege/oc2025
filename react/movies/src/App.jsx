import './App.css'
import PropsCard from './PropsCard'


function App() {

  return (
    <>
      <h1 className='font-bold'>App react vite tailwindcss</h1>
      <p className='text-xl p-3 text-amber-50 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dolor ut minima cum consequuntur obcaecati architecto ad dignissimos? Nulla, eius? Illo suscipit distinctio soluta culpa facere fugiat iure saepe quia!</p>
      <h2 className="text-red-500">If this is red, Tailwind works</h2>
      <PropsCard actorName="Tom" actorCharacter="Man" actorAge="15" />
      <PropsCard actorName="Isabella" actorCharacter="AI" actorAge="24" />
      <PropsCard actorName="" actorCharacter="Advanced" actorAge="35" />
      
    </>
  )
}

export default App
