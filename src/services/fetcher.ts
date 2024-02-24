export const fetcher = async (...args: any) => {
  const res = await fetch(args)

  if(!res.ok || res.status < 200 || res.status > 299) {
    const error = new Error('An error occurred while fetching the data.')
    throw error
  }

  return res.json()
}