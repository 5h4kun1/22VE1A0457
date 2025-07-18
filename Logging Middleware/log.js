import axios from 'axios';

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMnZlMWEwNDU3QHNyZXlhcy5hYy5pbiIsImV4cCI6MTc1MjgyMTgzMiwiaWF0IjoxNzUyODIwOTMyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMzFkMzU2NDgtODhhNC00MTg2LTgwN2YtYjAyNWMxOTg5NjNkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic3VtYW4gYmlzd2FzIiwic3ViIjoiYzg5MTFkOTctMmI2Yi00ZDg0LWI1ZGUtY2MxMTdlOTlmMTM4In0sImVtYWlsIjoiMjJ2ZTFhMDQ1N0BzcmV5YXMuYWMuaW4iLCJuYW1lIjoic3VtYW4gYmlzd2FzIiwicm9sbE5vIjoiMjJ2ZTFhMDQ1NyIsImFjY2Vzc0NvZGUiOiJOTlpER3EiLCJjbGllbnRJRCI6ImM4OTExZDk3LTJiNmItNGQ4NC1iNWRlLWNjMTE3ZTk5ZjEzOCIsImNsaWVudFNlY3JldCI6Im1IZVZzWHVoZGJ2cnd3bkcifQ.w6A6mmeZ8LKCvmwpHKVp9a63IwSHYulUutWm4RX5d4w"; // ← paste your token here

export async function logEvent(stack, level, pkg, message) {
  try {
    const res = await axios.post(
      'http://20.244.56.144/evaluation-service/logs',
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`
        }
      }
    );
    console.log('Log success:', res.data);
  } catch (error) {
    console.error('Log failed:', error.response?.data || error.message);
  }
}
