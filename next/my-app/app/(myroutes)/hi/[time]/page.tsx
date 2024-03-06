import { notFound } from 'next/navigation';

type Props = {
  params: { time: string };
};

const TIMES = ['morning', 'afternoon', 'evening'];

export async function generateStaticParams() {
  return TIMES.map((time) => ({
    time,
  }));
}

const toUp = (s: string) => [s[0].toUpperCase(), s.slice(1)].join('');

function ServerComp({ params }: Props) {
  return <>{JSON.stringify(params)}</>;
}

export default function HiTime({ params }: Props) {
  const { time } = params;
  if (!TIMES.includes(time)) return notFound();
  // redirect('/hi');

  return (
    <>
      Good {toUp(time)}!
      <ServerComp params={params} />
    </>
  );
}
