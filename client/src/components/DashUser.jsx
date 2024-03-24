import { Button, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";

export const DashUser = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="w-full max-w-lg p-3 mx-auto">
      <h1 className="self-center text-3xl font-semibold text-center py-7">
        Profile
      </h1>
      <form action="" className="flex flex-col gap-4">
        <div className="self-center w-32 h-32 overflow-hidden rounded-full shadow-md">
          <img
            src={currentUser.profilePicture}
            alt="user-pic"
            className="object-cover w-full h-full border-4 rounded-full border-stone-300"
          />
        </div>
        <TextInput
          placeholder="username"
          type="text"
          id="username"
          defaultValue={currentUser.username}
        />
        <TextInput
          placeholder="email"
          type="email"
          id="email"
          defaultValue={currentUser.email}
        />
        <TextInput
          placeholder="********"
          type="password"
          id="password"
          defaultValue="********"
        />
        <Button type="submit" gradientDuoTone="purpleToPink" color="dark">
          Update
        </Button>

        <Button color="warning">Signout</Button>

        <Button color="red">Delete Account</Button>
      </form>
    </div>
  );
};
