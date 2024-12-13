import Swal from "sweetalert2";

export const ErrorAlert = (message)=>{
  Swal.fire({
    title: `${message}`,
    icon: "error",
    customClass: {
      icon: "text-red-600",
      container: "flex items-center justify-center bg-gray-100 rounded-lg shadow-xl p-6", // Tailwind styles for the container
      title: "text-2xl text-blue-500 font-bold text-red-600", // Tailwind styles for the title
      content: "text-lg text-gray-700", // Tailwind styles for the content
      confirmButton: "bg-green text-white font-semibold rounded-md py-2 px-4 hover:bg-green-600", // Tailwind for the button
    },
    confirmButtonText: "OK!",
  });
} 

export const SuccessAlert = (message)=>{
  Swal.fire({
    title: `${message}`,
    icon: "success",
    customClass: {
      container: "flex items-center justify-center bg-gray-100 rounded-lg shadow-xl p-6", // Tailwind styles for the container
      title: "text-2xl text-black font-bold", // Tailwind styles for the title
      content: "text-lg text-gray-700", // Tailwind styles for the content
      confirmButton: "bg-green text-white font-semibold rounded-md py-2 px-4 hover:bg-green-600", // Tailwind for the button
    },
    confirmButtonText: "OK!",
  });
} 