import axios from 'axios';

export const deletePerfumes = async (ids: number[]) => {
  try {
    const response = await axios.delete('/api/myPage/perfumes', {
      data: { ids },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete perfumes');
  }
};
