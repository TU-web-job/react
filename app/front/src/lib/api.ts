const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getHelloMessage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hello`);
  if (!res.ok) throw new Error("Fetch failed");
  return await res.json();
}