import React from "react";

const StatusCard = ({ icon, label, count, iconBg, bgColor, countColor }) => {
  return (
    <div style={{ ...styles.quizCard }}>
      <div style={{ backgroundColor: bgColor, ...styles.cardHeader }}>
        <div style={{ ...styles.cardStrip }}>
          <div style={{ color: iconBg, ...styles.iconWrapper }}>{icon}</div>
          <div style={{ ...styles.menuDots }}>⋯</div>
        </div>
      </div>
      <div style={{ ...styles.cardBody }}>
        <div style={{ ...styles.count }}>{count}</div>
        <div style={{ ...styles.label }}>{label}</div>
      </div>
    </div>
  );
};

export default StatusCard;

const styles = {
  quizCard: {
    backgroundColor: "#fff",
    marginTop: "15px",
    position: "relative",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  },
  cardHeader: {
    padding: "0.1rem 2rem",
    margin: "10px",
    borderRadius: "25px",
  },
  cardStrip: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuDots: {
    fontSize: "1.25rem",
    color: "#555",
  },
  cardBody: {
    padding: "1rem",
  },
  count: {
    fontSize: "1.5rem",
    fontWeight: "600",
  },
  label: {
    marginTop: "4px",
    fontSize: "1rem",
    color: "#6c757d",
    textAlign: "right",
    marginRight: "25px",
  },
};
