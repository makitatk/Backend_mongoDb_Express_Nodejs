export const register = (req, res) => {
  console.log(req.body);
  res.json({ mensaje: "true" });
};

export const login = (req, res) => {
  res.json({ mensaje: "ok" });
};
