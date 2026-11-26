import pool from "../config/db.js";

// The leader's promotion table stores the type as percentage / fixed
const toDbType = (type) => (type === "percent" ? "percentage" : "fixed");

// insert
export const insert = async (promotion) => {
  const [result] = await pool.query(
    "INSERT INTO promotion(owner_id, promotion_name, discount_type, discount_value) VALUES (?,?,?,?)",
    [promotion.ownerId, promotion.name, toDbType(promotion.type), promotion.value],
  );
  return result.insertId;
};
