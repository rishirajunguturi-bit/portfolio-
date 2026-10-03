import express from 'express';
import { createContactMessage, getContactMessages } from '../controllers/contactController.js';

const router = express.Router();

router.route('/')
  .post(createContactMessage)
  .get(getContactMessages);

export default router;
