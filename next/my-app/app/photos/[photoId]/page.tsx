export default function PhotoDetail({
  params,
}: {
  params: { photoId: string };
}) {
  return <>{params.photoId}</>;
}
