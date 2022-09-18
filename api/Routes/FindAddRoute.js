import express from 'express'
import { getAllProperties, addProperty } from '../Controllers/ListingsController.js';

const router = express.Router();

router.get('/', getAllProperties);
router.post('/', addProperty);

export default router