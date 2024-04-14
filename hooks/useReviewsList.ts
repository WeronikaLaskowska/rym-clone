import type { Review } from "~/models/review";

export async function useReviewsList(): Promise<{ data: Review[] } | null> {
  try {
    const response = await fetch("/mock.json");
    if (!response.ok) {
      window.alert("Failed to fetch mock data");
    }
    return await response.json();
  } catch (error) {
    window.alert("Failed to fetch mock data");
    return null;
  }
}
