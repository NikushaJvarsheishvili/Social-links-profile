import "./App.css";
import avatarImage from "./assets/images/avatar-jessica.jpeg";

function App() {
  const socialArray: string[] = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];
  return (
    <>
      <div className="bg-customDarkGray my-20 mx-auto gap-7 p-10 max-w-96 rounded-xl flex flex-col items-center">
        <img
          className="rounded-full w-20"
          src={avatarImage}
          alt="avatar-image"
        />
        <div className="text-center">
          <h2 className="text-white text-2xl font-medium">Jessica Randall</h2>
          <h3 className="text-customGreen text-sm my-1">
            London, United Kingdom
          </h3>
        </div>
        <p className="text-customWhite">
          "Front-end developer and avid reader."
        </p>
        {socialArray.map((item, index) => {
          return (
            <button
              className="w-full text-center ease-in duration-200 text-white bg-customGray p-2 rounded-md hover:button-hover "
              key={index}
            >
              <p className="text-md">{item}</p>
            </button>
          );
        })}
      </div>
    </>
  );
}

export default App;
