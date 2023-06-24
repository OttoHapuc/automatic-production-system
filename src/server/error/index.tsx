export type ErrorResponse = {
  message: string | string[];
  status: number;
};

export default function GenericError(message: string | string[], status: number):ErrorResponse {
  return { message, status };
}
