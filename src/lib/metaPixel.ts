declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackMetaPixelEvent(eventName: string) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName);
  }
}
