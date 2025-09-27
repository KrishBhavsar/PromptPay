interface GeneratePromptPreviewResponse {
    success: boolean
    imageBase64: string
    text: string | null
    downloadUrl: string
}

interface GeneratePromptPreviewError {
    error: string
    text?: string
    details?: string
}

/**
 * Converts a File to base64 string
 */
const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            if (typeof reader.result === 'string') {
                // Remove the data:image/png;base64, prefix
                const base64 = reader.result.split(',')[1]
                resolve(base64)
            } else {
                reject(new Error('Failed to convert file to base64'))
            }
        }
        reader.onerror = (error) => reject(error)
    })
}

/**
 * Generates a prompt preview by sending an image and prompt to the API
 * @param image - The input image file
 * @param prompt - The text prompt to use for generation
 * @returns Promise with the generated image data or throws an error
 */
export async function generatePromptPreview(
    image: File,
    prompt: string
): Promise<GeneratePromptPreviewResponse> {
    try {
        // Convert image file to base64
        const imageBase64Creator = await fileToBase64(image)

        // // Make the fetch request to the Next.js API route
        // const response = await fetch('/api/generate-prompt-preview', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         prompt,
        //         imageBase64Creator,
        //     }),
        // })

        // const data = await response.json()

        // if (!response.ok) {
        //     const errorData = data as GeneratePromptPreviewError
        //     throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
        // }

        //Temp: return mock data until backend is fixed
        const data = {
            success: true,
            imageBase64: imageBase64Creator,
            text: prompt,
            downloadUrl: "https://res.cloudinary.com/dq2t1jzqv/image/upload/v1700882928/sample.jpg"
        }

        return data as GeneratePromptPreviewResponse
    } catch (error) {
        if (error instanceof Error) {
            throw error
        }
        throw new Error('An unexpected error occurred while generating prompt preview')
    }
}