import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getPhotos } from '@/lib/album-utils';

type SearchParams = {
  searchParams: {
    albumId: string;
  };
};
const Photos = async ({ searchParams }: SearchParams) => {
  const { albumId } = searchParams;
  console.log('🚀  albumId:', albumId);
  const photos = await getPhotos(Number(albumId) || 1);

  const setAlbumId = async (formData: FormData) => {
    'use server';
    const albumId = formData.get('albumId');
    console.log('🚀  albumId:', albumId);
    redirect(`/photos?albumId=${albumId}`);
  };

  return (
    <>
      <h1 className='text-lg'>#{albumId}`s Photos</h1>
      <form action={setAlbumId}>
        <input type='number' name='albumId' placeholder='albumId...' />
        <button type='submit'>Set Album</button>
      </form>
      <div className='photos'>
        {photos.map(({ id, thumbnailUrl, title }) => (
          <Link key={id} href={`/photos/${id}`}>
            <Image src={thumbnailUrl} alt={title} width={150} height={150} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Photos;
