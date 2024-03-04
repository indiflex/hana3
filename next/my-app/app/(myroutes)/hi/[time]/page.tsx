type Props = {
  params: { time: string };
};
export default function HiTime({ params }: Props) {
  const { time } = params;
  return <>Good {time}!</>;
}
