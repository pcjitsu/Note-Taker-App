app.get("/api", (req, res) => {
  res.json({
    term: "api",
    description: "An application programming interface, is a computing interface that defines interactions between multiple software intermediaries",
  });
});
