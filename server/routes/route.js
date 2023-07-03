import express,{ Router } from "express"; 

import { addUser,getUsers } from "../controller/user-controller.js";


const router = express.Router();

// yha check krega jo api call hui ../../api.js se fir yha check krega konsa match horha h fir uske function me jakar run krega (user-controller.js )me
router.post('/add',addUser);
router.get('/all',getUsers);

export default router;
