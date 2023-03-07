import { Login } from './scripts/pages/login.page.js'
import { NotFound } from './scripts/pages/not-found.page.js'

function redirectPage() {
    const root = document.querySelector('#root')

    const Router = {
        "": { component: Login, path: "#login" },
        "#login": { component: Login, path: "#login" },
        "#404": { component: NotFound, path: "#404" },
    }

    let route = Router[window.location.hash]

    if(!route) {
        route = Router['#404']
        window.location.href = route.path
    }

    root.innerHTML = null
    root.append(route.component())
}

window.addEventListener('load', () => {
    redirectPage()
    window.addEventListener('hashchange', redirectPage)
})
