import 'bootstrap/dist/css/bootstrap.min.css'
import "~/styles/globals.css"

import { type AppType } from "next/app"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { api } from "~/utils/api"
import SSRProvider from 'react-bootstrap/SSRProvider'


const MyApp: AppType<{ session: Session | null }> = ({Component, pageProps: { session, ...pageProps }}) => (
  <SessionProvider session={session}>
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  </SessionProvider>
)

export default api.withTRPC(MyApp)
