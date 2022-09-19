import express from 'express'
import { search } from '../Controllers/SearchController.js'

const router = express.Router();

router.post('/', search);

export default router