export default function GuideImageCard({ details }) {
  return (
    <div className="flex w-full my-3 mx-10 md:w-auto flex-col items-center">
      <img
        className={
          "rounded w-4/5 md:w-full aspect-image max-h-[260px] object-cover"
        }
        src={details.image}
        alt=""
      />
      <div className="Details bg-white w-full p-3 text-center">
        <h1 className="  mb-1 text-xl break-words text-yellow-600 font-bold mt-2 uppercase">
          {details.name}
        </h1>
        <>{details?.position}</>
      </div>
    </div>
  );
}
