import express from "express";
import postController from "../controller/controller";

const router = express.Router();
//post routers
router.get("/api/v1/parties", postController.getparties);
router.get("/api/v1/user", postController.getuser);
router.get("/api/v1/office", postController.getoffice);
router.get("/api/v1/candidates", postController.getcandidates);
router.get("/api/v1/votes", postController.getvotes);
router.get("/api/v1/petition", postController.getpetition);


//post routers
router.post("/api/v1/parties", postController.createparties);
router.post("/api/v1/user", postController.createuser);
router.post("/api/v1/candidates/", postController.createcandidates);
router.post("/api/v1/petition/", postController.createpetition);
router.post("/api/v1/office/", postController.createoffice);




//get by id data routers
router.get("/api/v1/user/:id", postController.getOneuser);
router.get("/api/v1/parties/:id", postController.getOneparty);
router.get("/api/v1/office/:id", postController.getOneoffice);
router.get("/api/v1/candidates/:id", postController.getOnecandidate);
router.get("/api/v1/votes/:id", postController.getOnevote);
router.get("/api/v1/petition/:id", postController.getOnepetition);

//updates routers
router.put("/api/v1/parties/:id", postController.updateparty);
router.put("/api/v1/office/:id", postController.updateoffice);
router.put("/api/v1/user/:id", postController.updateuser);


//updates patch router
router.patch("/api/v1/parties/:id/:name", postController.updatepartyname);




//delete routers
router.delete("/api/v1/parties/:id", postController.deleteparties);
router.delete("/api/v1/user/:id", postController.deleteuser);
router.delete("/api/v1/candidates/:id", postController.deletecandidate);
router.delete("/api/v1/office/:id", postController.deleteoffice);
router.delete("/api/v1/petition/:id", postController.deletepetition);

export default router;