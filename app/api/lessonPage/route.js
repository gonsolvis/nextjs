// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const res = await fetch("https://randomuser.me/api/?results=1", {
//       cache: "no-store",
//     });
//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }

//     const data = await res.json();
//     const data_results = data?.results;

//     return NextResponse.json(data_results);
//   } catch (error) {
//     console.log("Error loading topics: ", error);
//     throw error; // Re-throw the error if you want to handle it further in the calling code
//   }
// }
