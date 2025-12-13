import { create } from "zustand";

export type ViewMode = "experience" | "boardroom";

interface ModeStore {
  mode: ViewMode;
  scrollProgress: number;
  activeChapter: number;
  setMode: (mode: ViewMode) => void;
  toggleMode: () => void;
  setScrollProgress: (progress: number) => void;
  setActiveChapter: (chapter: number) => void;
}

export const useModeStore = create<ModeStore>((set) => ({
  mode: "experience",
  scrollProgress: 0,
  activeChapter: 0,
  setMode: (mode) => set({ mode }),
  toggleMode: () =>
    set((state) => ({
      mode: state.mode === "experience" ? "boardroom" : "experience",
    })),
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  setActiveChapter: (chapter) => set({ activeChapter: chapter }),
}));
