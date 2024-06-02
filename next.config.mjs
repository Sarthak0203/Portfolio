import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
};

let config;

try {
  config = withSentryConfig(nextConfig, {
    org: "student-4bf",
    project: "javascript-nextjs",
    silent: !process.env.CI,
    widenClientFileUpload: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  });
} catch (error) {
  console.error('Failed to configure Sentry:', error);
  throw error;
}

export default config;
