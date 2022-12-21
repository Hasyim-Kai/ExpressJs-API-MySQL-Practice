import { db_query } from '../services/db'
import { Request, Response, NextFunction } from 'express';

export async function getAllAnimals(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await db_query('SELECT * FROM animal')
    return res.status(200).json({ status: true, message: result });
  } catch (error) {
    let errorResponse;
    if (error instanceof Error) { errorResponse = error.message }
    else { errorResponse = "Something Went Wrong" }
    return res.status(400).json({ status: false, message: errorResponse });
  }
}

export async function getAnimal(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await db_query('SELECT * FROM animal WHERE id = ?', [req.params.id])
    return res.status(200).json({ status: true, message: result });
  } catch (error) {
    let errorResponse;
    if (error instanceof Error) { errorResponse = error.message }
    else { errorResponse = "Something Went Wrong" }
    return res.status(400).json({ status: false, message: errorResponse });
  }
}

export async function createAnimal(req: Request, res: Response, next: NextFunction) {
  try {
    const data = { ...req.body }
    const result = await db_query(`INSERT INTO animal SET ?`, data)
    return res.status(200).json({ status: true, message: result });
  } catch (error) {
    let errorResponse;
    if (error instanceof Error) { errorResponse = error.message }
    else { errorResponse = "Something Went Wrong" }
    return res.status(400).json({ status: false, message: errorResponse });
  }
}

export async function updateAnimal(req: Request, res: Response, next: NextFunction) {
  try {
    const data = { ...req.body }
    const result = await db_query(`UPDATE animal SET ? WHERE id = ${req.params.id}`, data)
    return res.status(200).json({ status: true, message: result });
  } catch (error) {
    let errorResponse;
    if (error instanceof Error) { errorResponse = error.message }
    else { errorResponse = "Something Went Wrong" }
    return res.status(400).json({ status: false, message: errorResponse });
  }
}

export async function delAnimal(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await db_query('DELETE FROM animal WHERE id = ?', [req.params.id])
    return res.status(200).json({ status: true, message: result });
  } catch (error) {
    let errorResponse;
    if (error instanceof Error) { errorResponse = error.message }
    else { errorResponse = "Something Went Wrong" }
    return res.status(400).json({ status: false, message: errorResponse });
  }
}