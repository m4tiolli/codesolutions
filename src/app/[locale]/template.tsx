import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="px-[10vw] py-[5vh] min-h-[80dvh] pb-[5dvh] relative z-10 flex flex-col items-start justify-start gap-12 scroll-smooth">
        {children}
      </main>
      <Footer />
    </>
  )
}