const express = require("express");
const zod = require("zod");
const app = express();
// // const schema = zod.array(zod.number());
app.use(express.json());
function validateInput(obj) {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });
  const response = schema.safeParse(obj); //applying the schema on the object
  return response;
}
app.post("/login", function (req, res) {
  if (!validateInput(req.body)) {
    res.json({
      msg: "Your inputs were incorrect!!!",
    });
    return;
  }
});
