/**
 * Submits lead data to Salesforce Web-to-Lead API
 * @param {Object} formData - Object containing fullName, email, and mobile
 * @returns {Promise} - Fetch promise
 */
export const submitLead = (formData) => {
  const { fullName, email, mobile } = formData;
  
  const nameParts = (fullName || '').trim().split(/\s+/);
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '.';

  const params = {
    firstName: firstName,
    lastName: lastName,
    first_name: firstName, // Standard Salesforce field name
    last_name: lastName,   // Standard Salesforce field name
    mobile: mobile,
    phone: mobile,         // Common Salesforce field name
    email: email,
    project: "Radiance Eternity",
    source: "Google",
    subSource: "Google_LP_RE",
    medium: "Google_LP_RE",
    propertyType: "Apartment",
    city: "Chennai",
    location: "Chennai",
  };


  const body = new URLSearchParams(params).toString();
  const url = "https://radiancerealty.my.salesforce-sites.com/ld/webToLead";

  // Use keepalive: true to ensure the request completes even if the page is navigated away
  return fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    keepalive: true,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body
  }).catch(err => {
    console.error("Background lead submission error:", err);
    throw err;
  });
};

