// list
import Image from 'next/image';
import Link from 'next/link';

type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const BASE_URL = 'https://jsonplaceholder.typicode.com';
async function getPhotos(albumId: number = 1): Promise<Photo[]> {
  const res = await fetch(`${BASE_URL}/photos?albumId=${albumId}`);
  return res.json();
}

const Photos = async () => {
  const photos = await getPhotos();

  const setAlbumId = async (formData: FormData) => {
    'use server';
    const albumId = formData.get('albumId');
    console.log('🚀  albumId:', albumId);
  };

  return (
    <>
      <h1 className='text-lg'>Photos</h1>
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
