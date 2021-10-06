import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freela maluco",
          type: "deposit",
          category: "Dev full cycle",
          amount: 100,
          createdAt: new Date("2021-10-05 09:00:00"),
        },
        {
          id: 2,
          title: "Patinete voador alugado",
          type: "withdraw",
          category: "Empréstimo",
          amount: 500,
          createdAt: new Date("2021-10-07 05:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
