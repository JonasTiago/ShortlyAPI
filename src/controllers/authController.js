export async function signup(req, res) {
  const newUser = res.locals.newUser;

  console.log(newUser);

  res.sendStatus(201);
}
