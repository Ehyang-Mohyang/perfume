// src/api/deletePerfumes.ts
import axios from 'axios';

export const deletePerfumes = async (accessToken: string, ids: number[]) => {
  try {
    const response = await axios.delete('/api/myPage/perfumes', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      data: { ids },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete perfumes');
  }
};
