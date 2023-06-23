const request = require("supertest");
let app = require("../app");

describe("SHOW / page, limit, sort and order should have value", () => {
  jest.setTimeout(10000); // Increase the timeout to 10000 ms
  test("SHOW / should response with 200 status code", async () => {
    const response = await request(app).post("/api/todo/show").send({
      page: 1,
      limit: 10,
      searchBy: "_id",
      searchValue: "bed63e6b-16b2-42a7-b973-0189a46f864s3",
    });
    expect(response.status).toBe(200);
  });
});

test("SHOW / Should specify json in the content-type header", async () => {
  jest.setTimeout(10000); // Increase the timeout to 10000 ms
  const response = await request(app).post("/api/todo/show").send({
    page: 1,
    limit: 10,
    searchBy: "_id",
    searchValue: "bed63e6b-16b2-42a7-b973-0189a46f864s3",
  });
  expect(response.headers["content-type"]).toEqual(
    expect.stringContaining("json")
  );
});

test('SHOW / should return JSON response"', async () => {
  jest.setTimeout(10000); // Increase the timeout to 10000 ms
  const response = await request(app).post("/api/todo/show").send({
    page: 1,
    limit: 10,
    searchBy: "_id",
    searchValue: "bed63e6b-16b2-42a7-b973-0189a46f864s3",
  });

  if (response.status === 200) {
    expect(response.body).toEqual({
      status: "sucess",
      statusCode: 0,
      isSuccess: true,
      message: "Success on search",
      data: expect.any(String),
    });
  } else {
    expect(response.body).toEqual({
      status: "failed",
      statusCode: 1,
      isSuccess: false,
      message: "Error encountered while processing request.",
      error: expect.any(String),
    });
  }
});
