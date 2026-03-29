import type { usePanelRef } from "react-resizable-panels";

import { useCallback, useMemo } from "react";
import { useWindowSize } from "usehooks-ts";
import { create } from "zustand/react";

import { useIsMobile } from "@/hooks/use-mobile";

type PanelImperativeHandle = ReturnType<typeof usePanelRef>;

interface BuilderSidebarState {
  leftSidebar: PanelImperativeHandle | null;
  rightSidebar: PanelImperativeHandle | null;
  leftCollapsed: boolean;
  rightCollapsed: boolean;
}

interface BuilderSidebarActions {
  setLeftSidebar: (ref: PanelImperativeHandle | null) => void;
  setRightSidebar: (ref: PanelImperativeHandle | null) => void;
  setLeftCollapsed: (collapsed: boolean) => void;
  setRightCollapsed: (collapsed: boolean) => void;
}

type BuilderSidebar = BuilderSidebarState & BuilderSidebarActions;

export const useBuilderSidebarStore = create<BuilderSidebar>((set) => ({
  isDragging: false,
  leftSidebar: null,
  rightSidebar: null,
  leftCollapsed: false,
  rightCollapsed: true,
  setLeftSidebar: (ref) => set({ leftSidebar: ref }),
  setRightSidebar: (ref) => set({ rightSidebar: ref }),
  setLeftCollapsed: (collapsed) => set({ leftCollapsed: collapsed }),
  setRightCollapsed: (collapsed) => set({ rightCollapsed: collapsed }),
}));

type UseBuilderSidebarReturn = {
  maxSidebarSize: string | number;
  collapsedSidebarSize: number;
  isCollapsed: (side: "left" | "right") => boolean;
  toggleSidebar: (side: "left" | "right", forceState?: boolean) => void;
  leftCollapsed: boolean;
  rightCollapsed: boolean;
};

export function useBuilderSidebar<T = UseBuilderSidebarReturn>(selector?: (builder: UseBuilderSidebarReturn) => T): T {
  const isMobile = useIsMobile();
  const { width } = useWindowSize();

  const maxSidebarSize = useMemo((): string | number => {
    if (!width) return 0;
    return isMobile ? "95%" : "45%";
  }, [width, isMobile]);

  const collapsedSidebarSize = useMemo((): number => {
    if (!width) return 0;
    return isMobile ? 0 : 48;
  }, [width, isMobile]);

  const expandSize = useMemo(() => (isMobile ? "95%" : "30%"), [isMobile]);

  const isCollapsed = useCallback((side: "left" | "right") => {
    const sidebar =
      side === "left"
        ? useBuilderSidebarStore.getState().leftSidebar?.current
        : useBuilderSidebarStore.getState().rightSidebar?.current;

    if (!sidebar) return false;
    return sidebar.isCollapsed();
  }, []);

  const toggleSidebar = useCallback(
    (side: "left" | "right", forceState?: boolean) => {
      const sidebar =
        side === "left"
          ? useBuilderSidebarStore.getState().leftSidebar?.current
          : useBuilderSidebarStore.getState().rightSidebar?.current;

      if (!sidebar) return;

      const shouldExpand = forceState === undefined ? sidebar.isCollapsed() : forceState;

      if (shouldExpand) {
        sidebar.resize(expandSize);
        if (side === "left") useBuilderSidebarStore.getState().setLeftCollapsed(false);
        else useBuilderSidebarStore.getState().setRightCollapsed(false);
      } else {
        sidebar.collapse();
        if (side === "left") useBuilderSidebarStore.getState().setLeftCollapsed(true);
        else useBuilderSidebarStore.getState().setRightCollapsed(true);
      }
    },
    [expandSize],
  );

  const leftCollapsed = useBuilderSidebarStore((state) => state.leftCollapsed);
  const rightCollapsed = useBuilderSidebarStore((state) => state.rightCollapsed);

  const state = useMemo(() => {
    return {
      maxSidebarSize,
      collapsedSidebarSize,
      isCollapsed,
      toggleSidebar,
      leftCollapsed,
      rightCollapsed,
    };
  }, [maxSidebarSize, collapsedSidebarSize, isCollapsed, toggleSidebar, leftCollapsed, rightCollapsed]);

  return selector ? selector(state) : (state as T);
}
