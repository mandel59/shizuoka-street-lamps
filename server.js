import { createApp, serveStatic } from "https://servestjs.org/@v1.1.0/mod.ts";
const app = createApp();
app.use(serveStatic("./public"));
app.get("/", async (req) => {
    return req.redirect("/index.html")
})
app.listen({ port: 8899 });
