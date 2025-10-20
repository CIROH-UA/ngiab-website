// Environment configuration
const isStaging = window.location.hostname.includes('ciroh.org') && 
                   window.location.pathname.includes('ngiab-website-staging');

const isProduction = window.location.hostname.includes('ciroh.org') && 
                     !window.location.pathname.includes('ngiab-website-staging');

export const config = {
  basePath: isStaging ? '/ngiab-website-staging/' : '/',
  routerBasename: isStaging ? '/ngiab-website-staging/' : '/',
  environment: isStaging ? 'staging' : isProduction ? 'production' : 'development',
};
