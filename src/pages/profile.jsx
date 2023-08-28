import CardProfile from "../components/Fragments/CardProfile";
import { useEffect, useState } from "react";
import Contact from "../components/Fragments/Contact";

const profiles = [
  {
    id: 1,
    image: "/images/product-1.jpg",
    nickname: "Zaza",
    desc: "Zyrrex Web Developer Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 2,
    image: "/images/product-2.jpg",
    nickname: "Gracia",
    desc: "Grace Web Developer Lorem ipsum dolor sit amet consectetur",
  },
];

const ProfilePage = () => {
  const [contacts, setContacts] = useState([
    { id: 1, username: "zizi", telp: "07575325" },
    { id: 2, username: "gracia", telp: "01736472" },
    { id: 3, username: "chika", telp: "08364726" },
  ]);

  const handleDelete = (id) => {
    const filterContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filterContacts);
  };

  return (
    <div>
      {profiles.map((profile) => (
        <CardProfile key={profile.id}>
          <CardProfile.Profile image={profile.image}></CardProfile.Profile>
          <CardProfile.Description nickname={profile.nickname}>
            {profile.desc}
          </CardProfile.Description>
        </CardProfile>
      ))}
      <div>
        <Contact
          contacts={contacts}
          title="Contact"
          onDelete={handleDelete}
        ></Contact>
      </div>
    </div>
  );
};

export default ProfilePage;
