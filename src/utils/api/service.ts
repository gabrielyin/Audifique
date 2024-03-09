import { PromptSchemaType } from "../schemas";

export async function createAudio(data: PromptSchemaType): Promise<string | null> {
  const query = encodeURI(data.prompt);

  const options = {
    method: 'GET',
  }

  try {
    const response = await fetch(`https://zauucu.buildship.run/lovenotes?prompt=${query}`, options)
    const responseData = await response.text()

    return responseData
  } catch (error) {
    console.log(error)
    return null
  }
  
}