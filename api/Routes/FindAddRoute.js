import express from 'express'
import { get3Properties, addProperty } from '../Controllers/ListingsController.js';

const router = express.Router();

router.get('/', get3Properties);
router.post('/', addProperty);

export default router