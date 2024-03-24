import { Alert, Button, TextInput } from "flowbite-react";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export const DashUser = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const filePickerRef = useRef();
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };
  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  const uploadImage = async () => {
    // service firebase.storage {
    //   match /b/{bucket}/o {
    //     match /{allPaths=**} {
    //       allow read;
    //       allow write: if
    //       request.resource.size < 2 * 1024 * 1024 &&
    //       request.resource.contentType.matches('image/.*')
    //     }
    //   }
    // }
    setImageFileUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setImageFileUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError(
          "Could not upload image (File must be less than 2MB)"
        );
        setImageFileUploadProgress(null);
        setImageFile(null);
        setImageFileUrl(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
        });
      }
    );
  };

  return (
    <div className="w-full max-w-lg p-3 mx-auto">
      <h1 className="self-center text-3xl font-semibold text-center py-7">
        Profile
      </h1>

      <form action="" className="flex flex-col gap-4">
        <input
          type="file"
          accept="image/*"
          name="profilePicInput"
          id="profilePicInput"
          onChange={handlePhotoChange}
          ref={filePickerRef}
          hidden
        />
        <div
          onClick={() => filePickerRef.current.click()}
          className="relative self-center w-32 h-32 overflow-hidden rounded-full shadow-md cursor-pointer "
        >
          {imageFileUploadProgress && (
            <CircularProgressbar
              value={imageFileUploadProgress || 0}
              text={`%${imageFileUploadProgress}`}
              strokeWidth={5}
              styles={{
                root: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                path: {
                  stroke: `#4f46e5`,
                },
              }}
            />
          )}
          <img
            src={imageFileUrl || currentUser.profilePicture}
            alt="user-pic"
            className={`object-cover w-full h-full border-4 rounded-full border-stone-300 ${
              imageFileUploadProgress &&
              imageFileUploadProgress < 100 &&
              `opacity-50`
            }`}
          />
          <Alert color="failure">
            {imageFileUploadError ? <span>{imageFileUploadError}</span> : null}
          </Alert>
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
