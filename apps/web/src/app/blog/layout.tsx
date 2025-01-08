export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      i am layout in blog
      {children}
    </section>
  )
}
