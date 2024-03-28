export function TypographyH3(props: { children: string; className?: string }) {
  return (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${props.className}`}
    >
      {props.children}
    </h3>
  )
}
