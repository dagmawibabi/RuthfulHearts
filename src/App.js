import Loglib from "@loglib/tracker/react";
import Main from "./pages/main";

function App() {
  console.log("Ruthful Hearts <3\n\nIf you are a Ruthful Developer, you can help improve this site by forking and making a PR request on Github. \n\nHere's the link to this project's source code: https://github.com/dagmawibabi/RuthfulHearts \n\nHave fun and protect that ruthful heart of yours! <3")
  return (
    <div className="bg-[#151515] h-fit text-white w-fit overflow-hidden">
      <Loglib
        config={{
          id: "ruthfulhearts",
        }}
      />

      <Main/>
    </div>
  );
}

export default App;
