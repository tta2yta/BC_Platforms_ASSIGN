import express from "express";
import createCustomerRoles from "../controllers/RolesController.js";

const router = express.Router();
router.post("/customer-role", createCustomerRoles);

export default router;
