import "./App.css";
import Hero from "./components/Description";
import ImageCard from "./components/TeamImageCard";
import GuidesDisplay from "./components/GuidesDisplay";
import SupportTeamDisplay from "./components/SupportTeamDisplay";

function App() {
  const teamDetails = [
    {
      name: "John Doe",
      position: "Developer",
      email: "joey@gmail.com",
      image: "https://source.unsplash.com/random/850x850?portrait",
      desc: "I am a developer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit distinctio possimus sit quas! Maiores quasi odit cumque labore velit inventore, quisquam, unde ipsa dicta dolore doloribus itaque consequuntur. Voluptates, tempora.",
    },
    {
      name: "Jane Doe",
      position: "Marketing Specialist",
      email: "joey@gmail.com",
      image: "https://source.unsplash.com/random/900x950?portrait",
      desc: "I am a developer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit distinctio possimus sit quas! Maiores quasi odit cumque labore velit inventore, quisquam, unde ipsa dicta dolore doloribus itaque consequuntur. Voluptates, tempora.",
    },
    {
      name: "Ram prasad ",
      position: "CEO and Adventure Expert",
      email: "joey@gmail.com",
      image: "https://source.unsplash.com/random/900x900?portrait",
      desc: "I am a developer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit distinctio possimus sit quas! Maiores quasi odit cumque labore velit inventore, quisquam, unde ipsa dicta dolore doloribus itaque consequuntur. Voluptates, tempora.",
    },
  ];
  return (
    <div className="flex flex-col items-center m-0">
      <div className="m-0 p-10">
        <Hero />
      </div>
      <div className="container p-10 md:w-10/12">
        <div className="mb-5 flex gap-5 md:gap-10 flex-col items-center md:flex-row md:justify-between">
          {teamDetails.map((person) => (
            <ImageCard details={person} />
          ))}
        </div>
      </div>
      <div className="ml-0 w-full mt-5 pt-3">
        <GuidesDisplay />
      </div>
      <div className="ml-0 w-full mt-5 pt-3">
        <SupportTeamDisplay />
      </div>
    </div>
  );
}

export default App;
