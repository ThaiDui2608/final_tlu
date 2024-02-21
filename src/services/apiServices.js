const API_URL = 'https://86yfl7-8080.csb.app';

export const fetchBooks = async () => {
  try {
    const response = await fetch(`${API_URL}/books`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching books:', error);
    return null;
  }
};

export const fetchBookDetail = async (bookId) => {
  try {
    const response = await fetch(`${API_URL}/books/${bookId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching book detail:', error);
    return null;
  }
};
