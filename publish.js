require('dotenv').config();
const axios = require('axios');

const SHOPIFY_DOMAIN = `${process.env.SHOPIFY_STORE_URL}.myshopify.com`;
const ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN;

const createPage = async () => {
  try {
    const response = await axios.post(
      `https://${SHOPIFY_DOMAIN}/admin/api/2024-01/pages.json`,
      {
        page: {
          title: "Test Page Create Update",
          body_html: "<h1>Test Complete</h1>",
          handle: "test-page-rest"
        }
      },
      {
        headers: {
          'X-Shopify-Access-Token': ACCESS_TOKEN,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log("✅ Page created:", response.data.page);
  } catch (error) {
    console.error("❌ Error creating page:", error.response?.data || error.message);
  }
};

createPage();
