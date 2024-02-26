import { PropsWithChildren } from "react"

interface PageProps {
  title: string
}
function Page({ children }: PropsWithChildren<PageProps>) {
  return (
    <div id="page">
      <h1 style={{ fontSize: 21, fontWeight: 700 }}></h1>
      {children}</div>
  )
}

export default Page