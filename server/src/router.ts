import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes

import HomepageAction from "./modules/item/Homepage/HomepageAction";
import InformationsAction from "./modules/Informations/InformationsAction";

router.get("/api/item", HomepageAction.browse);

router.get("/api/item/:id", HomepageAction.read);

router.get("/api/informations", InformationsAction.browse);

router.get("/api/informations/:id", InformationsAction.read);
/* ************************************************************************* */

export default router;
