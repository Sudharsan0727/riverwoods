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

  // 1. Salesforce Web-to-Lead (DO NOT TOUCH THIS LOGIC)
  const salesforceParams = {
    firstName: firstName,
    lastName: lastName,
    first_name: firstName, 
    last_name: lastName,   
    mobile: mobile,
    phone: mobile,         
    email: email,
    project: "Radiance Eternity",
    source: "Google",
    subSource: "Google_LP_RE",
    medium: "Google_LP_RE",
    propertyType: "Apartment",
    city: "Chennai",
    location: "Chennai",
  };

  const salesforceBody = new URLSearchParams(salesforceParams).toString();
  const salesforceUrl = "https://radiancerealty.my.salesforce-sites.com/ld/webToLead";

  const salesforcePromise = fetch(salesforceUrl, {
    method: 'POST',
    mode: 'no-cors',
    keepalive: true,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: salesforceBody
  });

  // 2. Email Notification (New Feature)
  const emailPromise = fetch("/mail.php", {
    method: 'POST',
    keepalive: true,
    headers: { 'Content-Type': 'application/json' },


    body: JSON.stringify({
      fullName,
      email,
      mobile,
      project: "Radiance Eternity"
    })
  }).catch(err => console.error("Email notification error:", err));
  
  // Return combined promise
  return Promise.allSettled([salesforcePromise, emailPromise]);
};


