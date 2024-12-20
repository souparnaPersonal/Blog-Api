import { adminServices } from './admin.services';
import { Request, Response } from 'express';
const blockUser = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization;
    const result = await adminServices.blockUserFromdb(
      req.params.userId,
      token as string,
    );

    res.status(200).json({
      message: 'User blocked successfully',
      status: true,
      data: result,
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unexpected error occurred';
    res.status(400).json({
      message: 'Validation faild',
      success: false,
      error: errorMessage,
    });
  }
};
const deleteBlog = async (req: Request, res: Response) => {
  try {
    const result = await adminServices.deleteBlogFromDb(
      req.params.id,
      req.headers.authorization as string,
    );

    res.status(200).json({
      message: 'Blog deleted successfully',
      status: true,
      data: result,
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unexpected error occurred';
    res.status(400).json({
      message: 'Validation faild',
      success: false,
      error: errorMessage,
    });
  }
};

export const adminControllers = {
  blockUser,
  deleteBlog,
};