import GuideImageCard from "./GuideImageCard";
export default function SupportTeamDisplay() {
  const teamDetails = [
    {
      name: "John Doe",
      position: "Developer",
      image: "https://source.unsplash.com/random/800x800",
    },
    {
      name: "Jane Doe",
      position: "Designer",
      image: "https://source.unsplash.com/random/800x900",
    },
    {
      name: "John Doe",
      position: "Developer",
      image: "https://picsum.photos/300",
    },
  ];
  return (
    <div className="container p-10">
      <h1 className="text-3xl font-bold text-center">OUR SUPPORTING TEAM</h1>
      <div className="mb-5 flex gap-5 md:gap-10 flex-col items-center md:flex-row md:justify-center">
        {teamDetails.map((person) => (
          <GuideImageCard details={person} />
        ))}
      </div>
    </div>
  );
}
