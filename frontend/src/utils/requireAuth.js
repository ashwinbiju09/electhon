import auth from "./auth";
import RouteHelper from "./routeHelper";

export default async function requireAuth(redirectUrl = "/login", redirect_verification = true) {
    let data = auth();

    if (data.isAuth === false) {
        return RouteHelper.redirect(redirectUrl);
    } else {
        let data = await auth().fetchUser();

        if (!data.isAuth) {
            await auth().logout("/login", true);
            return RouteHelper.redirect(redirectUrl);
        }

        return data;
    }
}
