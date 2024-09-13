const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_TOKEN;

export async function fetchData(endpoint: string) {
  const url = `${API_URL}${endpoint}`;
  const config = {
    method: "GET",
    headers: {
      authorization: `Bearer ${API_KEY}`,
      "content-type": "application/json",
    },
    next: {
      revalidate: 60,
    },
  };

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error(
        `Error with status: ${response.status} - ${response.statusText}`,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
