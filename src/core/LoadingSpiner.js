import { useState } from "react";
import {  HashLoader} from "react-spinners";

export const Loading = () => {
  const [loading] = useState(true)
  return (
    <div className="fixed inset-0 bg-[#00000031] bg-opacity-20 flex justify-center items-center z-50">
      {/* <CircleLoader size={300} color={"#128C7E"} loading={loading} /> */}
      <HashLoader size={100} color={"#128C7E"} loading={loading} />
    </div>
  );
};