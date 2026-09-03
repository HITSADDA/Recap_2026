
import { form } from "framer-motion/m"
import fs from "fs/promises"
// import { submitAction } from "./serverActions/form";

// Server Actions are functions that can be called from the client, but they run on the server. They can be used to perform server-side logic, such as database operations or API calls, without exposing sensitive information to the client.
// async function submitAction(formData: FormData) {
// "use server"
//   const name = formData.get("name");
//   const address = formData.get("address");

//   console.log("Name:", name);
//   console.log("Address:", address);

//   // You can perform further processing or database operations here
// }

export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="text-2xl font-bold">Welcome to the Home Page</div>
    </div>
  );
}
