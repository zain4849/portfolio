import emailjs from "emailjs-com";

export async function handler(event, context) {
  const { name, email, message } = JSON.parse(event.body);

  try {
    const response = await emailjs.send(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      { from_name: name, reply_to: email, message },
      process.env.PUBLIC_KEY
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ status: "success" })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: "error", message: err.message })
    };
  }
}
