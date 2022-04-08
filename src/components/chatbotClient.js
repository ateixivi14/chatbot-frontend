import Axios from 'axios';

const chatbotClient = Axios.create({
    baseURL: 'http://localhost:5000',
    headers: { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:5000',},
});

export const getResponse = async (
    message
) => {
    const request = {message};
    const response =  await chatbotClient.post('/v1/chatbot', request);
    return response?.data?.response
};
