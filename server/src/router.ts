import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes

import InformationsAction from "./modules/Informations/InformationsAction";
import HomepageAction from "./modules/item/Homepage/HomepageAction";

router.get("/api/item", HomepageAction.browse);

router.get("/api/item/:id", HomepageAction.read);

router.get("/api/informations", InformationsAction.browse);

router.get("/api/informations/:id", InformationsAction.read);
/* ************************************************************************* */

export default router;
