import shared from "kmm-module/shared";

/**
 * KMM Constants
 */
export const AppConstants = shared.com.keygenqt.shop.utils.constants.AppConstants

/**
 * Ktor client
 */
export const AppHttpClient = new shared.com.keygenqt.shop.services.ServiceRequestJS("https://shop-api.keygenqt.com/")

/**
 * Ktor requests
 */
export const AppRequests = shared.com.keygenqt.shop.data.requests