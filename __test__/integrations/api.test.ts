import { testApiHandler } from "next-test-api-route-handler"

import api from "../../src/pages/api/index"

test("GET API test live", async () => {
    await testApiHandler({
      handler: api,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: "GET",
          path: "/api",
        });
  
        expect(res.status).toBe(200);
        const json = await res.json();
  
        console.log(json)
      },
    });
  });