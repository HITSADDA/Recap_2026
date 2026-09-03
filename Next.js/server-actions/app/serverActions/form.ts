"use server" 
export async function submitAction(formData: FormData) {
  const name = formData.get("name");
  const address = formData.get("address");

  console.log("Name:", name);
  console.log("Address:", address);

  // You can perform further processing or database operations here
}