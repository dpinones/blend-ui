/**
 * Blend Pool Validation Error Codes
 * These are returned when a transaction succeeds on Stellar but the contract
 * validation fails (CheckResult::ValidationFailed)
 */
export const PoolValidationErrors: Record<number, string> = {
  // Common validation errors from check_and_submit
  100: 'Address is blacklisted - Transaction blocked by blacklist policy',
  200: 'Blender Policy Check Failed - Transaction exceeds the maximum allowed amount',
};

/**
 * Get a user-friendly error message for a validation error code
 */
export function getValidationErrorMessage(errorCode: number): string {
  const message = PoolValidationErrors[errorCode];
  if (message) {
    return `Fortgate: ${message}`;
  }
  return `Fortgate: Validation failed with error code: ${errorCode}`;
}
