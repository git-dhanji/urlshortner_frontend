export default function AvatarLogo({ className = "", child, url, onClick, premiumUser }) {
  return (

    <div onClick={onClick} className={`${premiumUser ? 'border-amber-400 border-2 rounded-full' : ""}`}>
      <div className="h-9 w-9 rounded-full relative cursor-pointer">
        <img src={url} alt="avatar" className="h-9 w-9 rounded-full object-cover" />
        {child}
      </div>
    </div>
  )
}