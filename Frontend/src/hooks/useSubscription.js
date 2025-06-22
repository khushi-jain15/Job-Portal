import axios from 'axios';

const useSubscription = () => {
  const subscribe = async (email) => {
    const response = await axios.post('http://localhost:3000/api/subscribe', { email });

    return response.data;
  };

  const checkSubscription = async (email) => {
    const response = await axios.post('http://localhost:3000/api/check-subscription', { email });

    return response.data;
  };

  return { subscribe, checkSubscription };
};

export default useSubscription;
