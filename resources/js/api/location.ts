const API_KEY = 'f147d6c466cd65be9a6aa18b7f06fc2d8002d30a';

export const getLocationData = async (ip: string) => {
  try {
    const response = await fetch(`/get-location.php?ip=${ip}`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    console.log('📍 Location API Response:', data);
    
    return data;
  } catch (error) {
    console.error('Error fetching location:', error);
    return {
      status: 'error',
      countryCode: 'US',
      country: 'United States'
    };
  }
};