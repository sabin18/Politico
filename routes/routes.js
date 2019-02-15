import express from "express";
const router = express.Router();
import partyController from "../controller/partycontroller";
import officesController from "../controller/officecontroller";
import usersController from "../controller/usercontroller";
import candidatesController from "../controller/candidateController"
import petitionsController from "../controller/petitionController"
import voteController from "../controller/votesController"


//post routers
router.get("/api/v1/parties", partyController.getparties);
router.get("/api/v1/user", usersController.getuser);
router.get("/api/v1/office", officesController.getoffice);
router.get("/api/v1/candidates",candidatesController.getcandidates);
router.get("/api/v1/votes", voteController.getvotes);
router.get("/api/v1/petition", petitionsController.getpetition);

//post routers
router.post("/api/v1/parties", partyController.createparties);
router.post("/api/v1/user", usersController.createuser);
router.post("/api/v1/candidates/",candidatesController.createcandidates);
router.post("/api/v1/petition/", petitionsController.createpetition);
router.post("/api/v1/office/", officesController.createoffice);
router.post("/api/v1/votes/", voteController. createvote);

//get by id  routers
router.get("/api/v1/user/:id", usersController.getOneuser);
router.get("/api/v1/parties/:id", partyController.getOneparty);
router.get("/api/v1/office/:id", officesController.getOneoffice);
router.get("/api/v1/candidates/:id", candidatesController.getOnecandidate);
router.get("/api/v1/votes/:id", voteController.getOnevote);
router.get("/api/v1/petition/:id",petitionsController.getOnepetition);

//updates routers
router.put("/api/v1/parties/:id",partyController.updateparty);
router.put("/api/v1/office/:id",officesController.updateoffice);
router.put("/api/v1/user/:id", usersController.updateuser);


// patch router
router.patch("/api/v1/parties/:id/:name", partyController.updatepartyname);

//delete routers
router.delete("/api/v1/parties/:id", partyController.deleteparties);
router.delete("/api/v1/user/:id", usersController.deleteuser);
router.delete("/api/v1/candidates/:id", candidatesController.deletecandidate);
router.delete("/api/v1/office/:id",officesController.deleteoffice);
router.delete("/api/v1/petition/:id", petitionsController.deletepetition);

export default router;