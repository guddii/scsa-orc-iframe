import { EndpointProperties } from "@scsa/messaging/src/endpoints/Endpoint";

export const Applications = {
    MAIN: new EndpointProperties("MainApp", "http://localhost:3000/"),
    ACCOUNT: new EndpointProperties(
        "AccountApp",
        "https://scsa-app-account.herokuapp.com/"
    ),
    CATALOGUE: new EndpointProperties(
        "CatalogueApp",
        "https://scsa-app-catalogue.herokuapp.com/"
    ),
    CHECKOUT: new EndpointProperties(
        "CheckoutApp",
        "https://scsa-app-checkout.herokuapp.com/"
    )
};
