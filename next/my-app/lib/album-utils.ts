export type PhotoType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const BASE_URL = 'https://jsonplaceholder.typicode.com';
export async function getPhotos(albumId: number = 1): Promise<PhotoType[]> {
  const res = await fetch(`${BASE_URL}/photos?albumId=${albumId}`);
  return res.json();
}

export async function getPhoto(photoId: number): Promise<PhotoType> {
  const res = await fetch(`${BASE_URL}/photos/${photoId}`);
  return res.json();
}
