interface encryptPromptResponse {
    message: string,
    hash: string
}

interface encryptPromptError {
    error: string
    text?: string
    details?: string
}

/**
 * Generates a prompt preview by sending an image and prompt to the API
 * @param image - The input image file
 * @param prompt - The text prompt to use for generation
 * @returns Promise with the generated image data or throws an error
 */
export async function encryptAndStorePrompt(
    prompt: string
): Promise<encryptPromptResponse> {
    try {

        console.log("Storing encrypted prompt:", prompt);


        // Make the fetch request to the Next.js API route
        const response = await fetch('/api/store-encrypted', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt,
            }),
        })

        const data = await response.json()

        if (!response.ok) {
            const errorData = data as encryptPromptError
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
        }

        return data as encryptPromptResponse
    } catch (error) {
        if (error instanceof Error) {
            throw error
        }
        throw new Error('An unexpected error occurred while generating prompt preview')
    }
}