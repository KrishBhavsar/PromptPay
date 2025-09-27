interface PaymentResponse {
    success: boolean;
    txnHash: string;
    status: string;
}

interface ImageResponse {
    success: boolean;
    imageBase64: string;
    text?: string;
    downloadUrl: string;
}

interface ApiError {
    error: string;
    details?: string;
}

// Input parameters interface
interface PaymentImageParams {
    txnHash: string;
    hash: string;
    imageBase64user: string;
}

// Result type
type PaymentImageResult =
    | { success: true; data: ImageResponse }
    | { success: false; error: string; stage: 'payment' | 'image' };

/**
 * Utility function that adds payment details and generates an image
 * @param params - Payment and image generation parameters
 * @param config - API configuration
 * @returns Promise with the result of the operation
 */
export async function addPaymentAndGenerateImage(
    params: PaymentImageParams,
): Promise<PaymentImageResult> {
    const { txnHash, hash, imageBase64user } = params;

    try {
        // Step 1: Add payment details
        console.log('Adding payment details for txnHash:', txnHash);

        const paymentResponse = await fetch(`/addPayment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ txnHash }),
        });

        if (!paymentResponse.ok) {
            const errorData: ApiError = await paymentResponse.json();
            return {
                success: false,
                error: errorData.error || 'Payment validation failed',
                stage: 'payment'
            };
        }

        const paymentData: PaymentResponse = await paymentResponse.json();

        if (!paymentData.success) {
            return {
                success: false,
                error: 'Payment validation failed',
                stage: 'payment'
            };
        }

        console.log('Payment validated successfully, generating image...');

        // Step 2: Generate image
        const imageResponse = await fetch(`/generateImage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                hash,
                imageBase64user,
                txnHash,
            }),
        });

        if (!imageResponse.ok) {
            const errorData: ApiError = await imageResponse.json();
            return {
                success: false,
                error: errorData.error || 'Image generation failed',
                stage: 'image'
            };
        }

        const imageData: ImageResponse = await imageResponse.json();

        if (!imageData.success) {
            return {
                success: false,
                error: 'Image generation failed',
                stage: 'image'
            };
        }

        console.log('Image generated successfully');

        return {
            success: true,
            data: imageData
        };

    } catch (error) {
        console.error('Error in addPaymentAndGenerateImage:', error);

        // Determine which stage failed based on the error
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

        return {
            success: false,
            error: errorMessage,
            stage: 'payment' // Default to payment stage if unclear
        };
    }
}
