export const submitContactForm = async (
  name: string,
  email: string,
  message: string,
) => {
  return await fetch("/api/enquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });
};
