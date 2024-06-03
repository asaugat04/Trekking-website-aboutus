import bgImage from "../assets/background.jpg";
import GuideImageCard from "./GuideImageCard";

export default function GuidesDisplay() {
  const guideDetails = [
    {
      name: "John Doe",
      position: "Developer",
      image: "https://source.unsplash.com/random/800x800",
    },
    {
      name: "John Doe",
      position: "Developer",
      image: "https://source.unsplash.com/random/800x800?sig=1",
    },
    {
      name: "Jane Doe",
      position: "Developer",
      image: "https://source.unsplash.com/random/800x800?sig=2",
    },
    {
      name: "John cena",
      position: "Developer",
      image: "https://source.unsplash.com/random/800x800?sig=3",
    },
    {
      name: "John Doe",
      position: "Developer",
      image: "https://source.unsplash.com/random/800x800?sig=4",
    },
  ];
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className="m-0 w-full bg-fixed bg-cover bg-fixed bg-center bg-no-repeat m-0 flex flex-col items-center "
    >
      <div className="bar rounded-b-lg m-auto w-4/5 bg-yellow-600 h-[10px]"></div>
      <div className="container w-full md:w-10/12">
        <h1 className="text-yellow-600 text-4xl uppercase p-8 pl-4 font-bold ml-10">
          Our guides
        </h1>
        <div className="w-full flex flex-row justify-center gap-5 flex-wrap">
          {guideDetails.map((person) => (
            <GuideImageCard details={person} />
          ))}
        </div>
      </div>
      <div className="bar rounded-t-lg m-auto w-4/5 bg-yellow-600 h-[10px]"></div>
    </div>
  );
}
