// Zooms in icons in the navbar as the default padding is meant for text



export default function({children}:{children: React.ReactNode}) {
  return <span style={{transform: 'scale(1.2)'}}>{children}</span>
}