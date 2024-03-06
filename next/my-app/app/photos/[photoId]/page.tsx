import Photo from '@/components/Photo';
import Link from 'next/link';

export default function PhotoDetail({
  params,
}: {
  params: { photoId: string };
}) {
  const { photoId } = params;
  return (
    <>
      <Photo photoId={Number(photoId)} />
      <Link href='/photos'>Photos</Link>
    </>
  );
}
