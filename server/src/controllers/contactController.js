import { Contact } from '../models/Contact.js';

/**
 * @desc    Submit a new contact message
 * @route   POST /api/contact
 * @access  Public
 */
export const createContactMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic Input Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, email, subject, and message.'
      });
    }

    // Email Pattern Validation
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.'
      });
    }

    // Save to MongoDB if connection is active
    let contactDoc = null;
    try {
      contactDoc = await Contact.create({
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim()
      });
    } catch (dbErr) {
      console.warn('[Contact Controller] MongoDB document creation notice:', dbErr.message);
    }

    return res.status(201).json({
      success: true,
      message: 'Message received successfully.',
      data: contactDoc ? {
        id: contactDoc._id,
        name: contactDoc.name,
        createdAt: contactDoc.createdAt
      } : {
        name,
        email,
        receivedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get all contact messages (Admin/Inspector route)
 * @route   GET /api/contact
 * @access  Public / Private
 */
export const getContactMessages = async (req, res, next) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    next(error);
  }
};
