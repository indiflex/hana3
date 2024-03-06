import Modal from '@/components/Modal';
import Photo from '@/components/Photo';

type Params = {
  params: { photoId: string };
};

// modal
export default function PhotoInterceptor({ params }: Params) {
  const { photoId } = params;
  return (
    <>
      <Modal className='bg-white'>
        <Photo photoId={Number(photoId)} />
      </Modal>
    </>
  );
}
