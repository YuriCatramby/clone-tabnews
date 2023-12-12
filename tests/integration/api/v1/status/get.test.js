test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parserUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parserUpdatedAt);

  expect(responseBody.dependencies.database.version).toEqual("16.0");

  expect(
    parseInt(responseBody.dependencies.database.max_connections, 10)
  ).toBeGreaterThanOrEqual(
    // parseInt(responseBody.dependencies.database.opened_connections, 10)
    responseBody.dependencies.database.opened_connections
  );
});
