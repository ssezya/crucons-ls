const development = {
    API_BASE_URL: 'http://localhost:8894/api'
};

const production = {
    API_BASE_URL: 'http://production.address/api'
};

export const applicationConfig = process.env.NODE_ENV === 'production' ? production : development;