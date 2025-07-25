export default function AvatarLogo({ className = "", child, url, onClick }) {
  return (

    <div onClick={onClick}>
      <div className="h-9 w-9 rounded-full relative cursor-pointer">
        <img src={url} alt="avatar" className="h-9 w-9 rounded-full object-cover" />
        {child}
      </div>
    </div>
  )
}