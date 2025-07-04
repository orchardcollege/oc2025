
const PropsCard = ({actorName, actorCharacter, actorAge}) => {
  return (
    <div className="flex flex-col rounded shadow-amber-300 shadow-2xl">
        <h2 className="text-amber-100">{actorName ? actorName + "😍" : "no name 😒"}</h2>
        <h2 className="text-amber-100">{actorName +"😍" || "no name 😒"}</h2>
        <p>{actorCharacter}</p>
        <p>{actorAge >= 18 ? "you are an adult: " + actorAge : "can't access, underage"}</p>
    </div>
  )
}

export default PropsCard