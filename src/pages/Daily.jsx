import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
// import { Symbol } from './Symbol'

export default function Stock() {


    const { Symbol } = useParams()

  return (
    <div>
      <Navbar />
      Daily
    </div>
  )
}
