export const checkEnv = () => {
  const requiredEnvVars = ['VITE_NET_API_BASE_URL', 'VITE_JAVA_API_BASE_URL', 'VITE_AUTHEN_API_BASE_URL'];
  const missingEnvVars = requiredEnvVars.filter((envVar) => !import.meta.env[envVar]);

  if (missingEnvVars.length > 0) {
    return `Missing required environment variables: ${missingEnvVars.join(', ')}`;
  }

  return null;
};