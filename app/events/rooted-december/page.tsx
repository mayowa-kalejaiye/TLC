
import { redirect } from 'next/navigation'

// Heart Room has ended — redirect visitors to the events listing
export default function RootedDecemberRedirect() {
  redirect('/events')
}
