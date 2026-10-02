// Outgoing email for the Acme Shop demo.
// Password reset emails go out on their own, straight away, instead of
// waiting in the queue behind the nightly newsletter batch.
export function sendPasswordReset(to, link) {
  return send({ to, subject: "Reset your Acme Shop password", body: `Reset it here: ${link}`, priority: "now" });
}

function send(message) {
  console.log("sending", message.subject, "to", message.to, message.priority === "now" ? "immediately" : "in the next batch");
}
