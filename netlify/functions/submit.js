exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
  const AIRTABLE_BASE  = 'appx5kSOVbuQkOGKS';
  const AIRTABLE_TABLE = 'tblTnm42Kvzeb9cNr';

  try {
    const rawFields = JSON.parse(event.body);

    // Remove the Submitted At date field — Airtable will reject it
    // Also remove any null, empty, or zero number values
    const cleanFields = Object.fromEntries(
      Object.entries(rawFields).filter(([k, v]) => {
        if (k === 'fldzlbP0lPBXbpWkO') return false; // Skip Submitted At
        if (v === null || v === undefined || v === '') return false;
        return true;
      })
    );

    console.log('Sending to Airtable:', JSON.stringify(cleanFields, null, 2));

    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fields: cleanFields })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Airtable rejected the request:', JSON.stringify(data, null, 2));
      return {
        statusCode: response.status,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: data })
      };
    }

    console.log('Success! Record created:', data.id);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, id: data.id })
    };

  } catch (err) {
    console.error('Function error:', err.message);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message })
    };
  }
};
