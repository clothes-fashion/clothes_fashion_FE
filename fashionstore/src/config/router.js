import routes from "./routes";
import Home from "../pages/Home"
const publicRoutes = [
    {path: routes.home, component: Home},
    {path: routes.home, component: Home}
]

const privateRoutes = [
    {path: routes.home, component: Home},
    {path: routes.home, component: Home}
]

export default {publicRoutes, privateRoutes};