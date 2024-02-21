/**
 * Interface for the Klaviyo Push API
 */
export interface KlaviyoPushApi {
  /**
   * Set the push token for the current profile
   *
   * @param token
   */
  setPushToken(token: String): void;

  /**
   * Get the push token for the current profile from the SDK
   *
   * @param callback
   */
  getPushToken(callback: Function | undefined): String | null;
}
