import { HomepageCounter } from '@containers/counter/HomepageCounter'
import Link from 'next/link'
// import Image from 'next/image'

/**
 * Homepage
 */
const HomePage = () => {
  return (
    <main>
      <h1>Hello, world!</h1>
      <Link href={'/reset'}>
        <a>reset page</a>
      </Link>
      <img
        src={require('@common/img/Biden_2.jpeg')}
        alt="Picture"
        width={500}
        height={500}
      />
      <HomepageCounter />
    </main>
  )
}

export default HomePage
