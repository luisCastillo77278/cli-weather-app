import axios from 'axios';

const getExample = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return []
  }
}

export { getExample };
