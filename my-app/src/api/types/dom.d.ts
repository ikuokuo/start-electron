/**
 * Augmenting types for DOM
 */
export class MoreVersions {
  readonly electron: string;
  readonly chrome: string;
  readonly node: string;
}

declare global {
  interface Window {
    versions: MoreVersions;
  }
}
