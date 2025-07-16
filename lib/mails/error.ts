import { ZodError } from "zod";

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof ZodError) {
    // extract the error from ZodError
    message = error.errors.map((err) => err.message).join(", ");
  } else if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "An unexpected error occurred";
  }
  return message;
};
