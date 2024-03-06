/* photos/page.tsx */
import Image from 'next/image';
import Link from 'next/link';
import { store } from '@/lib/store';

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export const getPhotos = async (albumId: number = 1): Promise<Photo[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
    {}
  );

  return res.json();
};

export default async function Photos() {
  const photos = await getPhotos();
  return (
    <>
      <form
        action={(formData: FormData) => {
          'use server';
          store.todoId = Number(formData.get('id'));
        }}
      >
        <input name='id' type='text' />
      </form>
      <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-5'>
        {photos.map((photo) => (
          <Link
            key={photo.id}
            href={`/photos/${photo.id}`}
            className='hover:opacity-70'
            scroll={false}
          >
            <Image
              src={photo.thumbnailUrl}
              alt={photo.title}
              width={150}
              height={150}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
