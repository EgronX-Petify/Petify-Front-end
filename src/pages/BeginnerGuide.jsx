import React from "react";
import BeginnerHero from "../components/beginner-guide-components/BeginnerHero";
import dog from "../public/beginner-media/dog.png";

const BeginnerGuide = () => {
  const pets = [
    {
      id: 1,
      type: "Cat",
      photo: "src/public/beginner-media/sora.png",
    },
    {
      id: 2,
      type: "Hamster",
      photo: "src/public/beginner-media/hamster.png",
    },
    {
      id: 3,
      type: "Dog",
      photo: "src/public/beginner-media/dog.png",
    },
    {
      id: 4,
      type: "Parrot",
      photo: "src/public/beginner-media/parrot.png",
    },
    {
      id: 5,
      type: "Rabbit",
      photo: "src/public/beginner-media/rabbit.png",
    },
    {
      id: 6,
      type: "Turtle",
      photo: "src/public/beginner-media/turtle.png",
    },
  ];
  const petAges = [
    {
      id: 1,
      age: "Puppy/Kitten(0-1 year)",
      needs: "Needs more training, frequent feeding, and vaccinations",
    },
    {
      id: 2,
      age: "Adult(1-7 years)",
      needs: "Balanced diet, regular vet checkups, active play.",
    },
    {
      id: 3,
      age: "Aged (7+ years)",
      needs: "Softer food, gentler exercise, more health monitoring.",
    },
  ];
  const supportStages = [
    {
      id: 1,
      stage: "Vet Visits",
      description: "health checks & vaccines",
    },
    {
      id: 2,
      stage: "Grooming",
      description: "fur care, bathing, nail trimming",
    },
    {
      id: 3,
      stage: "Training",
      description: "obedience & behavior",
    },
    {
      id: 4,
      stage: "Pet Suppliers",
      description: "food, medicine, toys",
    },
    {
      id: 5,
      stage: "Pet Sitting",
      description: "when you travel",
    },
  ];
  const petCareGuides = [
    {
      id: 1,
      title: "Protection Comes First",
      text: "Core vaccines protect against dangerous diseases. Puppies and kittens get a series of shots in the first months, then annual boosters. Always consult your vet for the right schedule.",
      photo:
        "src/public/beginner-media/pexels-tahir-x-lf-2153788153-33394308.jpg",
    },
    {
      id: 2,
      title: "Clean Pet, Happy Pet",
      text: "Brush fur, trim nails, bathe when needed, and clean ears. Grooming prevents infections and keeps pets comfortable.",
      photo: "src/public/beginner-media/pexels-goochie-poochie-19145890.jpg",
    },
    {
      id: 3,
      title: "Healthy Body, Happy Mind",
      text: "Walks, toys, and training keep pets fit and prevent boredom. Different pets have different activity needs — know yours!",
      photo: "src/public/beginner-media/pexels-helen1-16395147.jpg",
    },
    {
      id: 4,
      title: "Love is the Best Care",
      text: "Spend quality time, learn your pet’s body language, and create a safe environment. A happy pet is a healthy pet.",
      photo: "/images/love.jpg",
    },
  ];

  return (
    <div className="w-full">
      <BeginnerHero />
      {/* about us */}
      <div className="flex flex-col w-[80%] m-auto p-10 gap-4">
        <p className="text-[#FD7E14] capitalize text-4xl font-semibold">
          about petify
        </p>
        <div className="flex justify-between text-[#2F4156]">
          <div className="w-[40%] text-xs">
            Petify is a one-stop digital hub designed to make pet care simple,
            reliable, and stress-free. From booking veterinary visits and
            grooming sessions to arranging training programs and safe boarding,
            Petify connects pet owners with trusted service providers all in one
            place. With a focus on convenience and quality, our platform ensures
            that every pet receives the care, love, and attention they deserve —
            anytime, anywhere.
          </div>
          <div className="w-[40%] text-xs">
            At Petify, we believe pets are family. That’s why we go beyond just
            appointments — we empower owners with tools to manage their pets’
            daily needs, access verified providers, and explore tailored
            services that match their lifestyle. Whether it’s keeping your furry
            friend healthy, looking their best after grooming, learning new
            tricks through training, or finding a safe and caring place while
            you’re away, Petify is here to make every step easier.
          </div>
        </div>
        <button className="flex w-fit px-5 py-2 align-middle rounded-[10px] bg-[#2F4156] text-[#F5EFED] font-semibold cursor-pointer">
          Get Started
        </button>
      </div>
      {/* unique type */}
      <div className="flex flex-col items-center p-10 gap-4 bg-[#F8F9FA] ">
        <div className="flex flex-col items-start gap-1">
          <p className="text-[#2F4156] capitalize text-4xl font-semibold">
            every pet is unique
          </p>
          <p className="text-[#2F4156]  text-xs">
            Dogs, cats, birds, rabbits — each has different needs. Consider your
            lifestyle, home space, and budget before choosing.
          </p>
        </div>
        <div className="flex">
          {pets.map((pet, id) => (
            <div
              className="flex flex-col flex-wrap items-center gap-1"
              key={id}
            >
              <div className="w-[200px] h-[200px] overflow-hidden flex items-center">
                <img
                  src={pet.photo}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[#2F4156] font-semibold">{pet.type}</div>
            </div>
          ))}
        </div>
      </div>
      {/* ages */}
      <div className="flex p-9">
        <div className="flex flex-col w-full">
          <p className="text-[#FD7E14] capitalize text-4xl font-semibold">
            know their age, know their needs
          </p>
          <div className="flex flex-col items-start gap-8 pl-15 py-5">
            {petAges.map((age, id) => (
              <div className="flex flex-col gap-2">
                <p className="text-[#2F4156] font-semibold text-xl">
                  {age.age}
                </p>
                <p className="text-[#2F4156] text-sm pl-1">{age.needs}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[1000px] h-[400px] overflow-hidden flex items-center">
          <img
            src="src\public\beginner-media\pexels-helen1-16395151.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* food */}
      <div className="flex justify-center  px-[70px] py-[30px]">
        <div className="w-[550px] h-[400px] overflow-hidden flex items-center">
          <img
            src="src\public\beginner-media\pexels-enginakyurt-1437465.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-2 px-[50px] w-[37%]">
          <h5 className="text-[#2F4156] font-semibold text-3xl capitalize">
            Food is health
          </h5>
          <p className="text-[#2f415677]">
            Give age-appropriate food, fresh water daily, and avoid human junk
            food. Dogs and cats need protein-rich diets; birds need seeds and
            fresh greens.
          </p>
        </div>
      </div>

      {/* guide1 need edits */}
      <div className="flex gap-15 flex-wrap justify-between bg-[#F8F9FA]">
        {petCareGuides.map((guide, id) => (
          <div className="flex flex-col p-14 w-[300px]" key={id}>
            <div className="w-[300px] h-[300px] overflow-hidden">
              <img
                src={guide.photo}
                alt=""
                className="w-full h-full object-cover "
              />
            </div>
            <div className="text-[#2F4156] text-2xl">{guide.title}</div>
            <p className="text-[#2f415677]">{guide.text}</p>
          </div>
        ))}
      </div>

      {/* family */}
      <div className="flex py-10 pl-10 w-[85%] m-auto items-center">
        <div className="flex flex-col w-fit gap-3">
          <p className="text-[#FD7E14] text-4xl font-semibold">
            Pets are more than companions, they are family.
          </p>
          <p className="text-[#2F4156] w-[60%]">
            They bring joy, comfort, and unconditional love into our lives,
            teaching us responsibility, patience, and empathy. Caring for a pet
            can reduce stress, boost happiness, and even improve our physical
            health through play and daily routines. Whether it’s the wag of a
            dog’s tail, the gentle purr of a cat, or the cheerful chirp of a
            bird, pets remind us to slow down, be present, and appreciate life’s
            simple moments.
          </p>
        </div>
        <div className="w-[520px] h-[320px] overflow-hidden">
          <img
            src="src\public\beginner-media\image (4).png"
            alt=""
            className="w-full h-full object-cover "
          />
        </div>
      </div>
      {/* guide2 */}

      {/* support */}
      <div className="flex flex-col items-center p-10 gap-8 ">
        <p className="text-[#FD7E14] capitalize text-4xl font-semibold">
          support for every stage
        </p>
        <div className="flex flex-wrap gap-7 items-center">
          {supportStages.map((stage, id) => (
            <div className="flex flex-col items-center gap-1 px-2" key={id}>
              <p className="text-[#2F4156] font-semibold text-2xl">
                {stage.stage}
              </p>
              <p className="text-[#2f415677]">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* video */}
      <div className="flex flex-col items-center p-10 gap-8">
        <div className="w-[60%] h-[400px]">
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/peUVLEUj-AM"
            title="Owning a Dog - Things to Know Before Getting a Puppy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BeginnerGuide;
