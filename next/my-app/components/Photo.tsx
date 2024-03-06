import Image from 'next/image';
import { getPhoto } from '@/lib/album-utils';

export default async function Photo({ photoId }: { photoId: number }) {
  const { title, url } = await getPhoto(photoId);
  return (
    <>
      <div>
        <Image
          src={url}
          alt={title}
          width={600}
          height={600}
          quality={50}
          priority={true}
        />
        <h1 className='text-lg font-bold'>{title}</h1>
        <h3>{url}</h3>
      </div>
    </>
  );
}
