const apiUrl = import.meta.env.VITE_API_URL

export async function getApi<T>(path: string): Promise<T> {
  const response = await fetch(`${apiUrl}${path}`)

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  return response.json() as Promise<T>
}