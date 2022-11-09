import Head from "next/head"

import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import PreviousRulings from "../components/PreviousRulings"
import PromotionalBanner from "../components/PromotionalBanner"
import Separator from "../components/Separator"
import SubmissionBanner from "../components/SubmissionBanner"

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Rule of Thumb</title>
      </Head>
      <Navbar />
      <Header />
      <div className="max-centered">
        <PromotionalBanner />
        <main role="main">
          <PreviousRulings />
        </main>
        <SubmissionBanner />
        <Separator />
        <Footer />
      </div>
    </div>
  )
}

export default IndexPage
