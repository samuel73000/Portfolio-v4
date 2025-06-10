exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  try {
    const formData = JSON.parse(event.body);

    // Here you can add any additional processing or validation
    // For example, sending an email notification

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Form submitted successfully",
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Error processing form submission",
      }),
    };
  }
};
