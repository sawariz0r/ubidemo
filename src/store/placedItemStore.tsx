import { nanoid } from "nanoid";
import { Euler, Vector3 } from "three";
import { create } from "zustand";

type Item = {
  id: string;
  position: Vector3;
  rotation: Euler;
};

type State = {
  items: Item[];
  intersect: {
    position: Vector3;
    rotation: Euler;
  };
  showWireframe: boolean;
  hoveringItem: string | null;
  setHoveringItem: (itemId: string | null) => void;
  toggleWireframe: () => void;
  updateIntersect: (position: Vector3, rotation: Euler) => void;
  addItem: () => void;
  moveItem: (itemId: string, position: Vector3, rotation: Euler) => void;
  removeItem: (itemId: string) => void;
};

export const usePlacedItemStore = create<State>()((set) => ({
  items: [],
  intersect: {
    position: new Vector3(),
    rotation: new Euler(),
  },
  updateIntersect: (position, rotation) =>
    set(() => ({
      intersect: {
        position,
        rotation,
      },
    })),
  hoveringItem: null,
  setHoveringItem: (item) =>
    set(() => ({
      hoveringItem: item,
    })),
  showWireframe: false,
  toggleWireframe: () =>
    set((state) => ({
      showWireframe: !state.showWireframe,
    })),
  addItem: () =>
    set((state) => ({
      items: [
        ...state.items,
        {
          id: nanoid(), // TODO: Use a better ID
          position: state.intersect.position.clone(),
          rotation: state.intersect.rotation.clone(),
        },
      ],
    })),
  moveItem: (itemId, position, rotation) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              position,
              rotation,
            }
          : item
      ),
    })),
  removeItem: (itemId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    })),
}));
