import { RequestHandler } from 'express';

import { Member } from '../models/member';

export const indexController: RequestHandler = (req, res, next) => {
  console.log('index controller called');
  const member = new Member();
  member.setID('testID');
  console.log('called from models {id:}',member.getID());

  res.status(201).json({ message: 'index controller called' });
};
