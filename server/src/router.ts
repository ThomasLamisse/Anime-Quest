import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes

import HomepageAction from "./modules/item/Homepage/HomepageAction";

router.get("/api/item", HomepageAction.browse);

router.get("/api/item/:id", HomepageAction.read);
/* ************************************************************************* */

export default router;
