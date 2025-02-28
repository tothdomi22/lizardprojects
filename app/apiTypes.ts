// types/apiTypes.ts

import { NextApiRequest } from 'next';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export interface CustomRequest extends NextApiRequest {
  body: ContactFormData; // Ensure req.body matches ContactFormData
}
