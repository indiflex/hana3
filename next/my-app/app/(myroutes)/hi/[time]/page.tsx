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

export default function HiTime({ params }: Props) {
  const { time } = params;
  return <>Good {toUp(time)}!</>;
}
