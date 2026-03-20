/**
 * Submits lead data to Salesforce Web-to-Lead API
 * @param {Object} formData - Object containing fullName, email, and mobile
 * @returns {Promise} - Fetch promise
 */
import axios from 'axios';

export const submitLead = (formData) => {
  const { fullName, email, mobile } = formData;
  
  const nameParts = (fullName || '').trim().split(/\s+/);
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '.';

  // Get UTM parameters from URL for Salesforce
  const urlParams = new URLSearchParams(window.location.search);

  // 1. Salesforce Apex REST API (Matching Document Version 3.1)
  // Clean mobile number to be exactly 10 digits if provided (strip country code)
  const cleanMobile = (mobile || '').replace(/\D/g, '').slice(-10);

  // 1. Salesforce Apex REST API (Matching Document Version 3.1)
  const salesforceData = {
    firstName,
    lastName,
    mobile: cleanMobile,
    email,
    source: urlParams.get('utm_source') || "Web",
    project: "Radiance Riverwoods",
    subSource: urlParams.get('utm_medium') || "Google_LP_RP",
    medium: urlParams.get('utm_campaign') || "CPC", // Matches image example
    propertyType: "Apartment",
    city: "Coimbatore",
    location: "Coimbatore",
    // All UTM Parameters as per document
    utm_adgroup: urlParams.get('utm_adgroup') || "",
    utm_adgroupid: urlParams.get('utm_adgroupid') || "",
    utm_campaign: urlParams.get('utm_campaign') || "",
    utm_campaignid: urlParams.get('utm_campaignid') || "",
    utm_content: urlParams.get('utm_content') || "",
    utm_device: urlParams.get('utm_device') || "",
    utm_gclid: urlParams.get('utm_gclid') || "",
    utm_keyword: urlParams.get('utm_keyword') || "",
    utm_loc_interest: urlParams.get('utm_loc_interest') || "",
    utm_loc_physical: urlParams.get('utm_loc_physical') || "",
    utm_matchtype: urlParams.get('utm_matchtype') || "",
    utm_medium: urlParams.get('utm_medium') || "",
    utm_network: urlParams.get('utm_network') || "",
    utm_placement: urlParams.get('utm_placement') || "",
    utm_source: urlParams.get('utm_source') || "",
  };

  const salesforceUrl = "https://radiancerealty.my.salesforce-sites.com/LeadService/services/apexrest/createLead";

  // Trigger Salesforce API (Background)
  fetch(salesforceUrl, {
    method: 'POST',
    keepalive: true,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(salesforceData)
  }).catch(err => console.error("Salesforce API Error:", err));

  // Trigger Email API (Using fetch with keepalive to ensure it finishes)
  fetch('https://radiancedevelopers.com/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          fullName,
          email,
          mobile,
          project: "Radiance Platinum"
      }),
      keepalive: true
  }).catch(err => console.error("Email Error:", err));

  // RETURN IMMEDIATELY so the user doesn't wait
  return Promise.resolve(true); 
};



