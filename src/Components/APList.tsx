import { usePlacedItemStore } from "../store/placedItemStore";

type StyleObject = {
  [key: string]: React.CSSProperties;
};

const APList = () => {
  const { items, toggleWireframe, hoveringItem, removeItem } =
    usePlacedItemStore();
  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <h2 style={styles.heading}>AP List</h2>
        <span style={styles.subHeading}>Doubleclick to add Access Point</span>
        <span style={styles.subHeading}>Press on it's ID to remove</span>
        <span style={styles.subHeading}>
          Hover over the AP to highlight it in the list
        </span>

        <ul style={styles.list}>
          {items.map((item) => (
            <li
              key={item.id}
              style={{
                ...styles.listItem,
                color: item.id === hoveringItem ? "red" : "black",
              }}
              onClick={() => {
                removeItem(item.id);
              }}
            >
              {item.id}
            </li>
          ))}
        </ul>
        <button
          style={styles.button}
          onClick={() => {
            toggleWireframe();
          }}
        >
          Show projected range
        </button>
      </div>
    </div>
  );
};

const styles: StyleObject = {
  container: {
    zIndex: 999,
    position: "absolute",
    top: 0,
    left: 0,
    margin: 16,
  },
  innerContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    flexDirection: "column",
    display: "flex",
    boxShadow: "0 0 8px rgba(0,0,0,0.2)",
  },
  list: {
    listStyle: "none",
    padding: "8px 0",
    margin: 0,
  },
  listItem: {
    cursor: "pointer",
    padding: 8,
    margin: "4px 0",
    backgroundColor: "#4caf5050",
    borderRadius: 4,
  },
  heading: {
    fontFamily: "sans-serif",
    fontSize: 24,
    margin: 0,
    paddingBottom: 8,
  },
  subHeading: {
    fontFamily: "sans-serif",
    fontSize: 14,
  },
  button: {
    padding: 8,
    margin: 0,
    backgroundColor: "#4caf50",
    borderRadius: 4,
    border: "none",
    cursor: "pointer",
    flex: 1,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
};

export default APList;
