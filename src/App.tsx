import User from "./components/User";

export interface Bio {
  name: string;
  lastName: string;
  email: string;
  birthdate: string;
  gender?: "male" | "female";
}

function App() {
  const bio: Bio = {
    name: "Timur",
    lastName: "Bolotov",
    birthdate: "17-10-2000",
    email: "bolotovtmr@gmail.com",
    gender: "male",
  };

  return (
    <>
      <main className="p-8">
        <h1 className="text-gray-500 m-2">App.tsx</h1>
        <div className="container mx-auto px-8">
          {/* <User bio={bio} /> */}
          <User
            name={bio.name}
            lastName={bio.lastName}
            birthdate={bio.birthdate}
            email={bio.email}
            gender={bio.gender}
          />
        </div>
      </main>
    </>
  );
}

export default App;
