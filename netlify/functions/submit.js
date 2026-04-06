exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
  const AIRTABLE_BASE  = 'appx5kSOVbuQkOGKS';
  const AIRTABLE_TABLE = 'tblTnm42Kvzeb9cNr';

  try {
    const fields = JSON.parse(event.body);

    const cleanFields = Object.fromEntries(
      Object.entries(fields).filter(([k, v]) => v !== null && v !== '' && v !== undefined)
    );

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
      console.error('Airtable error:', JSON.stringify(data));
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: data })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: data.id })
    };

  } catch (err) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
