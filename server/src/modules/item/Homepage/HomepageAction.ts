import type { RequestHandler } from "express";
import HomepageRepository from "./HomepageRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const homepage = await HomepageRepository.readAll();

    res.json(homepage);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const homepageId = Number(req.params.id);
    const homepage = await HomepageRepository.read(homepageId);

    if (homepage == null) {
      res.sendStatus(404);
    } else {
      res.json(homepage);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read };
