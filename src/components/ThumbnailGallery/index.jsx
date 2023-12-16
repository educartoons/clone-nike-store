export default function ThumbnailGallery(props) {
  const { thumbnail, index, onHover, current } = props;

  return (
    <div
      onMouseEnter={() => {
        onHover(index);
      }}
      className="relative w-[60px] h-[60px] bg-zinc-100 rounded-md mb-2"
    >
      <div>
        <img src={thumbnail} alt="" />
      </div>
      <div
        className={
          current === index
            ? "absolute top-0 left-0 bottom-0 w-full bg-black opacity-20 rounded-md"
            : null
        }
      ></div>
    </div>
  );
}
