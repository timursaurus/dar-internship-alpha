import { Bio } from "../App";

// User(props: { bio: Bio })

function User(props: Bio) {
  return (
    <>
      <div className="border bg-gray-50 shadow-sm border-gray-100 rounded-lg">
        <span className="text-gray-500 block m-2">User.tsx</span>
        <div className="p-8">
          <h2 className="text-3xl font-semibold">
            {props.name} {props.lastName}
          </h2>
          <br />
          <div className="px-2 text-gray-900">
            <a
              className="text-blue-500 hover:(text-blue-600 underline) duration-100"
              href={`mailto:${props.email}`}
            >
              {props.email}
            </a>
            <p> {props.birthdate} </p>
            <p> {props.gender} </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
