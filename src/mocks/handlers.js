import { rest } from "msw";

export const handlers = [
  rest.get(process.env.API_URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          nombre: "Pepe",
        },
        {
          id: 2,
          nombre: "Pipo",
        },
        {
          id: 3,
          nombre: "Pupe",
        },
      ])
    );
  }),
];
