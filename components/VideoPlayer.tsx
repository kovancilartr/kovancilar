export const VideoPlayer = ({ url }: { url: string }) => {
  if (!url) return <div>Video yükleniyor...</div>;

  return (
    <div className="relative w-1/2">
      <div className="aspect-video">
        <iframe
          src={url}
          title="Video"
          allow="autoplay; fullscreen; picture-in-picture speed=1.0"
          loading="lazy"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
