import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) => {
    console.log("hi");
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
