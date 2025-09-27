interface CloudinaryUploadResponse {
  secure_url: string;
  public_id: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  bytes: number;
  url: string;
  [key: string]: any;
}

interface CloudinaryUploadOptions {
  folder?: string;
  public_id?: string;
  transformation?: string;
  tags?: string[];
  quality?: string | number;
  format?: string;
  width?: number;
  height?: number;
  crop?: string;
}

interface CloudinaryConfig {
  cloudName: string;
  apiKey: string;
  apiSecret: string;
}

// Environment variables configuration
const getCloudinaryConfig = (): CloudinaryConfig => {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error(
      'Missing Cloudinary configuration. Please ensure CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET are set in your .env file.'
    );
  }

  return { cloudName, apiKey, apiSecret };
};

/**
 * SERVER-SIDE ONLY: Uploads a base64 image to Cloudinary with signed upload
 * Uses environment variables for Cloudinary configuration
 * @param base64Data - Base64 encoded image data (with or without data URL prefix)
 * @param options - Optional upload parameters
 * @returns Promise containing the Cloudinary upload response with secure_url
 */
export async function uploadBase64ToCloudinary(
  base64Data: string,
  options: CloudinaryUploadOptions = {}
): Promise<CloudinaryUploadResponse> {
  // This function should only be used server-side (Node.js)
  if (typeof window !== 'undefined') {
    throw new Error('This function should only be used server-side. Use uploadBase64ToCloudinaryUnsigned for client-side uploads.');
  }

  try {
    const config = getCloudinaryConfig();
    
    // Remove data URL prefix if present (e.g., "data:image/jpeg;base64,")
    const base64Image = base64Data.replace(/^data:image\/[a-z]+;base64,/, '');
    
    // Prepare form data
    const formData = new FormData();
    
    // Add the base64 image with data URL prefix for Cloudinary
    formData.append('file', `data:image/auto;base64,${base64Image}`);
    
    // Add API key
    formData.append('api_key', config.apiKey);
    
    // Generate timestamp for signature
    const timestamp = Math.floor(Date.now() / 1000);
    formData.append('timestamp', timestamp.toString());
    
    // Add optional parameters
    if (options.folder) formData.append('folder', options.folder);
    if (options.public_id) formData.append('public_id', options.public_id);
    if (options.tags) formData.append('tags', options.tags.join(','));
    if (options.quality) formData.append('quality', options.quality.toString());
    if (options.format) formData.append('format', options.format);
    if (options.transformation) formData.append('transformation', options.transformation);
    if (options.width) formData.append('width', options.width.toString());
    if (options.height) formData.append('height', options.height.toString());
    if (options.crop) formData.append('crop', options.crop);
    
    // Generate signature
    const signature = generateSignature(formData, config.apiSecret, timestamp);
    formData.append('signature', signature);
    
    // Upload to Cloudinary
    const uploadUrl = `https://api.cloudinary.com/v1_1/${config.cloudName}/image/upload`;
    
    const response = await fetch(uploadUrl, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Cloudinary upload failed: ${errorData.error?.message || 'Unknown error'}`);
    }
    
    const result: CloudinaryUploadResponse = await response.json();
    return result;
    
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw new Error(`Failed to upload image: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * SERVER-SIDE ONLY: Generates signature for Cloudinary upload
 * Requires Node.js crypto module
 */
function generateSignature(formData: FormData, apiSecret: string, timestamp: number): string {
  // Import crypto module (Node.js only)
  const crypto = require('crypto');
  
  const params: Record<string, string> = {};
  
  // Extract parameters from FormData
  formData.forEach((value, key) => {
    if (key !== 'file' && key !== 'signature' && key !== 'api_key') {
      params[key] = value.toString();
    }
  });
  
  // Sort parameters alphabetically
  const sortedParams = Object.keys(params)
    .sort()
    .map(key => `${key}=${params[key]}`)
    .join('&');
  
  // Create string to sign
  const stringToSign = `${sortedParams}&timestamp=${timestamp}${apiSecret}`;
  
  // Generate SHA-1 hash
  return crypto
    .createHash('sha1')
    .update(stringToSign)
    .digest('hex');
}

/**
 * CLIENT-SIDE SAFE: Simplified version for use with unsigned upload presets
 * Configure an unsigned upload preset in your Cloudinary dashboard
 * This is the recommended approach for client-side uploads
 * @param base64Data - Base64 encoded image data
 * @param cloudName - Your Cloudinary cloud name
 * @param uploadPreset - Your unsigned upload preset name
 * @param options - Optional upload parameters
 * @returns Promise containing the Cloudinary upload response
 */
export async function uploadBase64ToCloudinaryUnsigned(
  base64Data: string,
  cloudName: string,
  uploadPreset: string,
  options: Omit<CloudinaryUploadOptions, 'public_id'> = {}
): Promise<CloudinaryUploadResponse> {
  try {
    // Remove data URL prefix if present
    const base64Image = base64Data.replace(/^data:image\/[a-z]+;base64,/, '');
    
    const formData = new FormData();
    formData.append('file', `data:image/auto;base64,${base64Image}`);
    formData.append('upload_preset', uploadPreset);
    
    // Add optional parameters
    if (options.folder) formData.append('folder', options.folder);
    if (options.tags) formData.append('tags', options.tags.join(','));
    if (options.quality) formData.append('quality', options.quality.toString());
    if (options.format) formData.append('format', options.format);
    if (options.transformation) formData.append('transformation', options.transformation);
    if (options.width) formData.append('width', options.width.toString());
    if (options.height) formData.append('height', options.height.toString());
    if (options.crop) formData.append('crop', options.crop);
    
    const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    
    const response = await fetch(uploadUrl, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Cloudinary upload failed: ${errorData.error?.message || 'Unknown error'}`);
    }
    
    const result: CloudinaryUploadResponse = await response.json();
    return result;
    
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw new Error(`Failed to upload image: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Example usage:

// SERVER-SIDE (Node.js with environment variables):
/*
try {
  const result = await uploadBase64ToCloudinary(base64ImageData, {
    folder: 'uploads',
    quality: 'auto',
    format: 'webp'
  });
  console.log('Upload successful:', result.secure_url);
} catch (error) {
  console.error('Upload failed:', error.message);
}
*/

// CLIENT-SIDE (Browser with unsigned preset):
/*
try {
  const result = await uploadBase64ToCloudinaryUnsigned(
    base64ImageData,
    'your-cloud-name',
    'your-unsigned-preset',
    {
      folder: 'uploads',
      quality: 'auto'
    }
  );
  console.log('Upload successful:', result.secure_url);
} catch (error) {
  console.error('Upload failed:', error.message);
}
*/