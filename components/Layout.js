import Header from "./Header"

export default function Layout({ children }) {
  return (
    <div className="mx-5 py-5">
      <Header />
        <div>{children}</div>
    </div>
  )
}
