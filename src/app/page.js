import Link from 'next/link';
import Counter from '@/components/counter';
import GreetingForm from '@/components/GreetingForm';
import CounterWithLog from '@/components/CounterWithLog';
import TickTimer from '@/components/TickTimer';
import TimerToggle from '@/components/TimerToggle';




export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Witaj na naszej stronie głównej!</h1>
      <p>To jest pierwsza strona stworzona w Next.js z App Routerem.</p>
      <Link href="/about">Przejdź do strony O nas</Link>
          {/* ...pozostała zawartość strony... */}
      <Counter></Counter>
      <CounterWithLog></CounterWithLog>
      <GreetingForm></GreetingForm>
      <TimerToggle />
    </main>
  )
}
