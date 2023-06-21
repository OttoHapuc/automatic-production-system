export type ErrorResponse = {
  message: string;
  status: number;
};

export default function GenericError(message: string, status: number):ErrorResponse {
  return { message, status };
}
