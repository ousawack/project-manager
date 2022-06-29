import blankAvatar from "../images/blankavatar.jpg"

const AvatarDisplay = ( {ticket} ) => {
  return (
    <div className="avatar-container flex justify-center w-56 bg-gray-200 mr-2 p-2">
      <div className="img-container rounded-full h-16 w-16 overflow-hidden">
        <img className="w-100" src={ticket.avatar ? ticket.avatar : blankAvatar} alt={"photo of" + ticket.owner} />
      </div>
    </div>
  )
}

export default AvatarDisplay