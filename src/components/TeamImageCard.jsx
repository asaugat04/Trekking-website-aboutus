export default function ImageCard({ details }) {
  return (
    <div className="min-w-[100px] md:min-w-[200px] max-w-1/5 md:w-3/5 px-10 md:px-0 md:w-full md:w-autos overflow-hidden flex flex-col items-center">
      <img
        className="rounded w-full aspect-image max-h-[260px] object-cover"
        src={details.image}
        alt=""
      />
      <div className="Details bg-white w-full text-center">
        <h1 className=" px-2 mb-1 text-xl break-words text-yellow-600 font-bold mt-2 uppercase">
          {details.name}
        </h1>

        <em>{details?.position}</em>
        <h3 className=" text-xl text-yellow-600 ">
          <a href={`mailto:${details.email}`}>{details?.email}</a>
        </h3>
        <p className="text-center">{details?.desc}</p>
      </div>
    </div>
  );
}
