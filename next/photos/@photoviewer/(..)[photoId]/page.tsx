/* photos/@viewer/(..)photos/[photod]/page.tsx */
import Modal from '@/components/Modal';
import Image from 'next/image';

export default async function PhotoInterceptor({
  params: { photoId },
}: {
  params: { photoId: string };
}) {
  console.log('photoId>>>', photoId);
  const photo = { url: '' + photoId, title: '' };
  return (
    <Modal>
      <div className='w-full'>
        <Image
          src={photo.url}
          alt={photo.title}
          width={600}
          height={600}
          priority
        />
        <div className='bg-white w-full'>
          <h1 className='text-lg'>{photo.title}</h1>
        </div>
      </div>
    </Modal>
  );
}
