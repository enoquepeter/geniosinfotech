import { getLocationData } from '@/api/location';

interface GeoLocation {
  country: string;
  countryCode: string;
  status: string;
}

const API_KEY = 'f147d6c466cd65be9a6aa18b7f06fc2d8002d30a';

// Função para obter o IP do usuário
const getUserIP = async (): Promise<string> => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('❌ Erro ao obter IP:', error);
    return ''; // Retorna vazio em caso de erro
  }
};

const getCountryCode = async (): Promise<string> => {
  try {
    // Verificar cache
    const cachedCountry = localStorage.getItem('userCountry');
    const cacheExpiry = localStorage.getItem('userCountryExpiry');
    
    if (cachedCountry && cacheExpiry && Number(cacheExpiry) > Date.now()) {
      console.log('🔄 Using cached country:', {
        country: cachedCountry,
        expiresIn: new Date(Number(cacheExpiry)).toLocaleString()
      });
      return cachedCountry;
    }

    try {
      console.log('🌍 Fetching location data...');
      
      const userIP = await getUserIP();
      console.log('🔍 User IP:', userIP);
      
      const data = await getLocationData(userIP);
      
      if (data.status === 'error') {
        console.warn('⚠️ Using fallback location data');
        return 'US';
      }
      
      console.log('📡 API Response:', {
        ip: userIP,
        status: data.status,
        country: data.country,
        countryCode: data.countryCode,
        rawResponse: data
      });
      
      if (data.status === 'success' && data.countryCode) {
        localStorage.setItem('userCountry', data.countryCode);
        localStorage.setItem('userCountryExpiry', String(Date.now() + 24 * 60 * 60 * 1000));
        
        console.log('✅ Location data cached successfully');
        return data.countryCode;
      }
      
      console.warn('⚠️ Invalid API response:', data);
      throw new Error('Invalid API response');
    } catch (error) {
      console.error('❌ Error fetching country code:', {
        error,
        message: error instanceof Error ? error.message : 'Unknown error'
      });
      return 'US'; // Fallback para US
    }
  } catch (error) {
    console.error('❌ Error in getCountryCode:', error);
    return 'US';
  }
};

const getLocaleFromCountry = (countryCode: string): string => {
  const countryToLocale: { [key: string]: string } = {
    'MZ': 'pt-MZ',
    'BR': 'pt-BR',
    'US': 'en-US',
    'PT': 'pt-PT',
    'ES': 'es-ES',
    'DE': 'de-DE',
    'FR': 'fr-FR',
  };

  return countryToLocale[countryCode] || 'en-US';
};

export const formatPrice = async (price: number): Promise<string> => {
  try {
    const countryCode = await getCountryCode();
    const userLocale = getLocaleFromCountry(countryCode);
    
    return new Intl.NumberFormat(userLocale, {
      style: 'currency',
      currency: getCurrencyByLocale(userLocale),
    }).format(convertPrice(price, userLocale));
  } catch (error) {
    // Fallback para USD
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  }
};

const getCurrencyByLocale = (locale: string): string => {
  // Mapa simplificado de locales para moedas suportadas
  const localeMap: { [key: string]: string } = {
    'pt-MZ': 'MZN', // Moçambique
    'pt-BR': 'BRL', // Brasil
    'en-US': 'USD', // Estados Unidos
    'pt-PT': 'EUR', // Portugal
    'es-ES': 'EUR', // Espanha
    'de-DE': 'EUR', // Alemanha
    'fr-FR': 'EUR', // França
  };
  
  return localeMap[locale] || 'USD'; // USD como padrão
};

const convertPrice = (price: number, locale: string): number => {
  // Taxas de conversão em relação ao BRL (base)
  // Valores aproximados - Atualize conforme necessário
  const rates: { [key: string]: number } = {
    'BRL': 1.00,    // Real Brasileiro (base)
    'MZN': 15.50,   // Metical (1 BRL = ~15.50 MT)
    'USD': 0.20,    // Dólar (1 BRL = ~0.20 USD)
    'EUR': 0.19,    // Euro (1 BRL = ~0.19 EUR)
  };
  
  const currency = getCurrencyByLocale(locale);
  
  // Se a moeda não estiver nas taxas, usa USD como padrão
  if (!rates[currency]) {
    return price * rates['USD'];
  }
  
  return price * (rates[currency] || rates['USD']);
};

// Exemplo de uso:
// const price = 100; // preço em BRL
// console.log(formatPrice(price)); // Formata baseado na localização do usuário