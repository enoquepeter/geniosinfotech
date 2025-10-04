import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const API_KEY = 'f147d6c466cd65be9a6aa18b7f06fc2d8002d30a';

const LocationData = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLocationRequest = async () => {
      try {
        const requestData = await fetch(`https://pro.ipapi.org/api_json/one.php?key=${API_KEY}&fields=country,countryCode,status`);
        const data = await requestData.json();
        
        return Response.json(data);
      } catch (error) {
        console.error('Error in location endpoint:', error);
        return Response.json({ error: 'Failed to fetch location data' }, { status: 500 });
      }
    };

    handleLocationRequest();
    navigate('/'); // Redireciona após processar
  }, [navigate]);

  return null;
};

export default LocationData;